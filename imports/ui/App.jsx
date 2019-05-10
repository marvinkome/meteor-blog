import React from 'react'

function App({ children }) {
    return (
        <div className="main-container">
            {/* Header */}
            <header>
                <h1>Blog Header</h1>
            </header>

            <div className="page-container">{children}</div>

            {/* Footer */}
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default App
