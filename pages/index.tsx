import { NextPage } from "next";
import React from "react";
import AnnouncementSection from "../components/Announcement";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <Layout title="Welcome to Believers Equipping Network">
      <AnnouncementSection />
      <HomeHero />
      <Features />
      <Testimonials />
      <GetStarted />
      <Footer />
    </Layout>
  );
};

export default Home;
