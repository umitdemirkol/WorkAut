import Location from '../../../models/Location';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ msg: 'Only post request aq sikerim seni' });
    return;
  }
  const { location } = req.body;

  try {
    await connecMongoDB();
    Location.create({ location }).then((data) => {
      console.log(data);
      res.status(201).send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(201).send({ err, msg: 'bişeyler yanlış beybisu' });
  }
}
