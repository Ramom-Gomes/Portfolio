import styles from './Sobre.module.css';

export const Sobre = () => {
    return (
        <div className={styles.main}> 
            <p className={styles.sobre}>Eu me chamo Ramom Gomes da Silva, sou desenvolvedor com foco em Front End, <br />
                Possuo foco em desenvolvimento com HTML, CSS, Javascript, TypeScript e ReactJS. <br />
                Sou apaixonado por soluçoes simples para problemas dificeis.
            </p>
            <p className={styles.info}>Nome:   Ramom Gomes da Silva</p>
            <p className={styles.info}>Idade: 18</p>
            <p className={styles.info}>Nacionalidade: Brasileiro</p>
            <p className={styles.info}>Localização: São Paulo</p>
        </div>
    )
} 