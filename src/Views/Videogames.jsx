import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Videogame from '../Components/Videogame';
import Paginated from '../Components/Paginated';
import SearchBar from '../Components/SearchBar';
import Selectors from '../Components/Selectors';
import { 
    getVideogames, 
    getGenres, 
    getGamesByName, 
    getCreatedOrNot, 
    getOrderAlpha, 
    getOrderRating, 
    getFilterPlatforms} from '../Store/action/index';
import { Gridcards } from '../Styles/grid-cards';
import style from '../Styles/Home.module.css';
import play from '../Styles/play.mp3';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

    
export default function Videogames(props){
    const { history: { push } } = props;
    const dispatch = useDispatch();
    const { videogames } = useSelector((state) => state);
    const [ page, setPage ] = useState(1);
    let [ genre, setGenre ] = useState('All genres');
    let [ games, setGames ] = useState('Videogames');
    let [ alpha, setAlpha ] = useState('Alpha');
    let [ rating, setRating ] = useState('Rating');
    let [ platforms, setPlatforms ] = useState('Platforms');
    let [ sound, setSound ] = useState(0);
    let [ pause, setPause ] = useState(0);
    const [ perPage, setPerPage ] = useState(15);
    const end = page * perPage;
    const start = end - perPage;
    const result = videogames.getAllGames.slice(start, end);

    const paginado = (num) => {
        setPage(num);
    };

    useEffect(()=>{dispatch(getVideogames())}, [dispatch]);
    useEffect(()=>{dispatch(getGenres())}, [dispatch]);
    
    function handleNavigate(id) {
        push(`/videogame/${id}`)
    };

    function handleOnClick(){
        dispatch(getVideogames())
            .then(() => setPage(page/page));
        setGenre(genre = 'All genres');
        setGames(games = 'Videogames');
        setAlpha(alpha = 'Alpha');
        setRating(rating = 'Rating');
    };

    const handleOnClickPost = () => {
        push(`/videogame`);
    };

    const handleFilterGenres = (value) => {
        dispatch(getGenres(value));
        setPage(page/page);
        setGenre(genre = value);
        setPlatforms(platforms = 'Platforms');
        setGames(games = 'Videogames');
        setAlpha(alpha = 'Alpha');
        setRating(rating = 'Rating');
    };

    const handleFilerCreatedOrNot = (value) => {
        dispatch(getCreatedOrNot(value));
        setPage(page/page);
        setGames(games = value);
        setPlatforms(platforms = 'Platforms');
        setGenre(genre = 'All genres');
        setAlpha(alpha = 'Alpha');
        setRating(rating = 'Rating');
    };

    const handleFilterOrderAlpha = (value) => {
        dispatch(getOrderAlpha(value));
        setPage(page/page);
        setAlpha(alpha = value);
        setPlatforms(platforms = 'Platforms');
        setGenre(genre = 'All genres');
        setGames(games = 'Videogames');
        setRating(rating = 'Rating');
    };

    const handleFilterByRating = (value) => {
        dispatch(getOrderRating(value));
        setPage(page/page);
        setRating(rating = value);
        setPlatforms(platforms = 'Platforms');
        setGenre(genre = 'All genres');
        setGames(games = 'Videogames');
        setAlpha(alpha = 'Alpha');
    };

    const handleFilterPlatforms = (value) => {
        dispatch(getFilterPlatforms(value));
        setPage(page/page);
        setPlatforms(platforms = value);
        setRating(rating = 'Rating');
        setGenre(genre = 'All genres');
        setGames(games = 'Videogames');
        setAlpha(alpha = 'Alpha');
    };

    const handleOnSearch = (name) => {
        dispatch(getGamesByName(name));
    };

    let playGame = new Audio();
    playGame.src = play;

    const handleOnClickPlay = () => {
        if(sound === 0){
            playGame.play();
            setSound(sound = 1);
            setPause(playGame);
        } else {
            pause.pause();
            setSound(sound = 0);
        }
    };
    
    return(
        <div className={style.home}>
            <div className={style.div}>
                <button className={style.wiki} onClick={() => push('/')}>WIKIGAMES</button>
            </div>
            <div>
                <button className={style.play} onClick={handleOnClickPlay}><FaPlayCircle/></button>
            </div>
            <div className={style.father}>
                <div className={style.btnRef}>
                    <button className={style.btn} onClick={() => handleOnClick()}>Refresh</button>
                </div>
                <div className={style.searchBar}>
                    <SearchBar onSearch={(name) => handleOnSearch(name)}/>
                </div>
                <div className={style.btnCreate}>
                    <button className={style.create} onClick={() => handleOnClickPost()}>Create</button>
                </div>
            </div>
            <Selectors
                handleFilerCreatedOrNot={handleFilerCreatedOrNot}
                handleFilterOrderAlpha={handleFilterOrderAlpha}
                handleFilterPlatforms={handleFilterPlatforms}
                handleFilterByRating={handleFilterByRating}
                handleFilterGenres={handleFilterGenres}
                platforms={platforms}
                rating={rating}
                genre={genre}
                games={games}
                alpha={alpha}
            />
            <Paginated
                videogames={videogames.getAllGames.length}
                paginated={paginado}
                perPage={perPage}
            />
            <Gridcards>
                <span>
                    {videogames.getAllGames.length === 0 
                        ? (<div className={style.image}>
                            <div>
                                <h1>GAME OVER</h1>
                            </div>
                        </div>) 
                        : result.map(el => (
                            <Videogame
                            navigate={handleNavigate}
                            videogame={el}
                            key={el.id}
                            />
                        ))
                    }
                </span>
            </Gridcards>
        </div>
    );
};