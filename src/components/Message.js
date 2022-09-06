import React from 'react'
import { auth } from '../firebase'


const style = {
    message : `max-w-[400px] break-all whitespace-normal flex items-center shadow-xl m-4 p-2 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full rounded-tr-full bottom-0`,
    received: `bg-[#e5e5ea] whitespace-normal text-black float-left rounded-br-full bottom-0`
}

const Message = ({message}) => {
    const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`
  return (
    <div className='break-all'>
        <div className={`${style.message} ${messageClass}`}>
            <p className={style.name}>{message.name}</p>
            <p>{message.text}</p>
        </div>
    </div>
  )
}

export default Message