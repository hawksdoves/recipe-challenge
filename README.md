# Recipe Challenge App

* Stage 1: master branch
* Stage 2: redux-search-favourite branch

### install

* `npm i` - install dependencies. Do this when in the root of recipe-challenge-server and recipe-challenge-client

## recipe-challenge-server
### compile

* `npm run compile` - compiles app from es6 to es5

### Run in dev

* `npm run start:dev` - compiles and then runs in watch mode: watches server & app scripts

### run in prod

* `npm run start` - compiles and then runs app in production mode

### Test

* `npm test` - runs tests with coverage (ensure you have compiled first)

## recipe-challenge-client
### compile

* `npm run build` - compiles app from es6 to es5

### run app

* `npm run start` - compiles and then runs app in production mode

### Test

* `npm test` - runs tests with coverage (ensure you have compiled first)

# Approach

## Reviewing Features:
Given the time frame, I first looked over the features and decided on what would be the MVP. I decided to focus on recipe_list and recipe. I then prioritised the scenarios.

*UPDATE- Stage 2:*
Given that I had already implemented the basic features and scenarios of recipe_list and recipe, I decided to focus on the other two features, filter and star. I then prioritised the scenarios.

## TDD
Jest, enzyme and supertest. Server side coverage is high, however, client side I need to increase coverage. The lines that I have not tested within components would not be relevant when using redux. [See 'Given more time I would...'](#Given-more-time-I-would...)

## Server Side
Using express and node I created my server. I wanted to use ES6 so used babel. I first thought about how the response Json's should look for the different api calls. I decided to first mock these jsons, with the premise that when I introduce calls to a database, it would be an easy switch over. My mocks are in the folder dataMocks

## Client Side
Used create-react-app to generate basic template. Note: only the public folder I did not change and/or create. I decided to use react-router-dom for routing and semantic-ui-react to create basic styling. For my api requests I chose axios as I like that it returns promises as well as removing the need to parse the Json. I extracted my api requests as services so that they would be reusable and helpful when creating action creators.

*UPDATE - Stage 2:*
I restructured my components hierarchy prior to implementing the new features. I used redux to store recipes and favourites (as I did not implement user login or an api for their favourites, favourites will not persist between sessions). I have not yet implemented actions/reducers when handling errors e.g. FETCH_RECIPES_ERROR/fetchRecipesError etc.  For recipe search I implemented searching by recipe name.

## Given more time I would...

* Switch to postgresql, pg-promise, and do a data dump
* Handle server side errors and expand actions and reducers
* Server side rendering and make request for recipes at this stage
* Potentially use Graphql, dependent on how many tables and api requests
* Expand test coverage for client side
* Define propTypes for each of the components
* Styling


I focused on...
------------------
* TDD
* Reusable components
* JSON structure
