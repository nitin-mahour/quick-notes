import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../firebase/actions/authActions'
import { PreloaderSmall } from './Preloader'
import { Link } from 'react-router-dom'

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render() {
        return (
                <div className="text-center m-8">

                    {/* log in form */}
                    <form className="bg-white shadow rounded-lg p-8" onSubmit={this.handleSubmit}>
                        <div className="flex items-center">
                            <span className="w-1/6">
                                <svg className="w-8 mb-3 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </span>
                            <input type="email" name="email" placeholder="E-mail" onChange={this.handleChange} className="w-5/6 appearance-none bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 text-gray-700 text-lg py-2 focus:outline-none mb-4 placeholder-gray-400" required />
                        </div>
                        <div className="flex items-center">
                            <span className="w-1/6">
                                <svg className="w-8 mb-3 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                            </span>
                            <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="w-5/6 appearance-none bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 text-gray-700 text-lg py-2 focus:outline-none mb-4 placeholder-gray-400" required />
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="bg-indigo-700 w-32 py-2 text-white focus:outline-none rounded-full transform hover:scale-110 duration-500 flex justify-center">
                                {
                                    this.props.loading
                                        ? (
                                            <PreloaderSmall />
                                        ) : (
                                            <>
                                                LOG IN
                                                <svg className="inline ml-2 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>
                                            </>
                                        )
                                }
                            </button>
                        </div>
                    </form>

                    {/* for displaying login errors */}
                    <div className="text-lg text-red-600 text-center mt-8 max-w-sm">
                        {this.props.authError && this.props.authError}
                    </div>

                    {/* sign up button */}
                    <span className="block text-gray-600 text-sm mt-12 mb-4">Not Registered? Click Below</span>
                    <Link to="/signup" className="border-indigo-700 border-2 rounded-full text-indigo-700 py-2 px-5 text-sm transform hover:scale-110 transition-transform ease-out duration-500">
                        SIGN UP
                        <svg className="inline ml-2 mb-1 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                    </Link>


                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    loading: state.auth.loading
})

const mapDispatchToProps = (dispatch) => ({
    login: (creds) => dispatch(logIn(creds))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)