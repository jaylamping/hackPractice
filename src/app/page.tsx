import Map from './components/Map';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`}
        async
        defer
      ></script>
      <Map />
    </main>
  );
}
