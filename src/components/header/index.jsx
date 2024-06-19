'use client'

import styles from './header.module.scss'
import Image from 'next/image'
import Navbar from '../nav-bar'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header() {

    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(

        <div className={styles.headerContainer}>

            <Image 
                src='/icons/logo.svg'
                width={46}
                height={49}
                alt='logo'
                onClick={() => router.push('/')}
                className={styles.logo}
            />

            <Navbar isMenuOpen={isMenuOpen} />

            <div className={styles.burgerIcon} onClick={toggleMenu}>
                <Image
                    src={isMenuOpen ? '/icons/cross.svg' : '/icons/burger-menu.svg'}
                    width={30}
                    height={30}
                    alt='menu icon'
                />
            </div>

        </div>

    )

}