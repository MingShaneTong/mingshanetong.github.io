import qs from 'qs';

import { BACKEND_API_URL } from "@/config/api";
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
  
  const response = await fetch(`${BACKEND_API_URL}/api/posts?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Post[]> = await response.json();
  return data;
};

export const getRecommendedPosts = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'publishedAt', 'recommended', 'project'],
      populate: ['coverImage'],
      sort: { publishedAt: 'desc' },
      filters: {
        recommended: {
          $eq: true
        }
      } 
    },
    {
      encodeValuesOnly: true
    }
  );
  
  const response = await fetch(`${BACKEND_API_URL}/api/posts?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Post[]> = await response.json();
  return data;
};

export const getProjectPosts = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'publishedAt', 'recommended', 'project'],
      populate: ['coverImage'],
      sort: { publishedAt: 'desc' },
      filters: {
        project: {
          $eq: true
        }
      } 
    },
    {
      encodeValuesOnly: true
    }
  );
  
  const response = await fetch(`${BACKEND_API_URL}/api/posts?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Post[]> = await response.json();
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

  const response = await fetch(`${BACKEND_API_URL}/api/posts/${id}?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Post> = await response.json();
  return data;
};
