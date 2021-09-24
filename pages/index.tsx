import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./../components/Layout";
import Header from "./../components/Header";

interface UserProps {
  dataUser: Array<any>;
}
const Home: NextPage = (props: UserProps) => {
  const { dataUser } = props;
  console.log(dataUser);
  return (
    <>
      <div>
        <Layout pageTitle="Home">
          <Image src="/qwerty.jpg" width={200} height={200} />
          {dataUser.map((user) => {
            return (
              <>
                <p>{user.title}</p>
              </>
            );
          })}
        </Layout>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const dataUser = await res.json();
  return {
    props: { dataUser },
  };
}
export default Home;
