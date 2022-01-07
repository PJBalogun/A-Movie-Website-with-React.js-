//styles
import styles from './Grid.module.css'

const Grid = (props) => {
    return (
        <div className={styles["grid-container"]}>
            <h1>{props.header}</h1>
            <ul className={styles.grid}>{props.children}</ul>
        </div>
    )
}
export default Grid;//styles
