import axios from 'axios';
import qs from 'qs';

import { apiUrl } from "@/config/api.ts";
import NavbarElement from '@/components/Navbar';
import FooterElement from '@/components/Footer';
import Response from "@/models/api/Response";
import { Navbar } from '@/models/Navbar';
import { Footer } from '@/models/Footer';

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

const getFooterData = async () => {
  const query = qs.stringify(
    {
      populate: ["socials", "links"]
    },
    {
      encodeValuesOnly: true
    }
  );
  const response = await axios.get(`${apiUrl}/api/footer?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Footer> = response.data;
  return data;
};

export default async function Template({ children }: { children: React.ReactNode }) {
  let navData = await getNavData();
  let footerData = await getFooterData();

  return (
    <>
      <NavbarElement data={navData.data} />
      {children}
      <FooterElement data={footerData.data}/>
    </>
  );
}