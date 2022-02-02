import About from '@/components/About';
import CovidSafe from '@/components/CovidSafe';
import Layout from '@/components/Layout';
import React from 'react';

export default function Home() {
  return (
    <Layout>
      <About />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <CovidSafe />
    </Layout>
  );
}
