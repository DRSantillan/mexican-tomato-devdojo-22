import css from './Modal.styles.module.scss'


const BackDrop = ({onHideCart}) => {
	return <div className={css.backdrop} onClick={onHideCart}/>;
};

export default BackDrop;
