import styles from './layout.module.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={styles.categories}>{children}</div>
}
