[![npm version](https://badge.fury.io/js/%40aiswarm%2Fui-cli.svg)](https://badge.fury.io/js/%40aiswarm%2Fui-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/%40aiswarm%2Fui-cli.svg)](https://npmjs.com/package/%40aiswarm%2Fui-cli)
[![Issues](https://img.shields.io/github/issues-raw/aiswarm/ui-cli)](https://github.com/aiswarm/ui-cli/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/aiswarm/ui-cli/badge.svg)](https://snyk.io/test/github/aiswarm/ui-cli)

# AI Swarm - UI Command Line Interface

This is the command line interface for the AI Swarm. It allows you to launch the orchestrator from the command line and provides logging information.
All file operations (like config loading) are handled by this project to allow the orchestrator to run in a browser environment.

If you're looking for an easy way to get started with the AI Swarm, check out the [Conductor](https://github.com/aiswarm/conductor) project.

## Project setup for development

```
npm install
```

## Recommended Setup for development with other plugins

You will need to link the plugin to the other plugins you want to use. So that you can make changes and see them immediately without having to publish the plugin to npm.

For this I recommend you create a new folder for the AI Swarm and clone all the plugins you want to use into it. Then link them together.

Each plugin has `link` script defined in the `package.json` file if there are dependencies on other packages.
You can run it with `npm run link` to link your code directly when you make changes.