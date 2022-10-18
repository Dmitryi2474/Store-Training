import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={413}
    height={280}
    viewBox="0 0 413 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="112" y="125" rx="0" ry="0" width="413" height="280" />
  </ContentLoader>
);

export default Skeleton;
