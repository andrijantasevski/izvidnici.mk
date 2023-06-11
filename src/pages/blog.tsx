import Head from "next/head";
import React from "react";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Блог</title>
      </Head>
      <main className="bg-primary py-56">
        <h1 className="text-center text-4xl text-base-100 lg:text-6xl">Блог</h1>
      </main>
    </>
  );
};

export default Blog;
