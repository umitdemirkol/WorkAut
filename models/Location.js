import { Schema, model, models } from 'mongoose';

const locationSchema = new Schema({
  brandName: { type: String },
  category: { type: String },
  country: { type: String },
  slug: { type: String, unique: true },
  county: { type: String },
  mapLoc: { type: String },
  poster: { type: String },
  images: [{ type: String }],
  likes: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  description: { type: String },
  isVisible: { type: Boolean },
});

const Location = models.Location || model('Location', locationSchema);
export default Location;
