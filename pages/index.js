import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='logo.svg' type='image/x-icon' />
        <title>Nextjs | Home</title>
        <meta name='keywords' content='nextjs' />
      </Head>
      <div>
        <h2 className={styles.title}>Home page</h2>

        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
          placeat!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
          facilis.
        </p>
        <Link href='/next'>
          <a className={styles.btn}>Explore </a>
        </Link>
      </div>
    </>
  );
}
