import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ fileName }) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`./${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <Box mt={20}>
      <ReactMarkdown>{post}</ReactMarkdown>
    </Box>
  );
};

export default Markdown;
