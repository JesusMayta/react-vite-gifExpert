import PropTypes from 'prop-types';

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>

            <h3>{category}</h3>
            {isLoading && (<h3>Cargando...</h3>)}
            {/* <button onClick={() => setCounter(counter + 1)}>+1</button>  */}
            <div className="card_grid" >
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>

        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
