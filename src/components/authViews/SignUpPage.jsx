import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../firebase/actions/authActions'
import { PreloaderSmall } from '../extras/Preloader'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        confirm_password: '',
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (Object(this.state.password).length > 5) {

            if (this.state.password === this.state.confirm_password) {
                this.props.addUser(this.state)
                // console.log(this.state);
            }
            else {
                alert('Both Passwords Do Not Match!')
            }
        }
        else {
            alert('Password Must Be 6 Characters Long!')
        }
    }

    render() {
        return (
            <div className="text-center">

                {/* signup form */}
                <form className="bg-white shadow rounded-lg p-8" onSubmit={this.handleSubmit}>
                    <div className="flex items-center">
                        <span className="w-1/6">
                            <svg className="w-8 mb-3 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </span>
                        <input type="email" name="email" placeholder="E-mail" onChange={this.handleChange} className="w-5/6 appearance-none bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 text-gray-700 text-lg py-2 focus:outline-none mb-4 placeholder-gray-400" required />
                    </div>
                    <div className="flex items-center">
                        <span className="w-1/6">
                            <svg className="w-8 mb-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        </span>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} className="w-5/6 appearance-none bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 text-gray-700 text-lg py-2 focus:outline-none mb-4 placeholder-gray-400" required />
                    </div>
                    <div className="flex items-center">
                        <span className="w-1/6">
                            <svg className="w-8 mb-3 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                        </span>
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="w-5/6 appearance-none bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 text-gray-700 text-lg py-2 focus:outline-none mb-4 placeholder-gray-400" required />
                    </div>
                    <div className="flex items-center">
                        <span className="w-1/6">
                            <svg className="w-8 mb-3 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                        </span>
                        <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={this.handleChange} className="w-5/6 appearance-none bg-transparent border-b-2 border-gray-400 focus:border-indigo-600 text-gray-700 text-lg py-2 focus:outline-none mb-4 placeholder-gray-400" required />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="bg-indigo-700 w-32 py-2 text-white focus:outline-none rounded-full transform hover:scale-110 duration-500 flex justify-center">
                            {
                                this.props.loading
                                    ? (
                                        <PreloaderSmall />
                                    ) : (
                                        <>SIGN UP</>
                                    )
                            }
                        </button>
                    </div>
                </form>

                {/* for displaying signup errors */}
                <div className="text-xl text-red-600 text-center mt-8 max-w-sm">
                    {this.props.authError && this.props.authError}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    authError: state.auth.authError,
    loading: state.auth.loading
})

const mapDispatchToProps = (dispatch) => ({
    addUser: (creds) => dispatch(addUser(creds))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)