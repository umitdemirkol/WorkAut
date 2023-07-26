import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  category: { type: String, required: true },
  country: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  county: { type: String, required: true },
  mapLoc: { type: String, required: true },
  poster: { type: String, required: true },
  images: [{ type: String }],
  likes: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  description: { type: String, required: true },
  isVisible: { type: Boolean, required: true },
});

const Location = mongoose.model('Location', locationSchema);
export default Location;
