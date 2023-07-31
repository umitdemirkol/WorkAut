import { mongooseConnect } from '../../../lib/mongoose';
import Location from '../../../models/Location';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).send({ msg: 'Only post request aq sikerim seni' });
    return;
  }

  try {
    await mongooseConnect();

    const { objectId } = req.query;

    if (objectId) {
      // If objectId is provided, fetch only the specific location
      const location = await Location.findById(objectId);

      if (!location) {
        res.status(404).send({ msg: 'Location not found' });
        return;
      }

      res.status(200).send(location);
    } else {
      // If no objectId is provided, fetch all locations
      const allLocations = await Location.find({});
      res.status(200).send(allLocations);
    }
  } catch (err) {
    res.status(500).send({ err, msg: 'Something went wrong' });
  }
}
