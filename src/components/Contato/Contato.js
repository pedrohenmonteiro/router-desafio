import React from "react";
import styles from "./Contato.module.css";
import foto from "../../img/contato.jpg";

const Contato = () => {
  return (
    <div className={styles.container + " animeLeft"}>
      <img src={foto} alt="Contato" />

      <div>
        <h1 className={styles.titulo}>Entre em contato.</h1>
        <ul className={styles.lista}>
          <li>pedro@contato.com</li>
          <li>(43)99999-9999</li>
          <li>Rua Ali Perto, 123</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
