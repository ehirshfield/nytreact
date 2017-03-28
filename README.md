

![N|Solid](http://www.newspapers.psu.edu/wp-content/uploads/sites/1856/2013/02/NYTLogo.jpg)

# NY Times React Article Search

NYT React is a fast and responsive react application that uses the New York Times API to generate a list of articles for the user based on the search criteria.

  - Type in a keyword into the search bar
  - Click Search
  - Save any of the articles so you can view them at a later time

### Tech

NYT React uses a number of open source projects to work properly:

* [React](https://facebook.github.io/react/) - Flexible JavaScript library used for user interface
* [Twitter Bootstrap](http://getbootstrap.com/2.3.2/) - Front-end web framework to design and style the app
* [Node.js](https://nodejs.org/) - Server side JavaScript platform
* [Express](https://expressjs.com/) - Node.js web app framework for server-side JavaScript
* [Babel](https://babeljs.io/) - JavaScript compiler
* [Webpack](https://webpack.github.io/) - Module bundler
* [Body Parser](https://www.npmjs.com/package/body-parser) -Parses incoming request bodies
* [Axios](https://www.npmjs.com/package/axios) - HTTP requests from browser
* [Morgan](https://www.npmjs.com/package/morgan) - HTTP request logger
* [MongoDB](https://www.mongodb.com/) - Document oriented database
* [Mongoose](http://mongoosejs.com/) - Object modeling package for MongoDB


### Installation

NYT React requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and dev dependencies and start the server.

```sh
$ cd nytreact
$ npm install -d
$ node server
```
__For an already live version click [here](https://new-york-times-react-search.herokuapp.com)__



### Development

Interested in expanding on NYT React? Fantastic!

Open your favorite Terminal and run these commands after installing the repositiory above

First Tab:
```sh
$ mongod
```
Second Tab:
```sh
$ webpack -w
```
Third Tab:
```sh
$ node server
```

### Todos

 - Expand on the search criteria (Date ranges, categories, and media types such as video)
 - Implement user authentication so each user can save individual articles
 - Enhance the UI to be more screen responsive

License
----

MIT
