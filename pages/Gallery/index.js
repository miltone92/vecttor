import AlbumPost from '@/components/AlbumPost';
import GridLayout from '@/components/GridLayout';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import tw from 'twin.macro';
import { useEffect, useState } from 'react';

const Main = tw.main`
  p-20
  h-full
  w-full
`;

const Gallery = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 10));

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const offsetHeight = document.documentElement.offsetHeight;
      const remainingHeight = offsetHeight - (scrollTop + windowHeight);

      if (remainingHeight < 200 && visibleImages.length < images.length) {
        const nextImages = images.slice(0, visibleImages.length + 10);
        setVisibleImages(nextImages);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleImages, images]);

  return (
    <Main>
      <GridLayout>
        {visibleImages.map((image, i) => (
          <LazyLoadComponent key={i}>
            <AlbumPost image={image} />
          </LazyLoadComponent>
        ))}
      </GridLayout>
    </Main>
  );
};

export default Gallery;
