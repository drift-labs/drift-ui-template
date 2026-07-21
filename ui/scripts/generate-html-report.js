#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const reportsDir = path.resolve(__dirname, '..', 'reports');
const combinedFile = path.join(reportsDir, 'combined-report.json');
const outFile = path.join(reportsDir, 'combined-report.html');

function safeReadJSON(file) {
  try {
    const raw = fs.readFileSync(file, 'utf8');
    return JSON.parse(raw.replace(/^```json\n|\n```$/g, '').trim());
  } catch (err) {
    return null;
  }
}

function fileExists(rel) {
  return fs.existsSync(path.join(reportsDir, rel));
}

function readFileIfExists(rel) {
  const p = path.join(reportsDir, rel);
  if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8');
  return null;
}

function toHtmlEscaped(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function build() {
  const combined = safeReadJSON(combinedFile);
  if (!combined) {
    console.error('Could not read', combinedFile);
    process.exit(1);
  }

  const counts = { passed: 0, failed: 0, other: 0 };
  for (const r of combined.reports) {
    const st = r.data && r.data.status;
    if (st === 'passed') counts.passed++;
    else if (st === 'failed') counts.failed++;
    else counts.other++;
  }

  let rows = '';
  for (const r of combined.reports) {
    const folder = r.path;
    const status = r.data && r.data.status ? r.data.status : 'unknown';
    const failedTests = Array.isArray(r.data && r.data.failedTests) ? r.data.failedTests : [];

    // recursively search for error-context.md and images
    let errorHtml = '';
    let screenshotsHtml = '';
    function walkDir(relDir) {
      const abs = path.join(reportsDir, relDir);
      if (!fs.existsSync(abs)) return;
      const items = fs.readdirSync(abs, { withFileTypes: true });
      for (const it of items) {
        const childRel = path.join(relDir, it.name);
        const childAbs = path.join(reportsDir, childRel);
        if (it.isDirectory()) {
          walkDir(childRel);
        } else if (it.isFile()) {
          if (it.name.toLowerCase() === 'error-context.md' && !errorHtml) {
            const c = fs.readFileSync(childAbs, 'utf8');
            errorHtml = `<details><summary>Error context</summary><pre>${toHtmlEscaped(c)}</pre></details>`;
          }
          if (/\.(png|jpe?g|gif|webp)$/i.test(it.name)) {
            screenshotsHtml += `<a href="${encodeURI(folder + '/' + childRel.slice(folder.length + 1))}"><img src="${encodeURI(folder + '/' + childRel.slice(folder.length + 1))}" style="max-width:200px;max-height:150px;margin:4px;border:1px solid #ccc"></a>`;
          }
        }
      }
    }
    walkDir(folder);

    rows += `
      <tr class="${status}">
        <td>${toHtmlEscaped(folder)}</td>
        <td>${toHtmlEscaped(status)}</td>
        <td>${toHtmlEscaped(failedTests.join(', ') || '-')}</td>
  <td>${errorHtml || '-'}</td>
  <td>${screenshotsHtml || '-'}</td>
      </tr>`;
  }

  const html = `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Combined Test Report</title>
    <style>
      body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; padding: 20px }
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 8px; }
      th { background: #f4f4f4; text-align: left }
      tr.failed { background: #ffeef0 }
      tr.passed { background: #ecffed }
      .summary { margin-bottom: 12px }
      a { color: #0366d6 }
    </style>
  </head>
  <body>
    <h1>Combined Test Report</h1>
    <p class="summary">Generated: ${toHtmlEscaped(combined.generatedAt || new Date().toISOString())} — ${combined.sourceCount} reports — Passed: ${counts.passed} Failed: ${counts.failed} Other: ${counts.other}</p>
    <table>
      <thead>
        <tr><th>Report folder</th><th>Status</th><th>Failed tests</th><th>Error context</th><th>Screenshots</th></tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
    <p>Note: Links are relative to the repository root. Open this file from the <code>ui/reports</code> folder in a browser or via file:/// path for local access to artifacts.</p>
  </body>
  </html>`;

  fs.writeFileSync(outFile, html, 'utf8');
  console.log('Wrote HTML report to', outFile);
}

if (require.main === module) build();
