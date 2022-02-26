import React from 'react';
import ReactDOM from 'react-dom';
import BackDrop from './BackDrop.component';
import Overlay from './Overlay.component';

const portalElementDiv = document.getElementById('overlays');

const Modal = ({ onHideCart,children }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onHideCart={onHideCart} />,
				portalElementDiv
			)}
			{ReactDOM.createPortal(
				<Overlay>{children}</Overlay>,
				portalElementDiv
			)}
		</>
	);
};

export default Modal;
