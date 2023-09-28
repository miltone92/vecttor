import tw from 'twin.macro';

export const Wrap = tw.div`flex 
  flex-col 
  gap-16  
  mx-auto
  // max-w-[1500px] 
  // p-5
  // md:(p-10 pt-40)
`;

export const Row = tw.div`flex flex-row gap-4`;

export const Hero = tw(Row)`
  flex
  p-10
  flex-col
  gap-20
  md:(flex-row) mb-10 bg-[#f8f7fc] rounded-lg
`;

export const Column = tw.div`flex flex-col gap-4`;

export const ColumnCenter = tw(Column)`justify-center`;

export const SvgWrap = tw.div`[&>svg]:(w-full h-auto)  w-full`;

export const ListItem = tw.li`text-body-copy list-disc ml-10 my-2`;
