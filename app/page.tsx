// app/page.tsx
import Head from 'next/head';
import MapComponent from '@components/MapComponent'; // Import the MapComponent

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Next.js Leaflet Map</h1>
        {/* Use the MapComponent here */}
        <MapComponent />
      </div>
    </>
  );
}
