import React from 'react';
import dynamic from 'next/dynamic';

const RatingsAndReviews = dynamic(() => import('ratingsAndReviews/index'), {
  ssr: false,
  loading: () => <></>,
});

const App = () => {
  return (
    <>
      <RatingsAndReviews />
    </>
  );
};

export default App;
