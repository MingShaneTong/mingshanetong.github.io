
# mingshanetong.github.io
The goal of this project is to create a scalable blog web application to show my professional experience and also blog articles. 
## Components

There are 3 major pieces of tech used in this project. 

### Next.js Server
This is the server that is rendering the front end of the website. Visit [https://nextjs.org](https://nextjs.org) for more details. Please note that this project uses the app router. 

### Strapi CMS Server
The idea behind the architecture of this application is to make it as configurable as possible on the CMS server. Strapi is used as a headless CMS that serves the data to the Next.js frontend. Visit [https://docs.strapi.io](https://docs.strapi.io) for more details. 

### Nginx Server
Used in the Docker version of the application, the Nginx server is used to redirect traffic to each server so the frontend and backend data can be retrieved from the same domain. Visit [https://nginx.org](https://nginx.org) for more details. 

## Installation
### Prerequisites

- npm

## Run Locally
### Developer Environment
Use the following instructions to build the application if you are looking to expand the current application. 

#### 1. Run Strapi Server
```bash
cd backend
npm install
npm run dev
```

#### 2. Run Next.js Server
```bash
cd frontend
npm install
npm run dev
```

## Deployment

### Static Website 
Use the following instructions to build the application if you are looking to build a static website with data rendered without the Strapi server being live. 

#### 1. Run Strapi Server
```bash
cd backend
npm install
npm run build
npm start
```

#### 2. Run Next.js Server
```bash
cd frontend
npm install
npm run build
```

If you want to open the website use `npm start` or `npm run deploy` to deploy to GitHub Pages. Visit [How To Deploy a Next.js Static Site to GitHub Pages](https://blog.sallai.me/deploy-next-site-to-github-pages) for more info involving configurations. 

### Dynamic Website
Use the following instructions to build the application if you are looking to build a static website with data rendered dynamically from the Strapi server being live. 

Open the file `frontend\src\app\layout.tsx` and uncomment the line 8 `export const dynamic = 'force-dynamic'`. Then in the root folder use the following line to build the docker container. 

```bash
docker compose build
docker compose up
```

With the following configuration, the following traffic direction rules apply as with the configuration of the nginx server.

```
http://admin.localhost:8080    -> http://backend:1337/
http://localhost:8080/api/     -> http://backend:1337/api/
http://localhost:8080/uploads/ -> http://backend:1337/uploads/
http://localhost:8080          -> http://frontend:3000/
```
