import { NextPage } from "next";
import React from "react";
import AnnouncementSection from "../components/Announcement";
import BackToTop from "../components/BackToTop";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import HomeHero from "../components/HomeHero";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import UpcomingEvents from "../components/UpcomingEvents";

const Home: NextPage = () => {
  return (
    <Layout title="Welcome to Believers Equipping Network">
      <AnnouncementSection />
      <HomeHero />
      <Features />
      <UpcomingEvents />
      <Testimonials />
      <GetStarted />
      <Footer />
      <BackToTop />
    </Layout>
  );
};

export default Home;
