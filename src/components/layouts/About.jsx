import React from 'react'
import { connect } from 'react-redux'

function About({ handleToggle }) {
    return (
        <>
            {/* screen cover up background */}
            <span className="fixed inset-0 bg-black opacity-25 z-10" ></span>

            <div className="fixed top-0 mt-16 w-full md:max-w-lg z-10">
                <div className="bg-white rounded-lg shadow overflow-hidden m-8">

                    <header className="text-center py-8 bg-gray-600">
                        <div className="text-4xl text-gray-100">QUICK NOTES</div>
                        <div className="text-gray-300 font-mono">Version: 1.9</div>
                    </header>

                    <section className="pt-16 pb-12 text-center">
                        <div className="text-gray-600 tracking-tighter font-mono">Designed & Developed by:</div>
                        <div className="text-gray-700 tracking-wide text-3xl">NITIN MAHOUR</div>
                    </section>

                    <footer className="text-gray-600 text-center pb-10 font-mono">
                        Contact:
                        <a href="mailto:ncoder.nm@gmail.com" className="rounded-full ml-4">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 inline"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </a>
                    </footer>

                    <button className="absolute top-0 right-0 m-8 p-2 text-gray-800 rounded-full" onClick={handleToggle}>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(About)