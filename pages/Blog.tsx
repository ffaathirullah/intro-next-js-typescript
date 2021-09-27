import React from "react";
import Layout from "./../components/Layout";

export default function Blog(props) {
  const { dataBlog } = props;
  // console.log("halo", dataBlog);
  return (
    <div>
      <Layout pageTitle="Blog">
        {dataBlog.map((blog) => {
          console.log("halo2", blog);
          return (
            <div key={blog.id}>
              <p>{blog.title}</p>
            </div>
          );
        })}
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const dataBlog = await res.json();
  console.log("halo", dataBlog);

  return {
    props: {
      dataBlog: dataBlog,
    },
  };
}
