import React from 'react'
import moment from 'moment'

export default function Note({ note, id, toggleHandle, popupHandle }) {
    return (
        <div className="w-screen px-4 sm:max-w-lg sm:p-0 md:w-auto md:max-w-sm">
            <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg" >
                <header className="text-gray-700 text-2xl font-medium mb-2">
                    {note.title}
                </header>

                <section className="text-gray-600 whitespace-pre-wrap break-words text-justify pb-4">
                    {note.body}
                </section>

                <footer className="mt-2 pt-2 -mb-2 border-t-2 border-gray-300">
                    <button className="w-8 mr-2 text-gray-700 focus:outline-none transform hover:scale-125 duration-300" onClick={() => toggleHandle({ id, title: note.title, body: note.body })}>
                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                    </button>
                    <button className="w-8 text-red-700 focus:outline-none transform hover:scale-125 duration-300" onClick={() => popupHandle(id)}>
                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                    <span className="text-sm text-gray-500 ml-4 mr-2 mt-2 float-right">
                        {moment(note.time.toDate()).calendar()}
                    </span>
                </footer>
            </div >
        </div>
    )
}
