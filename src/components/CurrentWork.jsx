import React from 'react'

const CurrentWork = () => {
    return (
        <>
            <section id="current-project" className="text-white py-16 px-4 sm:px-6 font-sans">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">🚧 Currently Building</h2>
                    <p className="text-gray-300 text-md mb-6">
                        I'm currently working on a <span className="text-purple-300 text-xl font-bold">Frontend Quiz App</span> to help users prepare for interviews with step-by-step quizzes on HTML, CSS, JS, React, and more.
                    </p>

                    <div className="bg-[#1f0032]/50 p-6 rounded-2xl shadow-lg max-w-md mx-auto">
                        <h3 className="text-xl font-semibold mb-2">Frontend Quiz App (In Progress)</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            This app offers structured quizzes across difficulty levels and includes behavioral and technical questions. Built using React, Tailwind CSS, and local JSON for quiz data.
                        </p>
                        <div className='flex gap-10 items-center justify-center flex-wrap'>

                        <a
                            href="https://github.com/Abhishek-69889/Frontend_Quiz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                            View Code
                        </a>
                        <a
                            href="https://frontendquizzer.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                            Visit Website
                        </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CurrentWork
