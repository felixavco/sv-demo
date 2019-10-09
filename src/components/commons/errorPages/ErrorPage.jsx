import React from 'react'

function ErrorPage() {
    return (
        <div className="my-5 py-5">
            <h2 className="text-center display-4 text-danger">ERROR</h2>
            <hr/>
            <h4 className="text-center">Something went wrong, please try again later</h4>
        </div>
    )
}

export default ErrorPage;