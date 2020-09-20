import { default as React } from 'react';
import { Helmet } from 'react-helmet';
import Intro from './Intro';
import Projects from './Projects';

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Saharsh Goyal</title>
        <meta name='title' content='Saharsh Goyal' />
        <meta
          name='description'
          content='I help people to grow their businesses with quality software.'
        />
        <meta
          name='keywords'
          content='saharsh goyal, portfolio, developer, software engineer, react, react-native, javascript'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://saharshgoyal.com/' />
        <meta property='og:title' content='Saharsh Goyal' />
        <meta
          property='og:description'
          content='I help people to grow their businesses with quality software.'
        />
        <meta
          property='og:image'
          content='https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://saharshgoyal.com/' />
        <meta property='twitter:title' content='Saharsh Goyal' />
        <meta
          property='twitter:description'
          content='I help people to grow their businesses with quality software.'
        />
        <meta
          property='twitter:image'
          content='https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
        />
      </Helmet>
      <Intro />
      <Projects />
    </>
  );
};

export default Home;
