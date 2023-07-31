import { mongooseConnect } from '../../../lib/mongoose';
import Location from '../../../models/Location';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ msg: 'Only post request aq sikerim seni' });
    return;
  }
  const { location } = req.body;

  try {
    await mongooseConnect();
    Location.create(location).then((data) => {
      res.status(201).send(data);
    });
  } catch (err) {
    res.status(201).send({ err, msg: 'bişeyler yanlış beybisu' });
  }
}
