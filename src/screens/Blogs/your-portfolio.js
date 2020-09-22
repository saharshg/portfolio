import { Box, Link } from '@material-ui/core';
import { default as React } from 'react';
import { blogsMapping } from '../../constants/blogsMapping';
import BlogHeader from './components/blogHeader';
import Image from './components/image';
import Paragraph from './components/paragraph';
import Quote from './components/quote';
import SubTitle from './components/subTitle';

const Closure = () => {
  const preventDefault = (e) => e.preventDefault();
  const { title, featureImage } = blogsMapping.yourPortfolio;
  return (
    <Box>
      <BlogHeader title={title} featureImage={featureImage} />

      <Paragraph>
        If you are creating your portfolio, blogging or any other website which
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
