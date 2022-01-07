//Styles
import styles from './Actor.module.css'

const Actor = ({ name, character, imageUrl }) => (
    <div className={styles.actor_container}>
        <img src={imageUrl} alt='actor-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </div>
);

export default Actor;