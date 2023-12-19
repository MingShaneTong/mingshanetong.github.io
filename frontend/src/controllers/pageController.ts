import qs from 'qs';

import { BACKEND_API_URL } from "@/config/api";
import Response from "@/models/api/Response";
import { ContactMePage } from '@/models/pages/ContactMePage';

export const getContactMePageData = async () => {
  const response = await fetch(`${BACKEND_API_URL}/api/contact-me-page`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<ContactMePage> = await response.json();
  return data;
};