import styles from './Projetos.module.css';
import Foto from '../imagens/CalculadoraImc.jpeg';
import Conversor from '../imagens/conversor.jpeg';
import Pizza from '../imagens/Pizza.jpeg';
import Urna from '../imagens/Urna.jpeg';
import List from '../imagens/List.jpeg';
import Calc from '../imagens/Calc.jpeg';
import Medi from '../imagens/Medi.jpeg';
import Star from '../imagens/Star.jpeg'; 

export const Projetos = () => {
    return (
        <div className={styles.main}>
            <p className={styles.texto}>aqui você pode visualizar um pouco sobre os meus 
             projetos pessoais.</p>
             <div className={styles.submain}>
                <div className={styles.projetos}>
                    <img className={styles.imagem} src={Foto} />
                    <p className={styles.informacoes}>
                        Calcualdora de IMC, feito com Reactjs e Typescript.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://deft-druid-7008d8.netlify.app/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://github.com/Ramom-Gomes/Calculadora-de-IMC.">Github</a>
                    </div>
                </div>
                <div className={styles.projetos}>
                    <img className={styles.imagem} src={Conversor} />
                    <p className={styles.informacoes}>
                        Conversor de Moedas feito com Reactjs e Typescript.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://classy-kitsune-d35a1e.netlify.app/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://github.com/Ramom-Gomes/Conversor-de-Moedas">Github</a>
                    </div>
                </div>
                <div className={styles.projetos}>
                    <img className={styles.imagem} src={Pizza} />
                    <p className={styles.informacoes}>
                        E-Comerce de pizzas, feito com HTML, CSS e Javascript.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://tangerine-flan-82ef74.netlify.app/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://github.com/Ramom-Gomes/E-Comerce-de-pizzas">Github</a>
                    </div>
                </div>
             </div>
             <div className={styles.submain}>
                <div className={styles.projetos}>
                    <img className={styles.imagem} src={Urna} />
                    <p className={styles.informacoes}>
                        Urna Eletrõnica Feito com HTML, CSS e Javascript.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://wondrous-medovik-665d5c.netlify.app/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://github.com/Ramom-Gomes/Urna-Eletr-nica">Github</a>
                    </div>
                </div>
                <div className={styles.projetos}>
                    <img className={styles.imagem} src={List} />
                    <p className={styles.informacoes}>
                        Lista de tarefas feito com HTML, CSS e Javascript.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://clinquant-griffin-0f12fa.netlify.app/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://github.com/Ramom-Gomes/Todo-List">Github</a>
                    </div>
                </div>
                <div className={styles.projetos}>
                    <img className={styles.imagem} src={Calc} />
                    <p className={styles.informacoes}>
                        Calcualdora Feito com HTML, CSS e Javascript.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://coruscating-beignet-6dd434.netlify.app/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://github.com/Ramom-Gomes/Calculadora">Github</a>
                    </div>
                </div>
             </div>
             <div className={styles.submain}>
                <div className={styles.projetos}>
                    <img className={styles.imagem} src={Medi} />
                    <p className={styles.informacoes}>
                        Clone Medicenter feito com HTML e CSS.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://precious-haupia-c1e10d.netlify.app/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://github.com/Ramom-Gomes/Projeto-Medicenter">Github</a>
                    </div>
                </div>
                <div className={styles.projetos}>
                    <img className={styles.imagem} src={Star} />
                    <p className={styles.informacoes}>
                        Clone Starbucks feito com HTML e CSS.
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://teal-travesseiro-e495c8.netlify.app/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://github.com/Ramom-Gomes/Projeto-Starbucks">Github</a>
                    </div>
                </div>
                <div className={styles.projetos}>
                    <img className={styles.imagem} />
                    <p className={styles.informacoes}>
                        Carregando...
                    </p>
                    <div className={styles.links}>
                        <a className={styles.sites} target="_blank" href="https://www.linkedin.com/in/ramomgomes/">Demo</a>
                        <a className={styles.sites} target="_blank" href="https://www.linkedin.com/in/ramomgomes/">Github</a>
                    </div>
                </div>
             </div>
        </div>
    )
} 