# Recipe Challenge App

### install

* `npm i` - install dependencies. Do this when in the root of recipe-challenge-server and recipe-challenge-client

## recipe-challenge-server
### compile

* `npm run build` - compiles app from es6 to es5

### Run in dev

* `npm run start:dev` - compiles and then runs in watch mode: watches server & app scripts

### run in prod

* `npm run start` - compiles and then runs app in production mode

### Test

* `npm test` - runs tests with coverage

## recipe-challenge-client
### compile

* `npm run build` - compiles app from es6 to es5

### run app

* `npm run start` - compiles and then runs app in production mode

### Test

* `npm test` - runs tests with coverage

# Approach

## Reviewing Features:
Given the time frame, I first looked over the features and decided on what would be the MVP. I decided to focus on recipe_list and recipe. I then prioritised the scenarios.

## TDD
Jest, enzyme and supertest. Server side coverage is high, however, client side I need to increase coverage. The lines that I have not tested within components would not be relevant when using redux. [See 'Given more time I would...'](#Given-more-time-I-would...)

## Server Side
Using express and node I created my server. I wanted to use ES6 so used babel. I first thought about how the response Json's should look for the different api calls. I decided to first mock these jsons, with the premise that when I introduce calls to a database, it would be an easy switch over. My mocks are in the folder dataMocks

## Client Side
Used create-react-app to generate basic template. Note: only the public folder I did not change and/or create. I decided to use react-router-dom for routing and semantic-ui-react to create basic styling. For my api requests I chose axios as I like that it returns promises as well as removing the need to parse the Json. I extracted my api requests as services so that they would be reusable and helpful when creating action creators.

## Given more time I would...

* Switch to postgresql, pg-promise, and do a data dump
* Handle server side errors
* Server side rendering and make request for recipes at this stage
* Use redux, so that we can store the list of recipes when we first render the app. (Potentially would want to use Graphql, dependent on how many tables and api requests)
* Create searchable box, using redux such that results change instantly
* Expand test coverage for client side
* Define propTypes for each of the components
* Styling


I focused on...
------------------
* TDD
* Reusable components
* JSON structure
