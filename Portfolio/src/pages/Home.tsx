import * as React from 'react';
import Layout from "pages/Layout";
import PortfolioTitle from 'modules/views/PortfolioTitle';
import PortfolioAboutMe from 'modules/views/PortfolioAboutMe';
import PortfolioSkills from 'modules/views/PortfolioSkills';
import ProductHowItWorks from 'modules/views/ProductHowItWorks';
import withRoot from 'modules/withRoot';

function Index() {
  return (
    <Layout>
      <PortfolioTitle />
      <PortfolioAboutMe />
      <PortfolioSkills />
      <ProductHowItWorks />
    </Layout>
  );
}

export default withRoot(Index);
