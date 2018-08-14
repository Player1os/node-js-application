# TS Node Application Template

[![License](https://img.shields.io/github/license/Player1os/ts-node-application-template.svg)](https://github.com/Player1os/ts-node-application-template/blob/master/LICENSE)
[![NodeJS version](https://img.shields.io/badge/node%20version-v10.6.0-brightgreen.svg)](https://nodejs.org/dist/v10.6.0/)
[![GitHub tag](https://img.shields.io/github/tag/Player1os/ts-node-application-template.svg?label=version)](https://github.com/Player1os/ts-node-application-template/releases)
[![Build Status](https://travis-ci.org/Player1os/ts-node-application-template.svg?branch=master)](https://travis-ci.org/Player1os/ts-node-application-template)
[![Coverage Status](https://img.shields.io/coveralls/github/Player1os/ts-node-application-template.svg)](https://coveralls.io/github/Player1os/ts-node-application-template?branch=master)

This project serves as a template for any application compiled to be executed in a NodeJS environment.

The repository includes:

- Compiling and running of the core application's code written in Typescript.
- Compiling and running of tests also written in Typescript.
- Linting of all contains source code.
- Locally deploying the application.
- Managing the upgrading a daemon of the application.

## Scripts

All tasks are defined as npm scripts:

- Building the application: `npm run build:app`
- Building the application in watch mode: `npm run build:app:watch`
- Building the tests: `npm run build:test`
- Building the tests in watch mode: `npm run build:test:watch`
- Running the application: `npm start`
- Running the application in watch mode: `npm run start:watch`
- Running the application in the background: `npm run start:background`
- Running the tests: `npm test`
- Running the tests in watch mode: `npm run test:watch`
- Running the code linter: `npm run lint`
- Running the code linter in watch mode: `npm run lint:watch`
- Deploying and starting the application: `npm run deploy:init`
- Upgrading and redeploying the running application: `npm run deploy:upgrade`
- Running the testing on the current deployment: `npm run deploy:test`

## Creating a new application

Follow these instructions to create a new forked application repository:

1. Fork this repository on github.
2. Setup the new repository locally.
3. Add a remote by entering `git remote add base git@github.com:Player1os/node-js-application.git`
or `git remote add base https://github.com/Player1os/node-js-application.git`.

## Updating the new application with changes from the base

Follow these instructions to update the new application:

1. Fetch the base repository's branches `git fetch base`.
2. Make sure you are in the application's master branch `git checkout master`.
3. Rebase the application's master branch to the base repository's master `git rebase upstream/master`.

## Debugging

To debug the application choose the *Launch App* configuration in the vscode debugger.
To debug the application's tests choose the *Launch Tests* configuration in the vscode debugger.

## Development

It is recommended to run the following scripts in separate windows during development:

1. `npm run build:app:watch`
2. `npm run build:test:watch`
3. `npm run lint:watch`
4. `npm run start:watch`
5. `npm run test:watch`

## Publishing a new version

Follow these instructions, when a new version is ready to be published:

1. Commit and push the final changes to the topic branch of the git repository.
2. Create a pull request in the origin repository and await approval (a quick test can be done by running `npm run validate`).
3. After the merge is complete, run the `npm version [significance]` script choosing the `patch`, `minor` or `major` as the second argument depending on the significance of the changes to be applied.

## Deploying a new version

1. Make sure a `migration` script is defined if needed for the current version.
2. Run the required deploy script (either for initialization or for upgrading the current instance).
3. If needed, run the tests on the current deployment.

## TODO

- Add NYC/Istanbul code coverage.
- Setup Continuous Integration.
