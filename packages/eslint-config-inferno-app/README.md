# eslint-config-infernoapp

This package includes the shareable ESLint configuration used by [Create Inferno App](https://github.com/infernojs/create-inferno-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/infernojs/create-inferno-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/infernojs/create-inferno-app/blob/master/packages/inferno-scripts/template/README.md) – How to develop apps bootstrapped with Create Inferno App.

## Usage in Create Inferno App Projects

The easiest way to use this configuration is with [Create Inferno App](https://github.com/infernojs/create-inferno-app), which includes it by default. **You don’t need to install it separately in Create Inferno App projects.**

## Usage Outside of Create Inferno App

If you want to use this ESLint configuration in a project not built with Create Inferno App, you can install it with following steps.

First, install this package, ESLint and the necessary plugins.

  ```sh
  npm install --save-dev eslint-config-inferno-app babel-eslint@7.1.1 eslint@3.16.1 eslint-plugin-flowtype@2.21.0 eslint-plugin-import@2.0.1 eslint-plugin-jsx-a11y@4.0.0 eslint-plugin-inferno@6.4.1
  ```

Then create a file named `.eslintrc` with following contents in the root folder of your project:

  ```js
  {
    "extends": "inferno-app"
  }
  ```

  That's it! You can override the settings from `eslint-config-inferno-app` by editing the `.eslintrc` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.
