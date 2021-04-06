import React from 'react'
import { Route, Switch } from 'react-router-dom';

import AddCrud from './AddCrud';
import AboutUs from './AboutUs';
import MainPage from './MainPage';
import Cruds from './Cruds'

function Component() {
	return (
		<div>
		<Switch>
			<Route path='/' exact component={MainPage}/>
			<Route path='/diary' component={AddCrud}/>
			<Route path='/aboutus' component={AboutUs}/>
			<Route path='/crud' component={Cruds}/>
		</Switch>
			
		</div>
	)
}

export default Component
