import tw, { styled } from 'twin.macro';

export const ImageWrap = styled.div(({ isVertical }) => [
  tw`relative`,
  `
  flex
  width: 100%;
  height: -webkit-fill-available;
  min-height: 400px;
  `,
  isVertical ? `grid-row: span 2;` : ``,
]);

export const VerticalImage = styled.img`
  background-position: center;
  background-size: cover;
  object-fit: cover;
`;

export const HorizontalImage = styled.img`
  background-position: center;
  background-size: cover;
  object-fit: cover;
`;
