import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return(
        <>
        <h1 className="text-6xl text-center">404 NOT FOUND</h1>
        <div className="text-center mt-6">
        <Link className="text-center border-2 rounded border-blue-500 text-white bg-blue-500 p-1 px-2" to="/">KEMBALI KE LANDING PAGE</Link>
        </div>
        </>
    )
}

export default Notfound