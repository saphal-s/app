import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Details from './Details';


const Routss = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routss
