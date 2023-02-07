import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, MainContainer } from '../components'

const Routing = () => {
    return (
        <>
        <Routes>
            <Route path='/*' element={ <MainContainer />} />
            <Route path='/createItem' element={ <CreateContainer /> } />
        </Routes>
        </>
    )
}

export default Routing