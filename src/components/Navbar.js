import React from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Signin from './Signin'
import LogOut from './LogOut'

const style = {
    // nav: `w-[728px] bg-gray-800 h-20 flex justify-between  z-10 fixed drop-shadow-lg`,
    nav: `max-w-[728px] w-full fixed bg-gray-800 h-20 flex justify-between z-10 items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>CTA</h1>
        {user? <LogOut /> : <Signin />}

    </div>
  )
}

export default Navbar