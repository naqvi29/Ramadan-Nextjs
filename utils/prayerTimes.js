const { PrayerTimes, CalculationMethod, Coordinates, Madhab } = require('adhan');


export function getPrayerTimes(latitude, longitude) {

  // Define the location coordinates dynamically
  const coordinates = new Coordinates(latitude, longitude);

  // Set calculation parameters
  const params = CalculationMethod.MuslimWorldLeague();
  params.madhab = Madhab.Hanafi;

  // Use a JavaScript Date object for the current date
  const today = new Date();

  // Calculate prayer times
  const prayerTimes = new PrayerTimes(coordinates, today, params);

  // Format time for output
  const formatTime = (date) => {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

    


  return {
    sehriTime: formatTime(prayerTimes.fajr),
    iftariTime: formatTime(prayerTimes.maghrib)
  };
}
