#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const reportsDir = path.resolve(__dirname, '..', 'reports');
const outFile = path.join(reportsDir, 'combined-report.json');

function findLastRunFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...findLastRunFiles(full));
    } else if (e.isFile() && e.name === '.last-run.json') {
      results.push(full);
    }
  }
  return results;
}

function readJsonSafe(file) {
  try {
    const raw = fs.readFileSync(file, 'utf8');
    // strip possible markdown code fences
    const cleaned = raw.replace(/^```json\n|\n```$/g, '').trim();
    return JSON.parse(cleaned);
  } catch (err) {
    return { __error: String(err) };
  }
}

function main() {
  if (!fs.existsSync(reportsDir)) {
    console.error('reports dir not found:', reportsDir);
    process.exit(1);
  }

  const files = findLastRunFiles(reportsDir);
  const combined = {
    generatedAt: new Date().toISOString(),
    sourceCount: files.length,
    reports: [],
  };

  for (const f of files) {
    const rel = path.relative(reportsDir, path.dirname(f));
    const data = readJsonSafe(f);
    combined.reports.push({
      path: rel,
      file: path.basename(f),
      data,
    });
  }

  fs.writeFileSync(outFile, JSON.stringify(combined, null, 2), 'utf8');
  console.log('Wrote combined report to', outFile);
}

if (require.main === module) main();
