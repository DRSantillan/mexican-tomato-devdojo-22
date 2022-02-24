import React from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.styles.module.scss';
import BackDrop from './BackDrop.component';
import Overlay from './Overlay.component';

const portalElementDiv = document.getElementById('overlays');

const Modal = ({ active, children }) => {
	return (
		<>
			{active && ReactDOM.createPortal(<BackDrop />, portalElementDiv)}
			{active &&
				ReactDOM.createPortal(
					<Overlay>{children}</Overlay>,
					portalElementDiv
				)}
		</>
	);
};

export default Modal;
