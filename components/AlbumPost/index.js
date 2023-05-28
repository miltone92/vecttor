import { useEffect, useState } from 'react';
import { HorizontalImage, ImageWrap, VerticalImage } from './styled';

export const AlbumPost = ({ image }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageAspectRatio, setImageAspectRatio] = useState(1);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
      setImageAspectRatio(img.naturalHeight / img.naturalWidth);
    };
    img.src = image;
  }, [image]);

  const isVertical = imageAspectRatio > 1;

  return loaded ? (
    isVertical ? (
      <ImageWrap style={{ display: 'flex' }} isVertical>
        <VerticalImage src={image} alt="Album Post" x />
      </ImageWrap>
    ) : (
      <ImageWrap style={{ display: 'flex' }}>
        <HorizontalImage src={image} alt="Album Post" />
      </ImageWrap>
    )
  ) : null;
};

export default AlbumPost;
