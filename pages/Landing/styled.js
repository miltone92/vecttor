import tw from 'twin.macro';

export const Wrap = tw.div`flex flex-col gap-2 p-10`;
export const Row = tw.div`flex flex-row gap-4`;
export const Column = tw.div`flex flex-col gap-4`;
export const ColumnCenter = tw(Column)`justify-center items-center`;
export const SvgWrap = tw.div`[&>svg]:w-full  w-full`;
