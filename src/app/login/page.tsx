'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './styles.module.css'

export default function Login() {
    const pathname = usePathname();
    console.log(`usePathName: ${pathname}`);
    return (
        <div>
            <h2>Login Page</h2>
            <Link className={styles.Link} href={"/"}>Return to Home page</Link>
            <br/>
            <Link className={styles.Link} href={"/login/register"}>Go to Register page</Link>\
        </div>
    );
}