# Webpack multi-loader & extract-text-plugin bug demo

To reproduce:

1. `yarn install`
2. `yarn webpack`
3. Inspect **dist/main.bundle.js**. Note that module `0` in the bundle is
  `./select2.png`, but elsewhere in the bundle, module `0` is referenced as the
  source for `./../../process/browser.js`.
