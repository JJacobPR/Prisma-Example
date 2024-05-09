import prisma from "@/lib/prisma";
import { InferGetServerSidePropsType } from "next";

type ExampleProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Page = ({ user }: ExampleProps) => {
  if (user === null) {
    user = {
      id: 0,
      name: "No User Found (Seed DB)",
      password: "No User Found (Seed DB)",
      email: "No User Found (Seed DB)",
    };
  }

  return (
    <div>
      {" "}
      <h1>Welcome to Prisma Example</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default Page;

export const getServerSideProps = async () => {
  const user = await prisma.user.findFirst();

  return { props: { user } };
};
