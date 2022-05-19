import React from 'react';
import Closure from '../screens/Blogs/closure';
import NegativeZero from '../screens/Blogs/negativeZero';
import Markdown from '../screens/Blogs/Markdown';

export const blogsMapping = {
  accessibilityfornoninteractiveelements: {
    title: 'Accessibility for non-interactive HTML elements in React',
    createdAt: 'May 18, 2022',
    modifiedAt: 'May 18, 2022',
    slug: 'Making non-interactive HTML elements accessible',
    hashtags: ['accessibility', 'html', 'non-interactive elements'],
    component: <Markdown fileName='NonInteractiveElementsAccessibility.md' />,
    url: 'https://saharshgoyal.com/#/accessibilityfornoninteractiveelements',
  },
  negativezero: {
    title: 'Negative Zero in JavaScript',
    createdAt: 'September 23, 2020',
    modifiedAt: 'September 23, 2020',
    slug: 'Understanding negative zero and comparing objects in js.',
    hashtags: ['negativezero', 'javascript', 'object.is'],
    component: <NegativeZero />,
    url: 'https://saharshgoyal.com/#/negativezero',
    featureImage: {
      src: 'https://images.unsplash.com/photo-1528797471109-9a6649153bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1141&q=80',
      url: 'https://unsplash.com/@designwilde',
      credit: 'Melanie Dretvic',
    },
  },
  closures: {
    title: 'Closures in JavaScript',
    createdAt: 'July 12, 2020',
    modifiedAt: 'September 16, 2020',
    slug: 'Briefly understanding closure and the lexical environment in javascript.',
    hashtags: ['closures', 'scoping', 'javascript'],
    component: <Closure />,
    url: 'https://saharshgoyal.com/#/closures',
    featureImage: {
      src: 'https://images.unsplash.com/photo-1450562624248-869a3ec195f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      url: 'https://unsplash.com/@cblack09?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
      credit: 'Cody Black',
    },
  },
  // usestate: {
  //   title: 'Managing local state with React.useState()',
  //   createdAt: 'April 14, 2021',
  //   modifiedAt: 'April 14, 2021',
  //   slug: "Taking care of your component's local state",
  //   hashtags: ['usestate', 'react', 'context'],
  //   component: <UseState />,
  //   url: 'https://saharshgoyal.com/#/usestate',
  //   featureImage: {
  //     src:
  //       'https://images.unsplash.com/photo-1567892737950-30c4db37cd89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9jYWwlMjBpbmRpYW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  //     url: 'https://unsplash.com/@sujeethpotla',
  //     credit: 'Sujeeth Potla',
  //   },
  // },
  // yourPortfolio: {
  //   title: 'Portfolio/Blogging website in React',
  //   createdAt: 'September 21, 2020',
  //   modifiedAt: 'September 21, 2020',
  //   slug: 'Give it a read before developing your portfolio or blogging website',
  //   hashtags: ['portfolio', 'blogging', 'reactjs', 'SSR'],
  //   component: <Closure />,
  //   url: 'https://saharshgoyal.com/#/yourPortfolio',
  //   featureImage: {
  //     src:
  //       'https://images.unsplash.com/photo-1547111962-50a04ac74d73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  //     url: 'https://unsplash.com/@revolt',
  //     credit: 'Revolt',
  //   },
  // },
};
