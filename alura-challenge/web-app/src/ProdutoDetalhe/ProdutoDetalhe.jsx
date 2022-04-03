import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import '../css/ProdutoDetalhes/index.css';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { busca } from "../Api/Api";

export default function ProdutoDetalhe() {
    const { id } = useParams()
    const { url } = useParams()
    const [produto, setProduto] = useState({})
    useEffect(() => {
        busca(`/${url}/${id}`, setProduto)

    }, [id, url])
    return (
        <>
            <Cabecalho />
            <section key={produto.id} className="produto__detalhes">
                <img src={produto.img} alt="imagem do produto xyz" className="produto__detalhes--img" />
                <h2 className="produto__detalhes--titulo">{produto.titulo}</h2>
                <span className="produto__detalhes--preco">{produto.preco}</span>
                <p className="produto__detalhes--descricao">{produto.descricao}</p>

            </section>
            <section className="produtos">
                <h2 className="produtos__titulo">Produtos Similares</h2>
                <Link to="/todosprodutos" className="produtos__button">Ver tudo <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.666341 6.66665L8.77967 6.66665L5.05301 10.3933L5.99967 11.3333L11.333 5.99998L5.99968 0.666646L5.05968 1.60665L8.77968 5.33331L0.666341 5.33331L0.666341 6.66665Z"
                        fill="#2A7AE4" />
                </svg>
                </Link>

                <section className="produtos">
                    <ProdutosSimilares url={url} quantidade={4} />
                </section>
            </section>
            <Rodape />
        </>
    );
}


function ProdutosSimilares({ url, quantidade }) {
    const [produtos, setProdutos] = useState([])
    useEffect(() => {
        busca(url, setProdutos)

    }, [url])
    return (<section className="produtos">

        {produtos.slice(0, quantidade).map((produto) => {
            return (
                <Link key={produto.id} className="produto" to={`/produtodetalhe/${url}/${produto.id}`}>
                    <img className="produto__img" src={produto.img} alt="imagem do produto" />
                    <p className="produto__titulo">{produto.titulo}</p>
                    <p className="produto__preco">R${produto.preco}</p>
                    <button className="produto__detalhes">Ver Produto</button>
                </Link>)
        })}
    </section>
    )
}