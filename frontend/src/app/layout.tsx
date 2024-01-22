import "@mantine/core/styles.css";
import './globals.css'
import Provider from './Provider';
import { getMetadata } from "@/controllers/layoutController";

require('dotenv').config()

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  var metadata = await getMetadata();

  return {
    title: metadata.data.attributes.title,
    description: metadata.data.attributes.description
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode[] }) {
  var metadata = await getMetadata();
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={metadata.data.attributes.shortcutIcon} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
