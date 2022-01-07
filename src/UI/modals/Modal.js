import ReactDOM from 'react-dom';

const ModalOverlay = ({ children }) => <>
    {children}
</>
const Modal = ({ children }) => <>
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlay'))}
</>

export default Modal;
