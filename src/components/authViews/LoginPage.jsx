import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn, logInWithGoogleStart } from '../../firebase/actions/authActions'
import { PreloaderSmall } from '../extras/Preloader'
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

                <div className="bg-white shadow rounded-lg p-8">

                    {/* log in form */}
                    <form onSubmit={this.handleSubmit}>
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
                        <div className="flex justify-center mt-2">
                            <button type="submit" className="bg-indigo-700 w-32 py-2 text-white focus:outline-none rounded-full transform hover:scale-110 duration-500 flex justify-center">
                                {
                                    this.props.loading
                                        ? (
                                            <PreloaderSmall />
                                        ) : (
                                            <>LOG IN</>
                                        )
                                }
                            </button>
                        </div>
                    </form>

                    {/* log in with google*/}
                    <span className="block text-gray-600 mt-6">OR</span>
                    <div className="flex justify-center mt-4">
                        <button onClick={this.props.withGoogle} className="py-2 px-5 text-gray-600 border-gray-500 border-2 focus:outline-none rounded-full transform hover:scale-110 duration-500 flex justify-center">
                            {
                                this.props.loading_google
                                    ? (
                                        <PreloaderSmall />
                                    ) : (
                                        <>
                                            LogIn with
                                            <svg className="w-6 ml-2" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" /><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" /><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" /><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" /></svg>
                                        </>
                                    )
                            }
                        </button>
                    </div>

                </div>



                {/* login errors */}
                <div className="text-lg text-red-600 text-center mt-8 max-w-sm">
                    {this.props.authError && this.props.authError}
                </div>

                {/* sign up button */}
                <span className="block text-gray-600 text-sm mt-12 mb-2">Not Registered? Click Below</span>
                <Link to="/signup">
                    <button className="border-indigo-700 border-2 rounded-full text-indigo-700 py-2 px-5 text-sm transform hover:scale-110 duration-500">
                        SIGN UP
                    </button>
                </Link>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    loading: state.auth.loading,
    loading_google: state.auth.loading_google
})

const mapDispatchToProps = (dispatch) => ({
    login: (creds) => dispatch(logIn(creds)),
    withGoogle: () => dispatch(logInWithGoogleStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)