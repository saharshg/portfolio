import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import { blogsMapping } from '../../constants/blogsMapping';

const BlogList = () => {
  let history = useHistory();

  return (
    <>
      <Typography variant='h5' gutterBottom color='secondary'>
        Blogs
      </Typography>
      <List>
        {Object.keys(blogsMapping).map((blog) => (
          <ListItem button disableGutters key={blog}>
            <ListItemText
              onClick={() => {
                if (blogsMapping[blog].githubUrl) {
                  window.open(blogsMapping[blog].githubUrl);
                } else {
                  history.push(`/${blog}`);
                }
              }}
              primaryTypographyProps={{ gutterBottom: true }}
              primary={blogsMapping[blog].title}
              secondary={blogsMapping[blog].slug}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BlogList;
