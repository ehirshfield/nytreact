var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;
var IndexRoute = router.IndexRoute;

var Main = require('../components/Main');
var Saved = require('../app/components/children/Saved');
var Results = require('../app/components/children/Results');
var Search = require('../app/components/children/Search');

module.exports = (
	return <Route path="/" component={Main}>
            <Route path="search" component={Search} />

        		<Route path="results" component={Results} />
        		<Route path="saved" component={Saved} />

            <IndexRoute component={Search} />
        	</Route>;
);
