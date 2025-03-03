import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import LeaderboardGFS from './../../../components/gfs/Leaderboard';

export default function Home() {
  const router = useRouter();
  const { city: routeCity } = router.query;

  const [locationData, setLocationData] = useState({
    sehriTime: 'N/A',
    iftariTime: 'N/A',
    sehriTimeJafria: 'N/A',
    iftariTimeJafria: 'N/A',
    timezone: 'Loading',
    city: 'Loading',
    date: '...',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return; // Wait until the router is ready

    const fetchLocationAndTimes = async () => {
      try {
        let city = routeCity || 'Karachi';

        if (navigator.geolocation && !routeCity) {
          await new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
              async () => {
                const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
                const geoData = await geoResponse.json();
                const timezone = geoData.timezone;
                city = timezone.split('/')[1] || 'Karachi'; // Fallback to Karachi if city is not found
                resolve();
              },
              (error) => {
                console.error('Error fetching geolocation:', error);
                resolve(); // Proceed with default city
              }
            );
          });
        }

        // Fetch prayer times based on the determined city
        const response = await fetch('/api/prayerTimes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ city }),
        });
        const times = await response.json();

        setLocationData({
          sehriTime: times.updatedSehriTime || 'N/A',
          iftariTime: times.updatedIftariTime || 'N/A',
          sehriTimeJafria: times.sehriTimejafria || 'N/A',
          iftariTimeJafria: times.iftariTimeJafria || 'N/A',
          timezone: times.timezone || 'Asia/Karachi',
          city, // Using computed city value
          date: times.formattedDate || 'N/A',
        });
      } catch (error) {
        console.error('Error fetching prayer times:', error);
        setLocationData((prev) => ({
          ...prev,
          city: 'Karachi', // Fallback to Karachi
        }));
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocationAndTimes();
  }, [router.isReady, routeCity]);

  return (
    <div>
      <LeaderboardGFS loading={isLoading} {...locationData} />
    </div>
  );
}
