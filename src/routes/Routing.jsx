import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, MainContainer } from '../components'
import { About } from '../pages/index'
const Routing = () => {
    return (
        <>
        <Routes>
            <Route path='/*' element={ <MainContainer />} />
            <Route path='/createItem' element={ <CreateContainer /> } />
            <Route path='/about' element={ <About /> } />
        </Routes>
        </>
    )
}

export default Routing