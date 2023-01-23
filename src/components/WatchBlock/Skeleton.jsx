import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={370}
      viewBox="0 0 280 370"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="6" ry="6" width="280" height="300" />
      <rect x="1" y="322" rx="6" ry="6" width="80" height="40" />
      <rect x="155" y="322" rx="6" ry="6" width="125" height="40" />
    </ContentLoader>
  </div>
);

export default Skeleton;
