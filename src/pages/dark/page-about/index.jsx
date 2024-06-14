import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Header';
import Story from '@/components/InnerPages/About/Story';
import Services from '@/components/Corporate/Services';
import Intro from '@/components/InnerPages/About/Intro';
import Clients from '@/components/InnerPages/About/Clients';
import CallToAction from '@/components/Corporate/CallToAction';
import Footer from '@/components/Corporate/FooterStartup';

function PageAbout() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const headerMetadata = {
    subTitle: "WHO WE ARE ?",
    title: "We're a Email Marketing agency based in Texas.",
    text: "OUR STORY"
  }

  return (
    <>
      <Head>
        <title>MegaMail - About</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} />
        <Intro />
        <Services />
        <Clients />
        <CallToAction innerPageStyle />
      </main>
      <Footer />
    </>
  )
}

PageAbout.getLayout = page => <Layout>{page}</Layout>

export default PageAbout;
