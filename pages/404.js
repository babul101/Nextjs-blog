import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  //   const router = useRouter();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       router.push("/");
  //     }, 3000);
  //   }, []);

  return (
    <>
      <Head>
        <title>Nextjs | 404</title>
        <link rel='shortcut icon' href='/logo.svg' type='image/x-icon' />
        <meta name='keywords' content='nextjs' />
      </Head>
      <div className='not-found'>
        <h1>Oopsss...</h1>
        <h2>The page can't be found</h2>
        <p>
          Go back to {"\u2192"}{" "}
          <Link href='/'>
            <a>Home</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
