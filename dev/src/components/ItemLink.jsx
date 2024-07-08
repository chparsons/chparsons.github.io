import React from 'react';
import { Link } from 'react-router-dom';
import external_links from '../config/external_links';

const external_links_ls = Object.values(external_links);

export default ({ link, children, style }) =>
  !link ? <>{children}</> : external_links_ls.includes(link) || link.includes('//')
    ? <a href={link} style={style} target="_blank">{children}</a>
    : <Link to={link} style={style}>{children}</Link>

