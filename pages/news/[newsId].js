// our-domain.com/news/something-important

import React from 'react';
import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the server to get the news

  return <h1>The news page</h1>;
};

export default DetailPage;
