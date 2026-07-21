# QA Automation
This repo e2e cases for Drift UI. 
Please note: there is usually no mocking. This is done in order to maintain a high level of confidence whenever releasing anything to the end user. Any exceptions to this should be documented. 


## Pre-requistises
1. NodeJS v22. For example, using nvm: `nvm install 22`
2. yarn. For example, using brew: `brew install yarn`
3. [playwright](https://playwright.dev/docs/intro)

## Setup
```bash
cd ui/tests/qa
# install all the packages, including playwright
yarn install
# install the browser binaries & other necessary dependencies
npx playwright install --with-deps
```

## Structure
This section describes the expected structure of this framework. As a starting/simple rule of thumb, try to adere to the single responsibility principle (SRP) as much as possible. Exceptions should be documented/commented.


### Folders
The folder structure is as follows:- 
- `drift/` includes all drift files (specs, pages, utilities, etc.)

- `config/` includes all the configuration files for the given project
- `pages/` includes all the page classes for the given project
- `specs/` includes all the specs for the given project
- `utils/` includes all the common utilities for the given project


### The `config/` folder
Contains all the environment variables to be loaded for a specific environment. By default, the `config/.env.devnet` is loaded. If you wish to add and use a new `.env` file, you can do so via the `TARGET_ENV` environment variable, e.g.: `TARGET_ENV=local npx playwright test --config=./playwright.config.ts"`. This would run the scripts using the variables set on `.env.local`.

### The `pages/` folder
Contains all the page classes, following a standard POM approach. If a page does not have a class yet, do add one following a similar structure as the ones that are already in place.

#### BasePage class
All pages, except components, should extend this class. Any common components (present on all pages) should be added to the `pages/components` folder and be loaded as part of the `BasePage` class. For example, a footer:

```typescript
// BasePage.ts
import { FooterComponent } from './components/Footer';

export class BasePage {
    page: Page;
    footer: FooterComponent;

    constructor(page: Page) {
        this.page = page;
        this.footer = new FooterComponent(page);
    }

    async navigate(path = '') {
        return this.page.goto(`${process.env.DRIFT_UI_URL}${path}`);
    }
}
```

All other pages should extend from this class and, in order to maintain the SRP, any methods specific to a page should live within it only.

### The `specs/` folder
This is where all the specs live. They may be distribuited into folders, depending on what makes more sense business wise. Specific methods may be added to a specific spec only if it applies only to that particular spec. Otherwise consider making it part of a page class or a common utility (folder `/utils`).

### The `utils/` folder

Contains common utilities that are used across multiple specs.

## Contributing
Ensure you follow the structure described above and that you follow the lint rules established for this project. You may do so via the following commands:

```bash
# lint your code, make any fixes if you get any errors or warnings
yarn eslint
```

### Tags
Tags can be added to specs, but avoid overpopulating specs with tags or creating too many different tags. Examples of tags, can be:
- `@regression` cases that would be part of suite for regression testing
- `@e2e` for cases involving end-to-end functionality

All tests must be tagged accordingly, e.g.: 
```js
test('This is my first test', {
    tag: ['@e2e', '@regression'],
  }, async () => {
    // your test
  }
);
```
## Run
```bash
# To run e2e cases
yarn e2e

# To run a specific Drift script (e.g. E2E Create Account & Deposit) against devnet environment
TARGET_ENV=devnet npx playwright test --config=drift/playwright.config.ts --workers=2  --project=chromium --trace on --retries=1 -g 'E2E Create Account & Deposit'

# To run a specific Drift folder of specs (e.g. reate Account & Deposit) against devnet environment
TARGET_ENV=devnet npx playwright test --config=drift/playwright.config.ts --workers=2  --project=chromium --trace on --retries=1 drift/specs/createAccountAndDeposit.spec.ts
```

On failure, a report and trace will be generated that allows you to debug your scripts in a much more straightforward way. If the report from your last run (with failures) is not launched automatically, try executing the following command:

```bash
npx playwright show-report drift/playwright-report/
```
