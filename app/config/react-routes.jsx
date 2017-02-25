var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var Main = require('../components/Main');
var Saved = require('../components/children/Saved');
var Results = require('../components/children/Results');
var Search = require('../components/children/Search');

module.exports = (
	<Router history={hashHistory}>
		 <Route path="/" component={Main}>
	      <Route path="search" component={Search} />
	  		<Route path="saved" component={Saved} />

	      <IndexRoute component={Search} />
	  </Route>
</Router>
);
