import Gallery from './Gallery';

const images = require.context(
  '../assets/albums/mexico',
  false,
  /\.(png|jpe?g|svg|JPG)$/
);

const imagePaths = Array.from(
  new Set(images.keys().map((key) => images(key).default.src))
);

export default function Home() {
  console.log('imagePaths', imagePaths);
  return <Gallery images={imagePaths} />;
}
