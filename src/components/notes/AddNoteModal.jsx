import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote, fetchNotes } from '../../firebase/actions/dbActions'

class AddNoteModal extends Component {

    state = {
        toggle: false,
        title: '',
        body: '',
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (Object(this.state.body).length > 0) {
            this.props.addNote({
                title: this.state.title === '' ? Object(this.state.body).substr(0, 15) + '...' : this.state.title,
                body: this.state.body,
                time: new Date()
            })

            document.getElementById('add_note')['title'].value = ''
            document.getElementById('add_note')['body'].value = ''

            this.setState({
                toggle: false,
                title: '',
                body: '',
            })

            this.props.fetchNotes()
        }
        else {
            alert('Note Is Empty!')
        }
    }

    render() {
        return (
            <>
                {/* floating button for toggling ADD NOTE modal */}
                <div className="fixed bottom-0 right-0">
                    <button className="m-5 lg:m-10 text-white bg-indigo-600 rounded-full p-3 focus:outline-none hover:scale-110 transform transition-transform duration-500" onClick={this.handleToggle}>
                        <svg className="w-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </button>
                </div>

                {/* ADD NOTE modal */}
                <div className={this.state.toggle ? 'fixed inset-0' : 'hidden'}>

                    {/* modal background */}
                    <span className="fixed inset-0 bg-gray-800 opacity-50" ></span>

                    <div className="flex justify-center items-center h-screen">
                        <div className="m-8 bg-white rounded-lg shadow-md p-6 z-20">
                            <header className="text-gray-700 text-2xl text-center mb-8">ADD NOTE</header>

                            <section className="mb-6">
                                <form id="add_note">
                                    <input type="text" name="title" onChange={this.handleChange} className="appearance-none bg-transparent w-full border-b-2 border-gray-500 focus:border-indigo-600 text-gray-700 text-lg py-2 leading-tight focus:outline-none mb-4 placeholder-gray-400" placeholder="Title (optional)" />
                                    <textarea name="body" cols="" rows="6" onChange={this.handleChange} className="appearance-none bg-transparent w-full border-b-2 border-gray-500 focus:border-indigo-600 text-gray-700 text-lg py-2 leading-tight focus:outline-none placeholder-gray-400" placeholder="Type a note"></textarea>
                                </form>

                            </section>

                            <footer className="float-right">
                                <button className="bg-gray-600 text-white rounded-full px-4 py-2" onClick={this.handleSubmit}>SAVE</button>
                                <button className="bg-red-800 text-white rounded-full px-4 py-2 ml-3" onClick={this.handleToggle}>CANCEL</button>
                            </footer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addNote: (note) => dispatch(addNote(note)),
    fetchNotes: () => dispatch(fetchNotes())
})

export default connect(null, mapDispatchToProps)(AddNoteModal)