import React from 'react';
import css from './Modal.styles.module.scss'

const Overlay = ({children}) => {
	return <div className={css.modal}>
        <div className={css.content}>{children}</div>
    </div>;
};

export default Overlay;
