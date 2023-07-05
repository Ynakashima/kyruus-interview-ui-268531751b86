# Kyruus Front End Interview

This repository contains the outline of a React front end web application. Please review the problem statement below and feel free to ask any clarifying questions.

Please spend some focused time, but no more than 4 hours, designing & building a solution to the problem below. Please treat it as if it were a new production system you were developing at work. When you finish, please send your code back to Kyruus for us to review in advance of your interview day.

When you arrive at Kyruus for your interview, please be prepared to discuss your work with members of the engineering team.

## Problem statement

We would like to build a simple UI to view, delete, and update a set of application users.

### Requirements

The user of the application should be able to

* View a list of users
* Delete a user
* Add a user
* Update a user name and e-mail

### User API spec

The User API adheres to the following API spec:

#### User Object

```js
{
  id: "string",
  name: "string",
  email: "email"
}
```
#### Endpoints

* GET `/users returns` `{ users: [ { array of user objects ]}`
* GET `/users/:id` returns a user object
* POST `/users` accepts `{ name: 'string', email: 'string'}`, returns a user object with an id
* DELETE `/users/:id` returns `{ success: true/false }`
* PATCH `/users/:id` returns `{ }`

## Getting started

This repository contains a react app that is bundled with webpack and is served with a built in development server. The public/index.html
already includes and mounts the react component in src/App.js.

### Prerequisites

* [git](https://git-scm.com/downloads)
* [Node.js 6+](https://nodejs.org/en/download/)
* npm 3+ (bundled with node.js)

### Set Up

First install the dependencies.

  `$ npm install`

Then run the development server.

  `$ npm start`

Start editing App.js!
The development server will rebuild and deploy automatically.

Run the back end server.

  `$ npm run server`

Tests are scaffolded using [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) and jsdom. Feel free to install other testing frameworks if desired. Run the tests.

  `$ npm test`

### Extra Questions

* If the endpoint required authentication, how would you consider implementing this?
  * I could make a login page for username/password, which could then fetch a token upon a successful name/PW submit and keep it in localStorage and sessionStorage for navigating to private pages. I'll also consider how the app behaves if users attempt to navigate to private pages without a successful login, such as rerouting them to the login page.
* What if we wanted the UI to update based on changes from the server?
  * We have a couple options. We could write a function to do a fetch request for the user list at set intervals so that new updates from the server are rendered in the UI. We could also set up a web socket so that there is a persistent connection between the server and UI and so the new data from the server updates the UI's state, causing the UI to re-render.