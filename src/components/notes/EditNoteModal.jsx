import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote, fetchNotes } from '../../firebase/actions/dbActions'

// this modal is activate by edit button present on each note card.

class EditNoteModal extends Component {

    state = {
        title: '',
        body: ''
    }

    componentDidMount() {
        const form = document.getElementById('edit_note')

        this.setState({
            title: form['title'].value = this.props.toggle.title,
            body: form['body'].value = this.props.toggle.body
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
            this.props.editNote(this.props.toggle.id, {
                title: this.state.title === '' ? Object(this.state.body).substr(0, 15) + '...' : this.state.title,
                body: this.state.body,
                time: new Date()
            })
           
            this.props.fetchNotes()
            this.props.toggleHandle(false)
        }
        else {
            alert('Note Is Empty!')
        }
    }

    render() {
        return (
            <>
                {/* EDIT NOTE modal */}
                <div className="fixed inset-0">

                    {/* screen cover up background */}
                    <span className="fixed inset-0 bg-gray-800 opacity-50" ></span>

                    <div className="flex justify-center items-center h-screen">
                        <div className="m-8 bg-white rounded-lg shadow-md p-6 z-20">
                            <header className="text-gray-700 text-2xl text-center mb-8">EDIT NOTE</header>

                            <section className="mb-6">
                                <form id="edit_note">
                                    <input type="text" name="title" onChange={this.handleChange} className="appearance-none bg-transparent w-full border-b-2 border-gray-500 focus:border-indigo-600 text-gray-700 text-lg py-2 leading-tight focus:outline-none mb-4 placeholder-gray-400" placeholder="Title (optional)" />
                                    <textarea name="body" cols="" rows="6" onChange={this.handleChange} className="appearance-none bg-transparent w-full border-b-2 border-gray-500 focus:border-indigo-600 text-gray-700 text-lg py-2 leading-tight focus:outline-none placeholder-gray-400" placeholder="Type a note"></textarea>
                                </form>

                            </section>

                            <footer className="float-right">
                                <button className="bg-gray-600 text-white rounded-full px-4 py-2" onClick={this.handleSubmit}>SAVE</button>
                                <button className="bg-red-800 text-white rounded-full px-4 py-2 ml-3" onClick={() => this.props.toggleHandle(false)}>CANCEL</button>
                            </footer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// const mapStateToProps = ({ modal_toggle }) => ({ modal_toggle })

const mapDispatchToProps = (dispatch) => ({
    editNote: (id, note) => dispatch(editNote(id, note)),
    fetchNotes: () => dispatch(fetchNotes()),
})

export default connect(null, mapDispatchToProps)(EditNoteModal)