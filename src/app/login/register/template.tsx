import styles from './styles.module.css'
import "../../globals.css";

export default function Template({ children }: { children: React.ReactNode }) {
    return (<div>
        <p className={styles.TemplateTitle}>Register Template</p>
        <p className="GlobalTitle">Global Title</p>
        <div>{children}</div>
        <p className={styles.TemplateTitle}>End Register Template</p>
    </div>)
}