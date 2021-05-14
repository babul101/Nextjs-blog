import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Next.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      nextjs: data,
    },
  };
};

const Nextfolder = ({ nextjs }) => {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='logo.svg' type='image/x-icon' />
        <title>Nextjs | All Blogs</title>
        <meta name='keywords' content='nextjs' />
      </Head>
      <div>
        <h1>All Nextjs Bloggers</h1>
        {nextjs.map((next) => (
          <Link href={`/next/${next.id}`} key={next.id}>
            <a className={styles.single}>
              <h3>{next.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Nextfolder;
