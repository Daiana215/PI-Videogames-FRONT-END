import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import style from '../Styles/Detail.module.css';

export default function VideogameDetail(props){
    let { history: { push } } = props;
    let { id } = useParams();
    let [ state, setState ] = useState();
    
    useEffect(() => {
        axios(`/videogame/${id}`)
        .then(res => setState(res.data))
    }, [id]);
    
    const handleNavigate = () => {
        push('/videogames');
    };


    return(
        <div className={style.detail}>
            <div className={style.overlay}></div>

            <div className={style.container}>
            {state && (
                <>
                <h2>{state.name}</h2>
                <div className={style.div}>
                    <div className={style.divImg}>
                        <img onClick={() => handleNavigate()} className={style.img} src={state.image} alt="Videogame"/>
                    </div>
                    <div className={style.content}>
                        <div>
                            <div className={style.website}>
                                <a className={style.web} href={state.website}>Website</a>
                            </div>
                            <label>Released: </label>
                            <p>{state.released}</p>
                        </div>
                        <div >
                            <label>Rating: </label>
                            <p>{state.rating}</p>
                        </div>
                        <div>
                            <label>Genres: </label>
                            <p>{state.genres.join(', ')}</p>
                        </div>
                        <div>
                            <label>Platforms: </label>
                            <p>{state.platforms.join(', ')}</p>
                        </div>
                    </div>
                </div>
                    <div className={style.descrip}>
                        <label>Description: </label>
                        <p>{state.description}</p>
                    </div>
                </>
            )}
            </div>
        </div>
    );
};