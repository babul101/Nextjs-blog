import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Nextjs | About</title>
        <meta name='keywords' content='nextjs' />
      </Head>
      <div>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sint
          culpa possimus adipisci reprehenderit. Totam non, sequi beatae nostrum
          dignissimos laudantium? Vel, id corporis temporibus culpa modi
          voluptate sed nulla.
        </p>
      </div>
    </>
  );
};

export default About;
