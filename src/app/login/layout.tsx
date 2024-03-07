import styles from './styles.module.css'

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    return (
        <section>
            <p className={styles.Title}>Login shared section</p>
            <nav></nav>
            {children}
            <p className={styles.Title}>End Login shared section</p>
        </section>
    )
}