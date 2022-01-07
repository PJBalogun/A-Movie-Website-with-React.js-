//Link
import { Link } from 'react-router-dom';
//config
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../server/config';

//styles
import styles from './Thumb.module.css'
import NoImage from '../../images/no_image.jpg'

const Thumb = ({ Image, movieId, clickable, title }) => {

    const ImageContent = <div>
        <img src={Image ? IMAGE_BASE_URL + POSTER_SIZE + Image
            : NoImage}
            alt="Thumb"
            className={styles.thumb}
        />
    </div>
    return (
        <li className={styles.thumb_container}>
            {
                clickable ? <Link to={`${movieId}`}>{ImageContent}</Link> : ImageContent
            }
            {clickable && <div className={styles.thumb_title}>
                <Link to={`${movieId}`}> <h2>{title}</h2></Link>
            </div>}
        </li>
    )
}
export default Thumb;