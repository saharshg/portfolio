import { useParams } from 'react-router-dom';
import { blogsMapping } from '../../constants/blogsMapping';

const Blogs = () => {
  const { blog } = useParams();
  return blogsMapping[blog].component;
};

export default Blogs;
