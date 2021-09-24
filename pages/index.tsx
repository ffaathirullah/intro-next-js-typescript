import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./../components/Layout";
import Header from "./../components/Header";
const Home: NextPage = () => {
  return (
    <>
      <div>
        <Layout pageTitle="Home">
          <Image src="/qwerty.jpg" width={200} height={200} />
          <p>index</p>
        </Layout>
      </div>
    </>
  );
};

export default Home;
