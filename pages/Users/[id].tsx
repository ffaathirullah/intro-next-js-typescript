import React from "react";
import { useRouter } from "next/router";

interface UserDetailProps {
  id: number;
  title: string;
  completed: string;
}
interface User {
  user: User;
}
export default function Users(props: UserDetailProps) {
  const router = useRouter();
  const { user } = props;
  return (
    <div>
      <p>{user.title}</p>
      <p>{user.completed}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const dataUser = await res.json();
  const paths = dataUser.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
