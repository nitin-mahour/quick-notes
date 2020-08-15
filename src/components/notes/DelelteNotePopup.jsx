import React from 'react'
export default function DelelteNotePopup({ delNote, popup, popupHandle, fetchNotes }) {
    return (
        <div className={popup ? 'fixed inset-0' : 'hidden'}>

            {/* screen cover up background */}
            <span className="fixed inset-0 bg-gray-800 opacity-50" onClick={() => popupHandle(false)}></span>

            <div className="flex justify-center items-center h-full">
                <div className="bg-white rounded-lg shadow overflow-hidden m-8 z-20">
                    <header className="text-white bg-red-700 text-2xl text-center px-8 py-4 mb-4">DELETE NOTE ?</header>
                    <footer className="flex justify-center gap-8 p-6">
                        <button className="bg-red-700 text-white rounded-full px-4 py-2" onClick={() => { delNote(popup); popupHandle(false); fetchNotes() }}>CONFIRM</button>
                        <button className="bg-gray-700 text-white rounded-full px-4 py-2" onClick={() => popupHandle(false)}>CANCEL</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}