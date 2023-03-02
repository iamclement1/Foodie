import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, MainContainer } from '../components'
import { About, SignIn, SignUp, ForgetPassword  } from '../pages/'

const Routing = () => {
    return (
        <>
        <Routes>
            <Route path='/*' element={ <MainContainer />} />
            <Route path='/createItem' element={ <CreateContainer /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/login' element={ <SignIn /> } />
            <Route path='/register' element={ <SignUp /> } />
            <Route path='/forget-password' element={ <ForgetPassword /> } />
        </Routes>
        </>
    )
}

export default Routing