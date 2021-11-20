// our-domain.com/news/
import Link from 'next/link';
import React, { Fragment } from 'react';

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/news-1">News 1</Link>
        </li>
        <li>News 2</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
