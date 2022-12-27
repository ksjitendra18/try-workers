import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const router = useRouter();
  console.log(props);
  // ${window.location.hostname}

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>hello {props.resData.name}</p>
    </>
  );
}

export async function getServerSideProps() {
  const hostname = process.env.NEXT_PUBLIC_SITE_URL;
  // const res = await fetch(`http://localhost:3000/api/hello`);
  const res = await fetch(`${hostname}/api/hello`);
  const resData = await res.json();
  console.log(resData);

  return {
    props: {
      resData,
    },
  };
}
