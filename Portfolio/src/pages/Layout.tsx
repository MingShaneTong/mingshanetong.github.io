import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import AppFooter from 'modules/views/AppFooter';
import AppAppBar, { BarItem } from 'modules/views/AppAppBar';

type Props = {
  children?:
  | React.ReactChild
  | React.ReactChild[];
  item?: BarItem;
};

function Layout(props: Props) {
  return (
    <React.Fragment>
      <AppAppBar item={props.item} />
      { props.children }
      <AppFooter />
    </React.Fragment>
  );
};

export {
  BarItem
};
export default Layout;