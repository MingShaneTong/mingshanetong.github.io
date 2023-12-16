import qs from 'qs';

import apiUrl from "@/config/api";
import Response from "@/models/api/Response";
import { Navbar } from '@/models/Navbar';
import { Footer } from '@/models/Footer';
import Logo from '@/models/Logo';

export const getNavData = async () => {
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

  const response = await fetch(`${apiUrl}/api/navbar?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Navbar> = await response.json();
  return data;
};

export const getFooterData = async () => {
  const query = qs.stringify(
    {
      populate: {
        socials: {
          "populate": "*" 
        },
        links: "*"
      }
    },
    {
      encodeValuesOnly: true
    }
  );
  
  const response = await fetch(`${apiUrl}/api/footer?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Footer> = await response.json();
  return data;
};


export const getLogoData = async () => {
  const query = qs.stringify(
    {
      populate: ["light", "dark"],
    },
    {
      encodeValuesOnly: true
    }
  );
  
  const response = await fetch(`${apiUrl}/api/logo?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Logo> = await response.json();
  return data;
};
