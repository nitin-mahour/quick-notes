import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../firebase/actions/authActions'
import { Link } from 'react-router-dom'
import About from '../extras/About'
import AccountInfo from '../extras/AccountInfo'

class Header extends Component {

    state = {
        burger_toggle: false,
        about_toggle: false,
        account_toggle: false
    }

    accountInfo = () => {
        this.setState({
            account_toggle: !this.state.account_toggle
        })
    }

    render() {
        return (
            <>
                <nav className="fixed top-0 w-full bg-indigo-600 shadow z-20">

                    <div className="text-white md:hidden py-2">
                        <Link to="/" className="text-3xl ml-4">QUICK NOTES</Link>

                        {/* burger menu button for mobile layout */}
                        <button className="button float-right py-2 focus:outline-none" onClick={() => this.setState({ burger_toggle: !this.state.burger_toggle })}>
                            <svg className={this.state.burger_toggle ? 'hidden h-8 w-8 mx-4' : 'block h-8 w-8 mx-4'} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className={this.state.burger_toggle ? 'block h-8 w-8 mx-4' : 'hidden h-8 w-8 mx-4'} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* for desktop layout */}
                    <div className="text-white text-xl hidden md:w-10/12 md:block mx-auto py-2">
                        <a href="/" className="text-3xl">QUICK NOTES</a>
                        <div className="float-right mt-2">
                            <button onClick={() => this.setState({ about_toggle: !this.state.about_toggle })} className="ml-6 focus:outline-none hover:scale-110 transform transition-transform duration-500">
                                <svg className="w-8 inline-block mb-1 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                About
                            </button>
                            {

                                this.props.auth && <>
                                    <button onClick={this.accountInfo} className="ml-6 focus:outline-none hover:scale-110 transform transition-transform duration-500">
                                        <svg className="w-8 inline-block mb-1 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Account
                                    </button>
                                    <button onClick={this.props.logout} className="ml-6 focus:outline-none hover:scale-110 transform transition-transform duration-500">
                                        <svg className="w-8 inline-block mb-1 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                                        Logout
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                </nav>

                {/* for mobile popup menu */}
                {
                    this.state.burger_toggle && <div className="fixed top-0 inset-0 z-10 bg-transparent" onClick={() => this.setState({ burger_toggle: !this.state.burger_toggle })}>
                        <div className="bg-indigo-600 rounded-lg overflow-hidden py-6 shadow mt-20 mx-5">
                            <ul className="text-center text-white my-4">
                                <li className="my-4">
                                    <button onClick={() => this.setState({ about_toggle: !this.state.about_toggle })} className="text-xl">
                                        <svg className="w-8 inline-block mb-1 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            About
                                    </button>
                                </li>
                                {
                                    this.props.auth && <>
                                        <li className="my-4">
                                            <button onClick={() => this.setState({ account_toggle: !this.state.account_toggle })} className="text-xl">
                                                <svg className="w-8 inline-block mb-1 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Account
                                        </button>
                                        </li>
                                        <li className="my-4">
                                            <button onClick={this.props.logout} className="text-xl">
                                                <svg className="w-8 inline-block mb-1 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                                            Logout
                                        </button>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                }

                {/* For displaying About Modal */}
                {
                    this.state.about_toggle && <About handleToggle={() => this.setState({ about_toggle: !this.state.about_toggle })} />
                }

                {/* For displaying AccountInfo Modal */}
                {
                    this.state.account_toggle && <AccountInfo handleToggle={() => this.setState({ account_toggle: !this.state.account_toggle })} />
                }

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth.uid,
    user: state.db.user
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logOut())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)