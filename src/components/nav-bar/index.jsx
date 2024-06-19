import styles from './nav-bar.module.scss'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar({isMenuOpen}) {

    const router = useRouter()

    // const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(

        <nav className={`${styles.navbarContainer} ${isMenuOpen ? styles.open : ''}`}>

            <ul className={styles.navbarList}>

                <li onClick={() => router.push('/')} className={styles.listItem}>

                    Characters

                </li>

                <li onClick={() => router.push('/locations')} className={styles.listItem}>

                    Locations

                </li>

                <li onClick={() => router.push('/episodes')} className={styles.listItem}>

                    Episodes

                </li>

            </ul>   

        </nav>

    )

}