import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={"contianer"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Get started by editing visiting the {" "}
          <Link href="/app">
            <a className={styles.link}>app page</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
