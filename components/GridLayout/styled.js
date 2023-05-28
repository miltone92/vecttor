import tw, { styled } from 'twin.macro';

const GridWrapperBase = tw.div`
  grid`;

const gaps = { 1: '1rem', 2: '2rem', 3: '3rem', 4: '4rem', 5: '5rem' };
const configurableColumnsLg = {
  1: tw`lg:grid-cols-1`,
  2: tw`lg:grid-cols-2`,
  3: tw`lg:grid-cols-3`,
  4: tw`lg:grid-cols-4`,
  5: tw`lg:grid-cols-5`,
  6: tw`lg:grid-cols-6`,
  7: tw`lg:grid-cols-7`,
  8: tw`lg:grid-cols-8`,
  9: tw`lg:grid-cols-9`,
  10: tw`lg:grid-cols-10`,
  11: tw`lg:grid-cols-11`,
  12: tw`lg:grid-cols-12`
};
const configurableColumnsSm = {
  1: tw`grid-cols-1`,
  2: tw`grid-cols-2`,
  3: tw`grid-cols-3`,
  4: tw`grid-cols-4`,
  5: tw`grid-cols-5`,
  6: tw`grid-cols-6`,
  7: tw`grid-cols-7`,
  8: tw`grid-cols-8`,
  9: tw`grid-cols-9`,
  10: tw`grid-cols-10`,
  11: tw`grid-cols-11`,
  12: tw`grid-cols-12`
};
const configurableColumnsMd = {
  1: tw`md:grid-cols-1`,
  2: tw`md:grid-cols-2`,
  3: tw`md:grid-cols-3`,
  4: tw`md:grid-cols-4`,
  5: tw`md:grid-cols-5`,
  6: tw`md:grid-cols-6`,
  7: tw`md:grid-cols-7`,
  8: tw`md:grid-cols-8`,
  9: tw`md:grid-cols-9`,
  10: tw`md:grid-cols-10`,
  11: tw`md:grid-cols-11`,
  12: tw`md:grid-cols-12`
};

export const GridWrapper = styled(GridWrapperBase)(
  ({ smallColumns, mediumColumns, largeColumns, backgroundColor, gap }) => [
    configurableColumnsSm[smallColumns],
    configurableColumnsMd[mediumColumns],
    configurableColumnsLg[largeColumns],
    { gap: gaps[gap] },
    { backgroundColor: `${backgroundColor};` },
    // horizontalMargin ? tw`px-mobile-padding-x lg:px-main-padding-x` : tw`px-0`,
    // verticalMargin ? tw`my-5 lg:my-main-margin-y` : tw`my-0 md:my-0`
  ]
);
