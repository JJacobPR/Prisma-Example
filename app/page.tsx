import styles from "./page.module.css";
import prisma from "../lib/prisma";
import Head from "next/head";

export default async function Home() {
  let user = await prisma.user.findFirst();

  if (user === null) {
    user = {
      id: 0,
      name: "No User Found (Seed DB)",
      password: "No User Found (Seed DB)",
      email: "No User Found (Seed DB)",
    };
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Prisma Example</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <a style={{ textDecoration: "underline" }} href="/example">
          Pages Example
        </a>
      </main>
    </>
  );
}
