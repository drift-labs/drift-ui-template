import type { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import { v4 } from 'uuid';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

dotenv.config({
    path: process.env.TARGET_ENV === undefined ? `${__dirname}/config/.env.devnet` : `${__dirname}/config/.env.${process.env.TARGET_ENV}`,
    override: true,
});

// set project env variable
process.env.PROJECT = 'drift';
// Disable all node deprecation warnings
process.env.NODE_OPTIONS = '--no-deprecation';

// place the HTML reports under the current project
process.env.PLAYWRIGHT_HTML_REPORT = process.env.PLAYWRIGHT_HTML_REPORT ? process.env.PLAYWRIGHT_HTML_REPORT : `${__dirname}/playwright-report`;
if (!path.isAbsolute(process.env.PLAYWRIGHT_HTML_REPORT)) process.env.PLAYWRIGHT_HTML_REPORT = `${__dirname}/${process.env.PLAYWRIGHT_HTML_REPORT}`;

const config: PlaywrightTestConfig = {
    testDir: './specs',
    /* Maximum time one test can run for. */
    timeout: 60000,
    expect: {
        timeout: 10000,
    },
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    fullyParallel: true,
    retries: 0,
    workers: undefined,
    reporter: process.env.CI ? [
        ['blob'],
        ['list'],
    ] : [
        ['html', { open: process.env.OPEN_HTML_REPORTER || 'on-failure' }],
        [
            'json',
            {
                outputFile: process.env.CI ? `${process.env.PLAYWRIGHT_HTML_REPORT}/test-results-${v4().replace(/-/g, '')}.json`
                    : `${process.env.PLAYWRIGHT_HTML_REPORT}/test-results.json`,
            },
        ],
        ['list'],
    ],
    use: {
        screenshot: process.env.TARGET_ENV === 'prod' ? 'on' : 'only-on-failure',
        trace: 'on-first-retry',
        video: process.env.CI ? 'off' : 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium',
                actionTimeout: 15000,
                permissions: ['clipboard-read', 'clipboard-write'],
            },
            fullyParallel: true,
            testMatch: '*.spec.ts',
            retries: process.env.DO_NOT_RETRY ? 0 : 1,
        },
    ],
};
export default config;
