import React from 'react';
import { Pane, Dialog } from 'evergreen-ui';

const Modal = ({isShown, title, message, hasFooter, confirmLabel, onClose}) => {
  const attrs = {
    isShown,
    title,
    onCloseComplete: onClose,
    hasFooter,
    confirmLabel
  }
  return (
    <Pane>
      <Dialog
        {...attrs}
      >
        {message}
      </Dialog>
    </Pane>
  )
};

export default Modal;