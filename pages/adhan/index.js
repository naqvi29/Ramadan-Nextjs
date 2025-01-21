import { getPrayerTimes } from '../../utils/prayerTimes';
import Ramzan from '../../components/Ramzan';
// import '../../styles/global.css'
// import styles from '../../styles/zam.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/custom.css';


export async function getServerSideProps() {
  try {
    // Fetch geolocation data
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const geoData = await response.json();

    // Extract latitude, longitude, timezone, and country with fallback values
    const latitude = geoData.latitude || 'Unknown';
    const longitude = geoData.longitude || 'Unknown';
    const timezone = geoData.timezone || 'Unknown';
    const country = geoData.country || 'Unknown';

    // Get prayer times based on user's location if latitude and longitude are valid
    let sehriTime = 'N/A';
    let iftariTime = 'N/A';

    if (latitude !== 'Unknown' && longitude !== 'Unknown') {
      const times = getPrayerTimes(latitude, longitude);
      sehriTime = times.sehriTime;
      iftariTime = times.iftariTime;
    }

    return {
      props: {
        sehriTime,
        iftariTime,
        timezone,
        country,
      },
    };
  } catch (error) {
    console.error('Error fetching geolocation data:', error);

    // Provide fallback data if API fails
    return {
      props: {
        sehriTime: 'N/A',
        iftariTime: 'N/A',
        timezone: 'Unknown',
        country: 'Unknown',
      },
    };
  }
}

export default function Home({ sehriTime, iftariTime, timezone, country }) {
  return (
    <div>
      <Ramzan
        sehriTime={sehriTime}
        iftariTime={iftariTime}
        timezone={timezone}
        country={country}
      />
    </div>
  );
}
