import { Box, Link } from '@material-ui/core';
import { default as React } from 'react';
import { blogsMapping } from '../../constants/blogsMapping';
import BlogHeader from './components/blogHeader';
import Image from './components/image';
import Paragraph from './components/paragraph';
import Quote from './components/quote';
import SubTitle from './components/subTitle';

const NegativeZero = () => {
  const { title, featureImage } = blogsMapping.negativeZero;
  return (
    <Box>
      <BlogHeader title={title} featureImage={featureImage} />

      <Paragraph>
        In mathematics negative zero is something which is equal to normal zero
        but 0 is neither positive nor negative. In javascript -0 holds a more
        practical significance than in theory so it is mostly avoided in basic
        javascript lessons.
      </Paragraph>

      <Paragraph>
        -0 is signed number but similar to other not so popular javascript
        concepts/ features we usually don't give it much importance.
      </Paragraph>

      <Quote>
        We should be responsible for the code we write{' '}
        <span role='img' aria-label='not surprised'>
          (😏I know!)
        </span>
      </Quote>

      <Paragraph>
        It does happen mostly in javascript that we are not sure how our code is
        working but it works with some magic, writing tests for your code is not
        enough. For example -
      </Paragraph>

      <Image src='/images/negativeZero.png' alt='negative zero problems' />

      <Paragraph>
        Then how to determine the sign of 0? but who cares?{' '}
        <span role='img' aria-label='not surprised'>
          😪
        </span>{' '}
        Why I should be interested to know the sign 0? Think of listing stocks
        or tracking a location on the map, for determining direction of
        something we need signs negative/ positive, up/ down. So how to find the
        sign of -0 in javascript?
      </Paragraph>

      <Image
        src='/images/negativeZeroSolution.png'
        alt='determine sign of -0 using Object.is(obj, -0)'
      />

      <Paragraph>
        Object.is function is used to correctly compare between the two given
        values, by not only comparing the type/equality of values but many other
        aspects.
      </Paragraph>

      <Paragraph>
        Share some ideas which involve determining directions (like in gaming)
        on my social media handles and let's develop something in pair
        programming
        <span role='img' aria-label='pair programming'>
          🐵🐵
        </span>
      </Paragraph>

      <SubTitle>Beyond</SubTitle>
      <Paragraph>
        Read complete specification of how Object.is function actually works{' '}
        <Link target='_blank' href='https://tc39.es/ecma262/#sec-object.is'>
          here.
        </Link>
      </Paragraph>
    </Box>
  );
};

export default NegativeZero;
