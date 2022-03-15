import React from "react";
import { Link } from "react-router-dom";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((r) => setProdutos(r));
  }, []);

  if (produtos === null) return null;
  return (
    <div className={styles.container + " animeLeft"}>
      {produtos.map((item) => {
        return (
          <Link to={`produto/${item.id}`}>
            <img
              className={styles.imagem}
              src={item.fotos[0].src}
              alt={item.nome}
            />
            <h1 className={styles.titulo}>{item.nome}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Produtos;
