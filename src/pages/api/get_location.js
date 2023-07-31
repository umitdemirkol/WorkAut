import { mongooseConnect } from '../../../lib/mongoose';
import Location from '../../../models/Location';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).send({ msg: 'Only post request aq sikerim seni' });
    return;
  }

  try {
    await mongooseConnect();
    const allLocations = await Location.find({});
    console.log('sea', allLocations);
    res.status(201).send(allLocations);
  } catch (err) {
    console.log(err);
    res.status(201).send({ err, msg: 'bişeyler yanlış beybisu' });
  }
}
