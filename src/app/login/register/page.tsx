'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './styles.module.css'

export default function Register() {
    const pathname = usePathname();
    console.log(`usePathName: ${pathname}`);
    return (
        <div>
            <h2 className={styles.RegisterTitle}>Register Page</h2>
            <Link className={styles.RegisterTitle} href={"/"}>Return to Home Page</Link>
        </div>
    );
}
