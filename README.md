# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Application

I've added a dashboard screen which provides option to either register or admin login. This option can be selected in the main screen. This application is built using React with Redux and TypeScript.

## Important Note

There has been slight amendment of the Figma design. The backend API don't have the capability to handle the _DOB_ and _Opt-in_ status, so Nathan & Andy asked me to remove it from the designs. Also, there seems to issue with the _email_ field. It's always set to _null_. So, the email field will be empty in the Customers list screen.

## Directory Structure

All the TS code live in _/src/_ directory. _index.tsx_ is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.

## Redux Store

This application requires information shared between 2 components. Redux is used to solve this. I don't want to populate _props_ by sending all the information through it. Also, by using redux store the code is clean & reusable.

Redux store is configured in _/src/store/index.ts_ & imported into '_/index.tsx_'.

## React Router

I've used _react-router_ to manage the client side routing for the application. Routes are configured in _/routers/AppRouter.tsx_.

## Reducers

1. auth - Stores the token

## Components

1. Admin - Allows admin user to login
2. Button - Button component that's used all over the app
3. Container - Wrapper of the app
4. Dashboard - Provides option to choose either registration or admin login
5. Input - input component that's used all over the app
6. Register - Renders the registration form
7. Success - Confirming the user that the registration was successful.
