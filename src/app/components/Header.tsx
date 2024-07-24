import Image from 'next/image'
import React from 'react'
import DrawerTogglerWrapper from './DrawerTogglerWrapper'


const Header: React.FC = () => {

    return (
            <header className="bg-slate-200/30 dark:bg-neutral-900/30 font-arsenal text-3xl tracking-widest p-3 backdrop-blur-sm flex justify-between items-center">

                <div className='flex items-center gap-3'>

                    <Image src={'/logo-dark.png'} width={44} height={44} alt="Logo Premier Chat" className='rounded-full' />

                    <h1><span className="text-indigo-600 dark:text-purple-500">Premier</span>
                        &nbsp;
                        <span className="text-purple-600 dark:text-indigo-500">Chat</span></h1>
                </div>
                <div className='dark:text-slate-200 text-neutral-900 flex items-center'>
                    <DrawerTogglerWrapper />
                </div>
            </header>
    )

}

export default Header