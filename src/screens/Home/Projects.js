import { makeStyles, Typography } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import React from 'react';
import Slider from 'react-slick';

const useStyles = makeStyles((theme) => ({
  project: {
    display: 'flex !important',
    flexDirection: 'column',
    padding: '25px',
    textDecoration: 'none !important',
  },
  content: {
    padding: '40px 0',
    textDecoration: 'none',
  },
}));

const Projects = () => {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    nextArrow: <ArrowRightIcon color='secondary' />,
    prevArrow: <ArrowLeftIcon color='secondary' />,
  };
  return (
    <div className={classes.content}>
      <h3>Work -</h3>
      <Slider {...settings}>
        {projects.map((project) => (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={project.link}
            key={project.src}
            className={classes.project}
          >
            <Typography
              variant='h4'
              color='secondary'
              style={{ fontStyle: 'italic' }}
            >
              {project.name}
            </Typography>
            <Typography variant='body2' color='textSecondary'>
              {project.description}
            </Typography>
          </a>
        ))}
      </Slider>
    </div>
  );
};

const projects = [
  {
    name: 'IdfcFirst Bank',
    link: 'https://www.idfcfirstbank.com/',
    description: 'Personal banking app and website',
  },
  {
    name: 'RealAdvisor',
    link: 'https://www.younergy.com/',
    description:
      'RealAdvisor is an aggregator of all property listings, online valuation services, real estate agents and lenders in one place',
  },
  {
    name: 'Younergy',
    link: 'https://www.younergy.com/',
    description:
      'We make solar energy financing simple and worry-free for solar professionals and energy customers',
  },

  {
    name: 'InnRoad',
    link: 'https://www.innroad.com/',
    description: 'Get the most out of your property management system',
  },
  {
    name: 'Bidgemmer',
    link: 'https://www.bidgemmer.com/',
    description:
      'Manage and run tenders or auctions for the diamond & gemstone industries',
  },
  {
    name: 'IB.TC',
    link: 'https://ib.tc/',
    description:
      'We provide URL shortening for wallets, allowing verified users to select custom wallet addresses',
  },
  {
    name: 'Tfonia',
    link: 'https://tfonia.com/',
    description:
      'Our Tfonia billing platform combines mobile apps, SMS, voice, streaming and live video chat to provide the most amazing experiences to your customers',
  },
  {
    name: 'Ringblaze',
    link: 'https://www.ringblaze.com/',
    description:
      'Ringblaze is a revolutionary phone system that optimizes your success when it comes to Sales and Support collaboration',
  },
];
export default Projects;
