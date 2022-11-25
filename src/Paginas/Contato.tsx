import styles from './Contato.module.css';
import Telefone from '../imagens/telefone.png';
import Email from '../imagens/email.png';

export const Contato = () => {
    return (
        <div className={styles.main}>
            <div className={styles.numero}>  
                <img className={styles.fotoNumero} src={Telefone} alt="" />
                <div>
                    <p className={styles.infoNumero}>Telefone</p>
                    <p className={styles.infoNumero2}>+55 (11) 94262-7660</p>
                </div>
            </div>
            <div className={styles.email}>
                <img className={styles.fotoNumero} src={Email} alt="" />
                <div>
                    <p className={styles.infoNumero}>Email</p>
                    <p className={styles.infoNumero2}>ramomusica09@hotmail.com</p>
                </div>
            </div>
        </div>
    )
} 