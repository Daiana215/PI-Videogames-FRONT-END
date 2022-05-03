import style from '../Styles/Home.module.css';

export default function SearchBar({ onSearch }) {
    
    const handleOnSearch = (value) => {
        if(typeof onSearch === 'function') {
            onSearch(value);
        };
    };
    
    return(
        <div className={style.div}>
            <input
                className={style.search}
                placeholder='Enter a videogame...'
                type="search"
                onChange={(e) => handleOnSearch(e.target.value)}
            ></input>
        </div>
    );
};