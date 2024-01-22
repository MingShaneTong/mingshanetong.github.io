import qs from 'qs';

import { BACKEND_API_URL } from "@/config/api";
import Response from "@/models/api/Response";
import { Navbar } from '@/models/Navbar';
import { Social } from '@/models/Social';
import Logo from '@/models/Logo';
import { Metadata } from '@/models/Metadata';

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

  const response = await fetch(`${BACKEND_API_URL}/api/navbar?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Navbar> = await response.json();
  return data;
};

export const getSocialData = async () => {
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
  
  const response = await fetch(`${BACKEND_API_URL}/api/social?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Social> = await response.json();
  return data;
};


export const getLogoData = async () => {
  const query = qs.stringify(
    {
      populate: ["media"],
    },
    {
      encodeValuesOnly: true
    }
  );
  
  const response = await fetch(`${BACKEND_API_URL}/api/logo?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Logo> = await response.json();
  return data;
};

export const getMetadata = async () => {
  const response = await fetch(`${BACKEND_API_URL}/api/metadata`, {
    headers: {
      Accept: "application/json",
    },
  })
  const data: Response<Metadata> = await response.json();
  return data;
}