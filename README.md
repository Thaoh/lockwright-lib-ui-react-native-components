<p align="center">
  <img src="docs/logo.svg" alt="Lockwright" width="128"/>
</p>

# lockwright-lib-ui-react-native-components

Shared UI kit for Lockwright. Desktop, mobile, and the browser extension use it.

Site: [lockwright.dexterity.works](https://lockwright.dexterity.works)

Community fork of PearPass (Apache 2.0). Not affiliated with or endorsed by Tether Data or the Pears project.

Imports stay `@tetherto/pearpass-lib-ui-kit` in the apps. That npm name is not this fork if you install it from the npm registry.

## Table of contents

- [Architecture](#architecture)
- [Getting started](#getting-started)
- [Dependencies](#dependencies)
- [Related projects](#related-projects)
- [Contributing](#contributing)
- [License](#license)

## Architecture

React Strict DOM. One component API. HTML and CSS on web and desktop. Native views on mobile.

## Getting started

Storybook is the local preview.

```bash
npm install
npm run storybook
```

That serves the Vite React DOM build. You can click through states there.

Native preview (iOS or Android):

```bash
cd storybook-native
npm install
```

```bash
# From the package root
npm run storybook:native:ios
npm run storybook:native:android

# Or from storybook-native
npx expo run:ios
npx expo run:android
```

The native app in `storybook-native/` loads the same stories.

## Dependencies

Peer dependencies:

- [`react`](https://reactjs.org/)
- [`react-native`](https://reactnative.dev/)
- [`react-native-svg`](https://github.com/software-mansion/react-native-svg)
- [`react-strict-dom`](https://github.com/facebook/react-strict-dom)

The full list is in `package.json`.

## Related projects

- [lockwright-app-desktop](https://github.com/Thaoh/lockwright-app-desktop)
- [lockwright-app-mobile](https://github.com/Thaoh/lockwright-app-mobile)
- [lockwright-app-browser-extension](https://github.com/Thaoh/lockwright-app-browser-extension)
- [pearpass-utils-password-check](https://github.com/tetherto/pearpass-utils-password-check)
- [pearpass-lib-ui-theme-provider](https://github.com/tetherto/pearpass-lib-ui-theme-provider)
- [tether-dev-docs](https://github.com/tetherto/tether-dev-docs)

## Contributing

Issues and pull requests are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

Apache License 2.0. See `LICENSE` and `NOTICE`.
