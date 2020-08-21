import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { fetchDetails } from '../../firebase/actions/dbActions'

class AccountInfo extends Component {

    componentDidMount() {
        if (!this.props.user) {
            this.props.fetchDetails()
        }
    }

    render() {

        const user = this.props.user ? this.props.user : { id: '' }
        const { name, date } = this.props.user ? this.props.user.data() : { name: '', date: { toDate: () => new Date() } }

        return (
            <>
                {/* screen cover up background */}
                <span className="fixed inset-0 bg-black opacity-25 z-10" ></span>

                {
                    <div className="fixed top-0 mt-16 w-full md:w-auto z-10">
                        <div className="bg-white rounded-lg shadow overflow-hidden m-8">

                            <header className="text-center py-8 px-6 bg-gray-600">
                                <div className="text-3xl text-white uppercase">
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-16 mr-4 mb-1 inline-block"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
                                    {name}
                                </div>
                            </header>

                            <section className="p-8 text-center font-mono">
                                <div className="text-sm text-gray-500">Registered E-mail:</div>
                                <div className="text-gray-600 text-lg">{user.id}</div>
                                <div className="mt-6 text-sm text-gray-500">Joined On:</div>
                                <div className="text-gray-600">{moment(date.toDate()).calendar()}</div>
                            </section>

                            <button className="absolute top-0 right-0 m-8 p-2 text-gray-700 rounded-full" onClick={this.props.handleToggle}>
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                }
            </>
        )
    }

}

const mapStateToProps = (state) => ({
    user: state.db.user
})

const mapDispatchToProps = (dispatch) => ({
    fetchDetails: () => dispatch(fetchDetails())
})
export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
