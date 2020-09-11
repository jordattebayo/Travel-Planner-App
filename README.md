# Travel Planner App

This is Udacity's Front End Web Developer Nanodegree final project. You submit basic information for your trip and the app responds with relevant information to aid in planning your trip.



## Prerequisites

You will need to have node installed on your system and a package manager. Visit https://nodejs.org/en/ for more information.

You will also need to have registered with the following API endpoints:

* [GEONAMES](http://www.geonames.org/export/web-services.html)
* [WEATHERBIT](https://www.weatherbit.io/account/create)
*  [PIXABAY](https://pixabay.com/api/docs/)

Once you have registered create an .env file and add your GEONAMES username, WEATHERBIT, & PIXABAY keys.

```
USERNAME={USERNAME}

WEATHERBIT_KEY={KEY}

PIXABAY_KEY={KEY}
```



## Installation

To install the dependencies open the terminal in the root directory, and run the command:

```
npm install
```



## Run

To run the app on the webpack developer server run the command:

```
npm run build-dev
```
The app should automatically launch in your browser, if not you can type localhost:8080 in the browser.

To run the project on the production server first create your build:

```
npm run build-prod
```

Then run the below command in your terminal:

```
npm run start
```

Lastly navigate to localhost:5000 in your browser.



## Testing

For testing run,

```
npm run test
```



### Technologies Used

- HTML
- SCSS/CSS
- JavaScript
- Webpack
- Babel
- NodeJS

### Author

**Jordan Booker** - [jordattebayo](https://jordanbooker.com)
