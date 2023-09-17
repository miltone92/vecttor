import tw, { styled } from 'twin.macro';

export const Backdrop = styled.div(({ active }) => [
  tw`
    w-screen
    h-screen
    backdrop-blur-md
    bg-black/20
    items-center
    justify-center
    fixed
    top-0
    z-50
    `,
  active ? tw`flex` : tw`hidden pointer-events-none`
]);

export const ShellContent = tw.div`
    shadow-md
    min-w-fit
`;
