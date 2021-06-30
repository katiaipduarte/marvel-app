# Marvel App

WebApp to search for information about the comics from the Marvel world.

Demo at: https://marvel-app-black.vercel.app/

App created using [create-react-app](https://github.com/facebook/create-react-app), [TypeScript](https://www.typescriptlang.org/), [styled-components](https://styled-components.com/), [Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) and for testing [Jest](https://jestjs.io/). Thank you for using my app.

## Table of Contents

- [Installation](#installation)
  - [API Keys](#api-keys)
- [Future Work](#future-work)
- [Contributing](#contributing)
- [License](#license)
- [Folder Structure](#folder-structure)
- [Routes](#routes)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
  - [npm run lint](#npm-run-lint)
  - [npm run format](#npm-run-format)
- [Learn More](#learn-more)

## Installation

To use this app, first clone from GitHub via `git clone https://github.com/katiaipduarte/marvel-app` at your terminal, `cd` to the new directory, then run `npm install`. Before running this project, you will need to create a `.env.local` file, with the same env as the ones in the `.env.example`. At last, run `npm run start` to launch your http server.

### API Keys

The API used is https://developer.marvel.com. Since it is free we just need to add the endpoint and use it.

## Future Work

[ ]  <br>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/katiaipduarte/marvel-app. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

The code is available as open source under the terms of the MIT License.

## Folder Structure

After creation, your project should look like this:

```
marvel-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    components/
    interfaces/
    lib/
    styles/
      index.ts
    App.tsx
    index.tsx
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.tsx` is the TypeScript entry point.
- `src/components` is the folder that houses all the components used.
- `src/interfaces` is the folder with all the interfaces/type files used in the components.
- `src/lib` is the folder for all the services, providers or hooks.
- `src/styles` is the folder with typography, reset and any other style rules shared by all React components.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any TypeScript and styles files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Automatic linting, with rules to work with TypeScript and React. The `src/serviceWorker.ts` file and the `node_modules`m folder are not included.

This is runned each time you do a commit and a push it to your branch.

For more information see the [ESLint documentation](https://eslint.org/).

### `npm run format`

Command to format the code according to the rules that can be found in `.prettierrc`. The `node_modules` folder is not included.

This will be automatically run each time you do a commit.

For more information see the [Prettier documentation](https://prettier.io/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
