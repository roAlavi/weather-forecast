## Weather Forecast

This is a basic implementation using Apollo graphql server and NestJS to request weather forecast within next 16 days.

**Note: unfortunately as I found the 16 days forecast is not available for free subscription I was not able to get the response from the API and therefore the job is incomplete from the test perspective. I was not sure this is done by purpose to find out who really gets to the bottom of this or not but I can tell I was only able to wrtie the boilerplate and the response schema so if you pass the right env variable for `apikey` you should be able to test the code.**
### Installation

`npm install`

### Running the server

<br>
**FOR PRODUCTION** `npm start` 
<br><br>
**FOR DEV - WATCH MODE** `npm run start:dev` 
<br><br>
**FOR DEV MODE WITH DEBUG HEALTH CHECK** `npm run start:debug`
<br><br>

### Graphql Playground

When the application is running, you can go to [http://localhost:3000/graphql](http://localhost:3000/graphql) to access the GraphQL Playground.  See [here](https://docs.nestjs.com/graphql/quick-start#playground) for more.