import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <a href='/dashboard'>dashboard</a>
        </p>
      </div>
    </main>
  )
}
