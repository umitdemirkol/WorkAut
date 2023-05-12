import React from 'react';
import { Router, useRouter } from 'next/router';
import data from '../../../data/data';

export default function Location() {
  const { query } = useRouter();
  const { slug } = query;
  console.log(slug);
  const location = data.locations.filter((item) => item.slug == slug);
  console.log(location);
  return <div>...slug</div>;
}
