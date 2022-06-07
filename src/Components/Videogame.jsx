import style from '../Styles/Videogame.module.css';

export default function Videogame(props){
    const { videogame, navigate } = props;
    const { id, image, name, genres } = videogame;

    return(
        <div className={style.card}>
            <div className={style.front}>
                <img
                src={image} 
                alt="Videogame"
                />
            </div>
            <div className={style.back}>
                <h3 className={style.name}>{name}</h3>
                <p className={style.genres}>{genres.join(', ')}</p>
                <div className={style.div}>
                    <button onClick={() => navigate(id)}>Detail</button>
                </div>
            </div>
        </div>
    );
};