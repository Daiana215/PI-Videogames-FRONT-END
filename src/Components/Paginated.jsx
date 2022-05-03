import style from '../Styles/Home.module.css';

export default function Paginated({ perPage, videogames, paginated }){
    const numbersPages = [];

    for(let i = 0; i < Math.ceil(videogames/perPage); i++) {
        numbersPages.push(i + 1);
    };

    return(
        <div className={style.paginated}>
            <ul>
                {numbersPages.length ?
                numbersPages.map(n => (
                    <button className={style.btnPage} key={n}>
                        <a onClick={() => paginated(n)}>{n}</a>
                    </button>
                )) : undefined}
            </ul>
        </div>
    );
};