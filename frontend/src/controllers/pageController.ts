import qs from 'qs';

import { BACKEND_API_URL } from "@/config/api";
import Response from "@/models/api/Response";
import { ContactMePage } from '@/models/pages/ContactMePage';
import { HomePage } from '@/models/pages/HomePage';

export const getContactMePageData = async () => {
  const response = await fetch(`${BACKEND_API_URL}/api/contact-me-page`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<ContactMePage> = await response.json();
  return data;
};

export const getHomePageData = async () => {
  const query = qs.stringify(
    {
      populate: {
        hero: {
          populate: ["actions"]
        },
        aboutme: "*"
      },
    },
    {
      encodeValuesOnly: true
    }
  );
  const response = await fetch(`${BACKEND_API_URL}/api/home-page?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<HomePage> = await response.json();
  console.log(data.data.attributes.aboutme);
  return data;
};
