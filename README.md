[![My Skills](https://skills.thijs.gg/icons?i=js,typescript,react,redux,graphql,docker,jest,cypress)](https://skills.thijs.gg)

<h1 align="center"> Rick and Morty Cards Deck</h1>

[![Build Status](https://github.com/sabriskay/rick-and-morty-cards-deck/workflows/Test/badge.svg)](https://github.com/sabriskay/rick-and-morty-cards-deck/actions)

<p align="center"> 
  <img src="./rickandmorty-readme.gif" alt="Animated gif rickandmorty game" height="282px" width="637">
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2> About The Project</h2>

<p align="justify"> 
  Find your favorite Rick And Morty character from a pile of jumbled cards. But be careful not to choose a ☠️ dead one.
</p>

[DEMO](https://sabriskay.github.io)

<h2>Prerequisites</h2>

- Install [Docker](https://docs.docker.com/engine/install/)
  - run <code>$ docker info</code> in your terminal to check the installation.
- Install yarn `npm install --global yarn`
  - Check installation `yarn --version`
  - Just run `yarn` on the root project

<h2>Available Scripts</h2>

In the project directory, you can run:
<br/>

<code>yarn start</code>

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`yarn test:cypress`

Launches the end-to-end test runner in your browser. Receive the app status and verify your code in a friendly way.

This command doesn't work yet due to misconfigurations. Please use `test:cypress:open` instead to test locally.

`yarn test:cypress:open`

- Make sure you have installed cypress in your computer by doing `npm install -g cypress`
- Make sure your application is running in localhost:3000
- Then run this command which will open a new electron window in this project
- In the new window click: "E2E Testing"
- Then select "Chrome"
- Then click on "Start E2E Testing in Chrome"
- Then open any given spec by clicking on it
- You can make changes to either the code or the spec, and re-run interactively

`yarn schema:download`

It project uses graphQL. If you make changes on the queries, make sure to run this command to regenerated the types definitions.

`yarn schema:generate-watch`

When you are in development environment, you should be use it command and if you need you can check on `__generated__` 👀 filter the changes.

    .
    │
    ├── app
    │   ├── services
    │   │   ├── rickandMortyService
    │   │   │   ├── `__generated__`

`yarn lint` and `yarn lint:fix`

In this project eslint and prettier are working together to follow good practices and clear code. (You can't spik it 👮‍♂️ the project has GitHub actions to check all after deploy)

<h2>Contributing</h2>

<h4>Bug Reports & Feature Requests</h4>
Please use the [issue tracker](https://github.com/sabriskay/rick-and-morty-cards-deck/issues) to report any bugs or file feature requests.

Developing
PRs are welcome. To begin developing, do this:

```bash
$ git push
```

And check the GitHub Actions!
