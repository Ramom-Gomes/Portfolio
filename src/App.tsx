import styles from './App.module.css';
import {TodasRotas} from './Rotas/TodasRotas';
import Foto from './imagens/Foto.jpeg';
import {Link} from 'react-router-dom';
import * as C from "./Teste";
import { useState } from 'react';
import Menu from './imagens/menuportifolio2.jpg';


function App() {
  let [tamanho, SetTamanho] = useState(false);

  const TrocaCor = () => {
    SetTamanho(!tamanho);
  }

  return (
    <div className={styles.main}>
      <C.Menu bg={tamanho ? "flex" : "none"}> 
        <img className={styles.imagem} src={Foto} width={200} />
        <div className={styles.menu2}>
          <Link className={styles.links} to="/">INICIO</Link>
          <Link className={styles.links} to="/sobre">QUEM SOU</Link>
          <Link className={styles.links} to="/projetos">PROJETOS PESSOAIS</Link>
          <Link className={styles.links} to="/contato">CONTATO</Link>
        </div>
      </C.Menu>
      <div className={styles.MenuMain}>
        <img src={Menu} onClick={TrocaCor} className={styles.MenuImagem} />
      </div>
      <TodasRotas/>
    </div>
  )
}

export default App
