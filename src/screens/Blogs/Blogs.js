import { Box, Grid, Typography } from '@material-ui/core';
import { default as React, useEffect, useState } from 'react';
import BlogCard from './BlogCard';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = () => {
    const mediumURL =
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@saharshgoyal';
    fetch(mediumURL)
      .then((res) => res.json())
      .then((data) => {
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items;
        const posts = res.filter((item) => item.categories.length > 0);

        const itemRows = [];
        posts.forEach((item, i) => {
          item['avatar'] = avatar;
          item['profilelink'] = profileLink;
          itemRows.push(item);
        });
        setBlogs(itemRows);
        console.log(itemRows);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Box mt={5}>
      <Typography variant='h5' gutterBottom>
        Blogs
      </Typography>
      <Grid container spacing={3}>
        {blogs.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
            <BlogCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blogs;
