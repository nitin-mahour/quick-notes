import React, { Component } from 'react'
import Note from './Note'
import { connect } from 'react-redux'
import AddNoteModal from './AddNoteModal'
import EditNoteModal from './EditNoteModal'
import DelelteNotePopup from './DelelteNotePopup'
import { delNote, fetchNotes } from '../../firebase/actions/dbActions'
import Preloader from '../layouts/Preloader'
import { logInWithGoogleEnd } from '../../firebase/actions/authActions'

class NotesList extends Component {

    componentDidMount() {
        this.props.finishGoogleSignUP()   // if user sign up using google
        this.props.fetchNotes()
    }

    state = {
        toggle: false,  // for toggling EDIT NOTE MODAL
        popup: false,   // for toggling DELETE NOTE CONFIRMATION POPUP
    }

    toggleHandle = (toggle) => {
        this.setState({
            ...this.state,
            toggle
        })
    }

    popupHandle = (popup) => {
        this.setState({
            ...this.state,
            popup
        })
    }

    render() {
        return (
            <div className="my-24 self-start mx-auto flex flex-col md:flex-wrap md:w-10/12 md:flex-row gap-4">
                {
                    this.props.notes === null
                        ? <Preloader />
                        : this.props.notes.map(note => (
                            <Note note={note.data()} key={note.id} id={note.id} popupHandle={this.popupHandle} toggleHandle={this.toggleHandle} />
                        ))
                }

                <AddNoteModal />
                {
                    this.state.popup && <DelelteNotePopup delNote={this.props.delNote} popup={this.state.popup} popupHandle={this.popupHandle} fetchNotes={this.props.fetchNotes} />
                }
                {
                    this.state.toggle && <EditNoteModal toggle={this.state.toggle} toggleHandle={this.toggleHandle} />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    notes: state.db.notes,
    googleInit: state.auth.googleInit   
 })

const mapDispatchToProps = (dispatch) => ({
    delNote: (id) => dispatch(delNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
    finishGoogleSignUP: () => dispatch(logInWithGoogleEnd())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)