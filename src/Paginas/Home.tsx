import styles from './Home.module.css';
import GitHub from '../imagens/github.png';
import Linkedin from '../imagens/linkedin.png';


export const Home = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.titulo}>Olá, meu nome é Ramom</h1>
            <p className={styles.subtitulo}>Este é o meu portfólio, aqui você pode encontrar um pouco mais sobre mim.</p>
            <div>
                <a target="_blank" href="https://github.com/Ramom-Gomes"><img className={styles.imagem} src={GitHub} width={60} alt="" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/ramomgomes/"><img className={styles.imagem2} src={Linkedin} width={60} alt="" /></a>
            </div>
        </div>
    )
} 