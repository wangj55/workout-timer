import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

import { Layout, Space, Divider, Typography } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Workout Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen min-w-max flex-col ">
        <Layout className="w-full items-center">
          <Header className="bg-transparent">
            <Title>Workout Timer</Title>
          </Header>
          <Content>Content</Content>
        </Layout>
      </main>
    </>
  );
};

export default Home;
