import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((nextjs) => {
    return {
      params: { id: nextjs.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { nextjs: data },
  };
};

const Details = ({ nextjs }) => {
  return (
    <>
      <Head>
        <title>Nextjs | Details</title>
        <link rel='shortcut icon' href='/logo.svg' type='image/x-icon' />
        <meta name='keywords' content='nextjs' />
      </Head>
      <div>
        <h3>Name:{nextjs.name}</h3>
        <h3>Email:{nextjs.email}</h3>
        <h3>City:{nextjs.address.city}</h3>
        <h3>Company:{nextjs.company.name}</h3>
      </div>
    </>
  );
};

export default Details;
