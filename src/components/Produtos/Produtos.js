import React from "react";
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
    <div className={styles.container}>
      {produtos.map((item) => {
        return (
          <div>
            <img src={item.fotos[0].src} alt={item.nome} />
            <h1>{item.nome}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Produtos;
