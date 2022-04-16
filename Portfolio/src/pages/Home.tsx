import * as React from 'react';
import Layout from "pages/Layout";
import ProductCategories from 'modules/views/ProductCategories';
import ProductSmokingHero from 'modules/views/ProductSmokingHero';
import ProductHero from 'modules/views/ProductHero';
import ProductValues from 'modules/views/ProductValues';
import ProductHowItWorks from 'modules/views/ProductHowItWorks';
import ProductCTA from 'modules/views/ProductCTA';
import withRoot from 'modules/withRoot';

function Index() {
  return (
    <Layout>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </Layout>
  );
}

export default withRoot(Index);
