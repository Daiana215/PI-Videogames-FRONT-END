import { useSelector } from 'react-redux';
import style from '../Styles/Home.module.css';


export default function Selectors(props){
    const {
        handleFilerCreatedOrNot,
        handleFilterOrderAlpha,
        handleFilterPlatforms,
        handleFilterByRating,
        handleFilterGenres,
        platforms,
        genre,
        games,
        alpha,
        rating
    } = props;
    const { videogames } = useSelector((state) => state);

    const allgames = videogames.getAllVideogames.map(el => el.platforms)
    let allPlatforms = []
    allgames.map(el => allPlatforms = allPlatforms.concat(el))
    const platformsUniq = [...new Set(allPlatforms)]

    return(
        <div className={style.selectors}>
            <select
                name='All genres'
                value={genre}
                className={style.select}
                onChange={(e) => handleFilterGenres(e.target.value)}>
                <option selected="true" disabled="disabled">All genres</option>
                    {videogames.getAllGenres.map(el =>
                        <option key={el.id} value={el.name}>{el.name}</option>
                    )}
            </select>
            <select 
                name='Videogames'
                value={games}
                className={style.select} 
                onChange={(e) => handleFilerCreatedOrNot(e.target.value)}>
                    <option selected="true" disabled="disabled">Videogames</option>
                    <option value='existing'>Existing</option>
                    <option value='created'>Created</option>
            </select>
            <select
                name='Alpha'
                value={alpha}
                className={style.select} 
                onChange={(e) => handleFilterOrderAlpha(e.target.value)}>
                    <option selected="true" disabled="disabled">Alpha</option>
                    <option value='a-to-z'>A-Z</option>
                    <option value='z-to-a'>Z-A</option>
            </select>
            <select
                name='Rating'
                value={rating}
                className={style.select} 
                onChange={(e) => handleFilterByRating(e.target.value)}>
                    <option selected="true" disabled="disabled">Rating</option>
                    <option value='up'>Upward</option>
                    <option value='down'>Falling</option>
            </select>
            <select
                name='Platforms'
                value={platforms}
                className={style.select}
                onChange={(e) => handleFilterPlatforms(e.target.value)}>
                <option selected="true" disabled="disabled">Platforms</option>
                {platformsUniq.map(el => 
                    <option key={el} value={el}>{el}</option>    
                )}
            </select>
        </div>
    );
};