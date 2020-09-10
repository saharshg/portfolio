import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { default as React } from 'react';
import BlogHeader from './components/blogHeader';
import Image from './components/image';
import Paragraph from './components/paragraph';
import Quote from './components/quote';
import SubTitle from './components/subTitle';

const Closure = () => {
  const problems = [
    'newFunction is equal to outerFunction call.',
    `When innerFunction() is executed it searches for the “name” variable
    and finds it in outerFunction scope.`,
  ];
  const truth = [
    'newFunction is equal to innerFunction definition.',
    'innerFunction bundles the environment with its definition (lexical/static scoping) and takes this bundle wherever it is executed.',
  ];

  const generateList = (list) => {
    return list.map((item, index) => (
      <ListItem key={item}>
        <ListItemText primary={`${index + 1}. ${item}`} />
      </ListItem>
    ));
  };

  const preventDefault = (e) => e.preventDefault();
  return (
    <Box>
      <BlogHeader
        title='Closures'
        featureImage={{
          src:
            'https://images.unsplash.com/photo-1450562624248-869a3ec195f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          credit: 'Cody Black',
          url:
            'https://unsplash.com/@cblack09?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
        }}
      />

      <Paragraph>
        Definition: A <strong>closure</strong> is a combination of a function
        bundled together (enclosed) with references to its surrounding state
        (the lexical environment). In other words, a closure gives you access to
        an outer function’s scope from an inner function.
      </Paragraph>

      <Quote>
        Closure ={'>'} function + environment (place where the function is
        defined called as scope {'{ }'})
      </Quote>

      <Image src='/images/closure.svg' alt='closure implementation' />

      <Paragraph>
        Line 2-6 comprises of the lexical environment in which innerFunction is
        defined.
      </Paragraph>

      <Typography>What it appears -</Typography>
      <List aria-label='What it appears'>{generateList(problems)}</List>

      <Typography>Truth -</Typography>
      <List aria-label='Truth'>{generateList(truth)}</List>

      <Paragraph>
        Closure helps to implement the object-oriented flavor of classes with
        accessibility, by creating private and public properties of a function,
        the variables defined inside the lexical environment of innerFunction
        are private and can’t be accessed from outside its scope and whatever
        the outerFunction returns is accessible by the global scope i.e
        innerFunction is exposed as public method.
      </Paragraph>

      <Paragraph>
        Creating closure is also feasible for situations where you want to share
        the lexical scope of a function with multiple bindings and it is not
        recommended to use nested closures since sharing the lexical environment
        for any event based binding among multiple elements may lead to
        unexpected behavior.
      </Paragraph>
      <Paragraph>
        So, closure is just a bundle of the environment, scope, variables,
        definition packed together as a <strong>BACKPACK</strong> taken by the
        inner function.
      </Paragraph>

      <SubTitle>Beyond</SubTitle>
      <Paragraph>
        This is just a brief about closures in javascript, for further reading
        or examples refer{' '}
        <Link
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures'
          onClick={preventDefault}
        >
          this.
        </Link>{' '}
        See power of closures, refer{' '}
        <Link href='http://csbin.io/closures' onClick={preventDefault}>
          these examples.
        </Link>
      </Paragraph>
    </Box>
  );
};

export default Closure;
