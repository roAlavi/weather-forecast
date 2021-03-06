## Weather Forecast

This is a basic implementation using Apollo graphql server and NestJS to request weather forecast within next 16 days.

**Note: unfortunately the 16 days forecast is not available for free subscription so I was only able to write the boilerplate and the response schema for hourly forecast which is available for free subscriptions so if you pass the right env variable for `apikey` you should be able to test the code. Also the business logic to check if the date is in 16 days range is in place and worked and tested as expected**

More info can be find here:
![The subscription info page](https://github.com/roAlavi/weather-forecast/blob/main/subscriptions-issue.png)

### Installation

`npm install` <br>

and then to use `.env.example` file as a ENV file you can run this <br>
`cp .env.example .env`<br>
there should be a free subscription api-key which can be used to bring up the server.
### Running the server

To run the server in different modes you can use these commmands.
<br><br>

**FOR DEV - WATCH MODE**

```sh
npm run start:dev
```
<br>

**FOR DEV MODE WITH DEBUG HEALTH CHECK**
```
npm run start:debug
```
<br>

### Tests

<br>

**TO RUN TESTS**

```
npm run test
```
<br>

### Graphql Playground

When the application is running, you can go to [http://localhost:3000/graphql](http://localhost:3000/graphql) to access the GraphQL Playground.  See [here](https://docs.nestjs.com/graphql/quick-start#playground) for more.

you can paste this as query:
```gql
query weather($input: WeatherForecastInput!) {
  weather(input:$input){
    description
  }
}
```

and this can be used to pass input data:
```JSON
{
  "input": {
    "lat": 55,
    "lon": -0.12,
    "date": "2022-03-11"
  }
}
```

this is how the playground will look like:

![Playground](https://github.com/roAlavi/weather-forecast/blob/main/playground.png)
