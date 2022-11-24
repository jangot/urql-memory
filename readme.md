# Testing `@urql/core`
It was created to show the [problem](https://github.com/urql-graphql/urql/issues/2355).

Use node 16

`npm i`

start graphql server: `npm run gql-server`

start server with @urql/core:  `npm run request-server`
or to start `npm run request-uniq-server` - there `urql` instance will be created for every request.

start script with calling requests: `npm run start`

# Monitoring memory
Open `http://localhost:3000/status` in your browser.
