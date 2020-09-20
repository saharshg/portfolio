import React from 'react';
import Closure from '../screens/Blogs/closure';

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
};
