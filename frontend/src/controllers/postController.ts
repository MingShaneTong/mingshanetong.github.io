import axios from "axios";
import qs from 'qs';

import apiUrl from "@/config/api";
import Response from "@/models/api/Response";
import { Post } from "@/models/Post";

export const getPosts = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'publishedAt', 'recommended'],
      sort: { publishedAt: 'desc' }
    },
    {
      encodeValuesOnly: true
    }
  );
  
  const response = await axios.get(`${apiUrl}/api/posts?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Post[]> = response.data;
  return data;
};

export const getPostData = async (id: number) => {
  const query = qs.stringify(
    {
      populate: ['content']
    },
    {
      encodeValuesOnly: true
    }
  );

  const response = await axios.get(`${apiUrl}/api/posts/${id}?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Post> = response.data;
  return data;
};
