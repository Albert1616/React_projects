import style from './Loader.module.css';

function Loader(){
    return (
        <div className={style.loader}>
            <img src='' alt="Wait, loading content!" className={style.load}/>
        </div>
    )
}

export default Loader;