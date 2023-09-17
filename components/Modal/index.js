import { Backdrop, ShellContent } from './styled';

const Modal = ({ active, children, onBackdropClick }) => {
  const handleShellClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop active={active} onClick={onBackdropClick}>
      <ShellContent onClick={handleShellClick}>{children}</ShellContent>
    </Backdrop>
  );
};

export default Modal;

Modal.defaultProps = {
  onBackdropClick: () => {}
};
