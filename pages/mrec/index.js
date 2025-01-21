import { getPrayerTimes2 } from '../../utils/prayerTimes';
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
    const timezone = geoData.timezone;
    const city = timezone.split("/")[1];

    // Get prayer times based on user's location if latitude and longitude are valid
    let sehriTime = 'N/A';
    let iftariTime = 'N/A';
    let sehriTimeJafria = 'N/A';
    let iftariTimeJafria = 'N/A';
    let date = 'N/A';

    if (city) {
      const times = await getPrayerTimes2(city);
      sehriTime = times.updatedSehriTime;
      iftariTime = times.updatedIftariTime;
      sehriTimeJafria = times.sehriTimejafria;
      iftariTimeJafria = times.iftariTimeJafria;
      date = times.formattedDate;
    }

    return {
      props: {
        sehriTime,
        iftariTime,
        sehriTimeJafria,
        iftariTimeJafria,
        timezone,
        city,
        date,
      },
    };
  } catch (error) {
    console.error('Error fetching geolocation data:', error);

    // Provide fallback data if API fails
    return {
      props: {
        sehriTime: 'N/A',
        iftariTime: 'N/A',
        sehriTimeJafria: 'N/A',
        iftariTimeJafria: 'N/A',
        timezone: 'Unknown',
        city: 'Unknown',
        date: "N/A"
      },
    };
  }
}

export default function Home({ sehriTime, iftariTime, sehriTimeJafria, iftariTimeJafria, timezone, city, date }) {
  return (
    <div>
      <Ramzan
        sehriTime={sehriTime}
        iftariTime={iftariTime}
        sehriTimeJafria = {sehriTimeJafria}
        iftariTimeJafria={iftariTimeJafria}
        timezone={timezone}
        city={city}
        date={date}
      />
    </div>
  );
}
