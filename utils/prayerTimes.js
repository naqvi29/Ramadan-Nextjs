const { PrayerTimes, CalculationMethod, Coordinates, Madhab } = require('adhan');
const axios = require('axios');
const moment = require('moment');

// export function getPrayerTimes(latitude, longitude) {

//   // Define the location coordinates dynamically
//   const coordinates = new Coordinates(latitude, longitude);

//   // Set calculation parameters
//   const params = CalculationMethod.MuslimWorldLeague();
//   params.madhab = Madhab.Hanafi;

//   // Use a JavaScript Date object for the current date
//   const today = new Date();

//   // Calculate prayer times
//   const prayerTimes = new PrayerTimes(coordinates, today, params);

//   // Format time for output
//   const formatTime = (date) => {
//     return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
//   };

    


//   return {
//     sehriTime: formatTime(prayerTimes.fajr),
//     iftariTime: formatTime(prayerTimes.maghrib)
//   };
// }


function adjustTime(timeStr, adjustment) {
  // Parse the time string
  const [time, meridian] = timeStr.split(' ');
  const [hours, minutes] = time.split(':').map(Number);

  // Create a Date object
  const date = new Date();
  date.setHours(meridian.toLowerCase() === 'pm' && hours !== 12 ? hours + 12 : hours % 12);
  date.setMinutes(minutes + adjustment);

  // Adjust for overflow or underflow of minutes
  date.setSeconds(0);

  // Format the updated time
  const updatedHours = date.getHours();
  const updatedMinutes = date.getMinutes();
  const updatedMeridian = updatedHours >= 12 ? 'pm' : 'am';
  const formattedHours = ((updatedHours + 11) % 12 + 1); // Convert to 12-hour format
  const formattedMinutes = updatedMinutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${updatedMeridian}`;
}




export async function getPrayerTimes2(city) {
  try {
    // API endpoint
    const url = `https://muslimsalat.com/${city}/daily.json`;

    // Make API request
    const response = await axios.get(url, {
      // params: {
      //   key: 'your_api_key', // Replace with your MuslimSalat API key if required.
      // },
    });

    // Parse response data
    const data = response.data;

    if (data.status_code !== 1) {
      throw new Error(`Failed to fetch prayer times: ${data.status_description}`);
    }

    // Extract Sehar (Fajr) and Iftar (Maghrib) times
    const items = data.items[0];
    const dateFor = items.date_for;
    const formattedDate = moment(dateFor).format("Do MMMM YYYY");

    const sehriTime = items.fajr;
    const iftariTime = items.maghrib;

        // Decrement 1 minute for Sehri time
    const updatedSehriTime = adjustTime(sehriTime, -2);

    // Increment 1 minute for Iftar time
    const updatedIftariTime = adjustTime(iftariTime, 1);

    const iftariTimeJafria = adjustTime(updatedIftariTime, 10);
    const sehriTimejafria = adjustTime(updatedSehriTime, -10);
    

    // Return formatted times
    return {
      updatedSehriTime,
      updatedIftariTime,
      sehriTimejafria,
      iftariTimeJafria,
      formattedDate
    };
    // return {
    //       sehriTime: sehriTime,
    //       iftariTime: iftariTime
    // };
  } catch (error) {
    console.error('Error fetching prayer times:', error.message);
    throw error;
  }
}
