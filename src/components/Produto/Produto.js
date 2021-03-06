import React from "react";
import { useParams } from "react-router";
import Head from "../Head/Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    async function fetchParams(url) {
      const link = await fetch(url);
      const response = await link.json();
      setProduto(response);
      console.log(response);
    }
    fetchParams(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [params.id]);

  if (produto === null) return <div className="loading"></div>;
  return (
    <div className={styles.container + " animeLeft"}>
      <Head title={produto.nome} description={produto.descricao} />
      <div className={styles.produto}>
        <img className={styles.imagem} src={produto.fotos[0].src} alt="" />
        <span className={styles.preco}>R$ {produto.preco}</span>
      </div>

      <div>
        <h1>{produto.nome}</h1>
        <p className={styles.descricao}>{produto.descricao}</p>
        <button className={styles.btn}>Comprar</button>
      </div>
    </div>
  );
};

export default Produto;
