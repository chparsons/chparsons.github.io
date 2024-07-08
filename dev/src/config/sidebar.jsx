import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
//import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import Index from '../Index'
import About from '../sidebar/About'
import Clients from '../sidebar/Clients'
import Tools from '../sidebar/Tools'

const sidebar_routes = [
  {
    index: true,
    element: <Index />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/clients',
    element: <Clients />,
  },
  {
    path: '/tools',
    element: <Tools />,
  },
];

const sidebar_thumbs = [
  {
    divider: true,
  },
  {
    title: 'Index',
    link: '/',
    icon: HomeIcon,
  },
  {
    title: 'About',
    link: '/about',
    icon: InfoIcon,
  },
  {
    title: 'Clients',
    link: '/clients',
    icon: LanguageIcon,
  },
  {
    title: 'Tools',
    link: '/tools',
    icon: BuildIcon,
  },
  {
    divider: true,
  },
  {
    title: 'GitHub',
    link: '//github.com/chparsons',
    icon: GitHubIcon,
  },
  {
    title: 'LinkedIn',
    link: '//linkedin.com/in/chparsons',
    icon: LinkedInIcon,
  },
  {
    title: 'Twitter',
    link: '//twitter.com/ch_parsons',
    icon: TwitterIcon,
  },
];

export { sidebar_routes, sidebar_thumbs };

