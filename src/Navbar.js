import React from 'react'
import { ReactComponent as HomeIcon } from './icons/HomeIcon.svg'
import { ReactComponent as HomeIconActive } from './icons/HomeActiveIcon.svg'
import { ReactComponent as ChatIcon } from './icons/ChatIcon.svg'
import { ReactComponent as ChatIconActive } from './icons/ChatActiveIcon.svg'
import { ReactComponent as TeamIcon } from './icons/TeamIcon.svg'
import { ReactComponent as TeamIconActive } from './icons/TeamActiveIcon.svg'
import { ReactComponent as MenuIcon } from './icons/MenuIcon.svg'


export default function Navbar() {
    const width = window.innerWidth
    console.log('width: ', width)
    return (
        <div className={`${(width > 500) ? 'top' : 'bottom'} navbar w-100 d-flex justify-content-around`}>
            <HomeIcon onClick={() => {
                console.log('home clicked')
            }} />
            <ChatIcon />
            <TeamIcon />
            <MenuIcon />
        </div>
    )
}
