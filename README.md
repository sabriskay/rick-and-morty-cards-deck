[![My Skills](https://skills.thijs.gg/icons?i=js,typescript,react,redux,graphql,docker,jest,cypress)](https://skills.thijs.gg)

<h1 align="center"> Rick and Morty Cards Desk</h1>

![Build Status](https://github.com/probot/example-github-action/workflows/Test/badge.svg)

<p align="center"> 
  <img src="./rickandmorty-readme.gif" alt="Animated gif rickandmorty game" height="282px" width="637">
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2> About The Project</h2>

<p align="justify"> 
  Find your favorite Rick And Morty character from a pile of jumbled cards. But be careful not to choose a ☠️ dead one.
</p>

<h2>Prerequisites</h2>

- Install [Docker](https://docs.docker.com/engine/install/)
  - run <code>$ docker info</code> in your terminal to check the installation.

<br/>
<br/>
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

`yarn schema:download`

We are using https://rickandmortyapi.com/graphq API to create and get the character's data. I think it is better in this case to save the schema. Run this command to do that and know its structure in deep.

`yarn schema:generate-watch`

Get and generate all the type for your query of interest. che the folther `__generated__` 👀

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
