import { NextPage } from "next";
import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <Layout title="Welcome to Believers Equipping Network">
      <Navbar />
    </Layout>
  );
};

export default Home;
