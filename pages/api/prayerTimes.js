// pages/api/prayerTimes.js
import { getPrayerTimes2 } from '../../utils/prayerTimes';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { city } = req.body;
      console.log("CITYYY");
      console.log(city);

      if (!city) {
        return res.status(400).json({ error: 'City is required' });
      }

      const times = await getPrayerTimes2(city);
      res.status(200).json(times);
    } catch (error) {
      console.error('Error fetching prayer times:', error);
      res.status(500).json({ error: 'Failed to fetch prayer times' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
