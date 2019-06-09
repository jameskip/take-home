## Available Scripts 🐿

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

#### Built With
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Material-UI](https://material-ui.com)
- [Flow](https://flow.org/en/)

#### Style Guide
[StandardJS](https://standardjs.com/)

#### Helpful Links
- [React Hooks API](https://reactjs.org/docs/hooks-reference.html)
- [React Router Docs](https://reacttraining.com/react-router/web/guides/quick-start)

---
##### Page 1
- [x] Make background request for user's information and store it in the Redux store
- [x] Page should have two input fields in which the user will enter a `to` address and a `from` address
- [x] Validate address with Shipwell API

##### Page 2
- [x] Show Google Maps with markers on the `to` and `from` addresses
- [x] Draw route between the two markers to show the directions
- [x] Page should display some of the user's data from the Redux store

###### Guidelines

- [x]  Build a single page appUse react and redux
- [x]  Use Shipwell API to validate address input
- [x]  Use Google Maps for drawing markers and routes on the map
- [x]  Create a repository on GitHub and share the link with us. (if the repo is private share with 'nfortenberry')

###### Bonus

- [ ] Show the user's company address on the map. This information is returned in the user information request.
- [ ] Write tests for your code