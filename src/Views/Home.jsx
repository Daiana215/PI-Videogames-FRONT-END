import style from '../Styles/Landing.module.css';
import { Contenedor } from '../Styles/landing';
import github from '../Styles/githubbb.jpg';
import linkedin from '../Styles/linkedinnn.jpg';


export default function Home(props){
    const { history: { push } } = props;
    

    return(
        <div className={style.image}>
            <div className={style.overlay}></div>
            
            <Contenedor>
            <div className={style.content}>
                <h1 className={style.h1}>Do you wanna play?</h1>
            </div>
            <div className={style.a}>
                <a href='/videogames'  className={style.link}>Let's start</a>
            </div>
            </Contenedor>
            <div className={style.linkedin}>
                <a href='https://www.linkedin.com/in/daiana-grillia'><img className={style.in} src={linkedin}/></a>
            </div>
            <div className={style.github}>
                {/* <img src='https://library.kissclipart.com/20181116/tq/kissclipart-github-octocat-clipart-github-inc-d75c5e491a5ca190.jpg'
                /> */}
                <a href='https://github.com/Daiana215'><img className={style.git} src={github}
                /></a>
            </div>
        </div>
    )
};