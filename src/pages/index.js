import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const indexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Layout pageTitle="Home Page">
        <p>I''m making this. by following the Gatsby tutorial!</p>
      </Layout>
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default indexPage;
