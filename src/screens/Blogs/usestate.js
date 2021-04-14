import { Box } from '@material-ui/core';
import { default as React } from 'react';
import { blogsMapping } from '../../constants/blogsMapping';
import BlogHeader from './components/blogHeader';
import Paragraph from './components/paragraph';
import Quote from './components/quote';

const UseState = () => {
  const { title, featureImage } = blogsMapping.usestate;
  return (
    <Box>
      <BlogHeader title={title} featureImage={featureImage} />

      <Paragraph>
        The most friendly hook in React useState
        <span role='img' aria-label='happy'>
          😀
        </span>{' '}
        has more power to it than we practically know. Serving 4 different
        purpose with useState -
      </Paragraph>

      <Paragraph variant='h6'>#1 Initialization:</Paragraph>
      <Paragraph>[ count, setCount ] = useState(0)</Paragraph>

      <Box marginTop={10}>
        <Paragraph variant='h6'>#2 Lazy initialization:</Paragraph>
        <Paragraph>
          {'const heavyComputationFunction = ( ) => { ... }'}
        </Paragraph>
        <Paragraph>
          [ count, setCount ] = useState(heavyComputationFunction)
        </Paragraph>
        <Quote>
          Only used when intial value requires heavy computation for the initial
          render
        </Quote>
      </Box>

      <Box marginTop={10}>
        <Paragraph variant='h6'>#3 Calling setCount:</Paragraph>
        <Paragraph>{'const increment = ( ) => setCount(count + 1)'}</Paragraph>
        <Quote>React takes care of un-intentional re-renders!</Quote>
        <Paragraph variant='body2'>Slide from left to view the code</Paragraph>
        <iframe
          src='https://codesandbox.io/embed/beautiful-hypatia-7ycnv?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark&view=preview'
          style={{
            width: '100%',
            height: '300px',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title='beautiful-hypatia-7ycnv'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </Box>

      <Box marginTop={10}>
        <Paragraph variant='h6'>
          #4 Intentionally increment thrice:
          <span role='img' aria-label='wink'>
            😉
          </span>
        </Paragraph>
        <Quote>
          <Paragraph>Use previous state of count to setCount</Paragraph>
          {' const increment = ( ) => setCount(count => count + 1)'}
        </Quote>
        <Paragraph variant='body2'>Slide from left to view the code</Paragraph>
        <iframe
          src='https://codesandbox.io/embed/beautiful-hypatia-7ycnv?fontsize=14&hidenavigation=1&theme=dark'
          style={{
            width: '100%',
            height: '300px',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title='beautiful-hypatia-7ycnv'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </Box>
    </Box>
  );
};

export default UseState;
