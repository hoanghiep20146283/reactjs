import styles from './styles.module.css'
 
export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    return (
        <section>
            <p className={styles.Title}>Register shared section</p>
            <nav></nav>
            {children}
            <p className={styles.Title}>End Register shared section</p>
        </section>
    )
}