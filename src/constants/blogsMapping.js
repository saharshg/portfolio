import React from 'react';
import Closure from '../screens/Blogs/closure';
import NegativeZero from '../screens/Blogs/negativeZero';

export const blogsMapping = {
  closures: {
    title: 'Closures in JavaScript',
    createdAt: 'July 12, 2020',
    modifiedAt: 'September 16, 2020',
    slug:
      'Briefly understanding closure and the lexical environment in javascript.',
    hashtags: ['closures', 'scoping', 'javascript'],
    component: <Closure />,
    url: 'https://saharshgoyal.com/#/blogs/closures',
    featureImage: {
      src:
        'https://images.unsplash.com/photo-1450562624248-869a3ec195f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      url:
        'https://unsplash.com/@cblack09?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
      credit: 'Cody Black',
    },
  },
  negativeZero: {
    title: 'Negative Zero in JavaScript',
    createdAt: 'September 23, 2020',
    modifiedAt: 'September 23, 2020',
    slug: 'Significance of negative zero',
    hashtags: ['negativezero', 'javascript', 'object.is'],
    component: <NegativeZero />,
    url: 'https://saharshgoyal.com/#/blogs/negativezero',
    featureImage: {
      src:
        'https://images.unsplash.com/photo-1528797471109-9a6649153bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1141&q=80',
      url: 'https://unsplash.com/@designwilde',
      credit: 'Melanie Dretvic',
    },
  },
  // yourPortfolio: {
  //   title: 'Portfolio/Blogging website in React',
  //   createdAt: 'September 21, 2020',
  //   modifiedAt: 'September 21, 2020',
  //   slug: 'Give it a read before developing your portfolio or blogging website',
  //   hashtags: ['portfolio', 'blogging', 'reactjs', 'SSR'],
  //   component: <Closure />,
  //   url: 'https://saharshgoyal.com/#/blogs/yourPortfolio',
  //   featureImage: {
  //     src:
  //       'https://images.unsplash.com/photo-1547111962-50a04ac74d73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  //     url: 'https://unsplash.com/@revolt',
  //     credit: 'Revolt',
  //   },
  // },
};
