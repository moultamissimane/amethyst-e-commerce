import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Meta = ({
  title = 'Welcome To Amethyst',
  description = 'Our platform provides excellent customer service and fast shipping, making it a reliable choice for customers looking for a hassle-free shopping experience',
  keywords,
}: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

export default Meta;
