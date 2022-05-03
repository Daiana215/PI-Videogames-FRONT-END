import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import style from '../Styles/Detail.module.css';

export default function VideogameDetail(props){
    let { history: { push } } = props;
    let { id } = useParams();
    let [ state, setState ] = useState();
    
    useEffect(() => {
        fetch(`http://localhost:3001/videogame/${id}`)
        .then(res => res.json())
        .then(res => setState(res))
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
                {id.includes('-') ? (<a href='/delete'>Delete</a>) : null}
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