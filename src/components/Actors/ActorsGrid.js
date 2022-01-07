//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../server/config';

//components
import Actor from './Actor/Actor';
import Grid from '../../UI/Grid';

//Image
import NoImage from '../../images/no_image.jpg'

const ActorsGrid = ({ actors }) => {
    let actorsGrid = actors.map(actor => (
        <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
                actor.profile_path ?
                    IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path :
                    NoImage
            }
        />
    ))
    return (
        <Grid header="Actors">
            {actorsGrid}
        </Grid>
    )
}
export default ActorsGrid;