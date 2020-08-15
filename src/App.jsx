import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/layouts/Header'
import LoginPage from './components/layouts/LoginPage'
import NotesList from './components/notes/NotesList'
import Preloader from './components/layouts/Preloader'
import SignUpPage from './components/layouts/SignUpPage'

const App = ({ auth }) => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-200">
			<Router>
				<Header />
				{
					auth.isLoaded
						? (
							<Switch>
								<Route exact path="/" component={auth.uid ? NotesList : LoginPage} />
								<Route path="/signup" component={auth.uid ? NotesList : SignUpPage} />
							</Switch>
						)
						: <Preloader />
				}
			</Router>
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.firebase.auth
})

export default connect(mapStateToProps)(App)