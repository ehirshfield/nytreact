import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../app/components/Main.js';
import Saved from '../app/components/children/Saved.js';
import Search from '../app/components/children/Search.js';
import Results from '../app/components/children/Results.js';

export default () => {
	return <Route path="/" component={Main}>
            <Route path="search" component={Search} />

        		<Route path="results" component={Results} />
        		<Route path="saved" component={Saved} />

            <IndexRoute component={Search} /> 
        	</Route>;
};
