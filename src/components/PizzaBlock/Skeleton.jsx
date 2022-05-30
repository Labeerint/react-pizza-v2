import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="132" cy="138" r="130" />
        <rect x="10" y="290" rx="0" ry="0" width="278" height="30" />
        <rect x="8" y="339" rx="0" ry="0" width="285" height="84" />
        <rect x="6" y="439" rx="0" ry="0" width="99" height="30" />
        <rect x="145" y="437" rx="0" ry="0" width="142" height="31" />
    </ContentLoader>
);

export default Skeleton;
