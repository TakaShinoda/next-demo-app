import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/categories/flower">花</Link>
      <Link href="/categories/animal">動物</Link>
      <Link href="/categories/landscape">風駅</Link>
    </main>
  )
}
