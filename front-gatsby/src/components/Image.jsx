import React from 'react';
import clientConfig from '../../client-config';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(clientConfig.sanity);
function imageUrlFor(source) {
  return builder.image(source);
}

function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export default function Image({ mainImage, width = 1200 }) {
  const imgUrl =
    mainImage &&
    imageUrlFor(buildImageObj(mainImage))
      .width(width)
      .fit('fill')
      .auto('format')
      .url();

  return imgUrl ? (
    <img src={imgUrl} alt={`${mainImage.alt}, ${mainImage.caption}` || ''} />
  ) : (
    // return nothing
    <></>
  );
}
