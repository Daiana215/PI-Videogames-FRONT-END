import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, postVideogame } from '../Store/action/index';
import validate from './Validate/validate';
import style from '../Styles/Form.module.css';

export default function CreateVideogame(props){
    const { history: { push } } = props;
    const dispatch = useDispatch();
    const { videogames } = useSelector((state) => state);
    const [ error, setError ] = useState({});
    const [ state, setState ] = useState({
        name:"",
        image:"",
        description:"",
        released:"",
        rating:'',
        website: '',
        genres: [],
        platforms: []
    });
    const allgames = videogames.getAllVideogames.map(el => el.platforms);
    let allPlatforms = [];
    allgames.map(el => allPlatforms = allPlatforms.concat(el));
    const platformsUniq = [...new Set(allPlatforms)];

    useEffect(() => {dispatch(getGenres())}, [dispatch]);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
        setError(validate({
            ...state,
            [e.target.name] : e.target.value
        }));
    };

    const handleSelectorGenres = (e) => {
        if(!state.genres.includes(e.target.value)){
            setState({
                ...state,
                genres: [...state.genres, e.target.value]
            });
        };
    };

    const deleteGenre = (g) =>{
        setState({
            ...state,
            genres: state.genres.filter(el => el !== g)
        });
        setError(validate({
            ...state,
            genres: [...state.genres]
        }));
    };

    const handleSelectorPlatforms = (e) => {
        if(!state.platforms.includes(e.target.value)){
            setState({
                ...state,
                platforms: [...state.platforms, e.target.value]
            });
        };
    };

    const deletePlatform = (p) => {
        setState({
            ...state,
            platforms: state.platforms.filter(el => el !== p)
        });
        setError(validate({
            ...state,
            platforms: [...state.platforms]
        }));  
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validate(state));
        const errorSave = validate(state);
        if(Object.values(errorSave).length !== 0){
            alert('Please, fullfil the required camps.')
        }else{
            dispatch(postVideogame(state));
            alert('Success! Created videogame.');
            push('/videogames');
        }
        // setState({
        //     name: '',
        //     image: '',
        //     description: '',
        //     released: '',
        //     rating: '',
        //     website: '',
        //     genres: [],
        //     platforms: []
        // });
    };

    return(
        <div className={style.content}>
            <div className={style.overlay}></div>

            <div className={style.container}>
                <div>
                    <button className={style.back} onClick={() => push(`/videogames`)}>Back</button>
                    <h1>Create a new videogame</h1>
                </div>
                <form>
                    <div className={style.formulario}>
                        <div>
                            {/* <label>Name: </label> */}
                            <input
                                type='text'
                                name='name'
                                onChange={(e) => handleChange(e)}
                                value={state.name}
                                placeholder='Name*'
                                required
                            />
                            {error.name && (<p>{error.name}</p>)}
                        </div>
                        <div>
                            {/* <label>Released: </label> */}
                            <input
                                type='date'
                                value={state.released}
                                name='released'
                                placeholder='Released*'
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            {error.released && (<p>{error.released}</p>)}
                        </div>
                        <div>
                            {/* <label>Rating: </label> */}
                            <input
                                type='number'
                                value={state.rating}
                                name='rating'
                                placeholder='Rating*'
                                onChange={(e) => handleChange(e)}
                                min={0}
                                max={5}
                                required
                            />
                            {error.rating && (<p>{error.rating}</p>)}
                        </div>
                        <div>
                            {/* <label>Image: </label> */}
                            <input
                                type='url'
                                value={state.image}
                                name='image'
                                placeholder='Image*'
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            {error.image && (<p>{error.image}</p>)}
                        </div>
                        <div>
                            {/* <label>Genres: </label> */}
                            {/* <input
                                type='text'
                                name='genres'
                                value={state.genres}
                                placeholder='Enter a genre...*'
                                onChange={(e) => handleSelectorGenres(e)}
                            ></input> */}
                            <select
                                className={style.select} 
                                onChange={(e) => handleSelectorGenres(e)} 
                                required>
                                <option selected="true" disabled="disabled">All genres</option>
                                {videogames.getAllGenres.map(el =>
                                    <option value={el.name}>{el.name}</option>     
                                )}
                            </select>
                            {error.genres && (<p>{error.genres}</p>)}
                        </div>
                        <span className={style.li}>
                            {state.genres?.map((el)=>{
                                return(
                                    (<li
                                        onClick={()=>{deleteGenre(el)}}
                                        key={el}>{el}
                                    </li>)
                                )})
                            }
                        </span>
                        <div>
                            <select 
                                className={style.select}
                                onChange={(e) => handleSelectorPlatforms(e)} 
                                required>
                                <option selected="true" disabled="disabled">Platforms</option>
                                {platformsUniq.map(el =>
                                    <option value={el}>{el}</option>)}
                            </select>
                            {error.platforms && (<p>{error.platforms}</p>)}
                        </div>
                        <span className={style.li}>
                            {state.platforms?.map((el)=>{
                                return(
                                    (<li
                                        onClick={()=>{deletePlatform(el)}}
                                        key={el}>{el}
                                    </li>)
                                )})
                            }
                        </span>
                        <div>
                            {/* <label>Website: </label> */}
                            <input
                                type='url'
                                value={state.website}
                                name='website'
                                placeholder='Website*'
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            {error.website && (<p>{error.website}</p>)}
                        </div>
                        <div>
                            {/* <label>Description: </label> */}
                            <textarea 
                                value={state.description}
                                onChange={(e) => handleChange(e)}
                                name='description' 
                                placeholder='Description*'
                                rows="10" 
                                cols="55">Escribe aquí tus comentarios</textarea>
                            {/* <input
                                type='text'
                                value={state.description}
                                name='description'
                                placeholder='Description*'
                                onChange={(e) => handleChange(e)}
                            /> */}
                            {error.description && (<p>{error.description}</p>)}
                        </div>
                    </div>
                </form>
                <div className={style.buttons}>
                    <button className={style.btn} id='button' type='submit' onClick={(e) => handleSubmit(e)}>Create!</button>
                    {error.submit && (<p>{error.submit}</p>)}
                </div>
            </div>
        </div>
    )
};