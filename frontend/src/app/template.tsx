import axios from 'axios';
import qs from 'qs';

import { apiUrl } from "@/config/api.ts";
import NavbarElement from '@/components/Navbar';
import FooterElement from '@/components/Footer';
import { Navbar } from '@/models/Navbar';
import Response from "@/models/api/Response";

const getNavData = async () => {
  const query = qs.stringify(
    {
      populate: {
        navItems: {
          populate: ["children"]
        }
      },
    },
    {
      encodeValuesOnly: true
    }
  );

  const response = await axios.get(`${apiUrl}/api/navbar?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Navbar> = response.data;
  return data;
};

export default async function Template({ children }: { children: React.ReactNode }) {
  let navData = await getNavData();
  // let footerData = await getFooterData();

  console.log(navData.data.attributes.navItems[0].children);
  return (
    <>
      <NavbarElement data={navData.data} />
      {children}
      <FooterElement />
    </>
  );
}