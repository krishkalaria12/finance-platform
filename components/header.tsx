import React from 'react'
import { HeaderLogo } from './header-logo'
import { Navigation } from './navigation'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import { WelcomeMsg } from './welcome-msg'

export const Header = () => {
    return (
        <header className='bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36'>
            <div className='max-w-screen-2xl mx-auto '>
                <div className='w-full flex items-center justify-between mb-14'>
                    <div className='flex items-center lg:gap-16'>
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <ClerkLoading>
                        <Loader2 className='h-8 w-8 text-slate-400 animate-spin' />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <UserButton afterSignOutUrl='/' />
                    </ClerkLoaded>
                </div>
                <WelcomeMsg />
            </div>
        </header>
    )
}