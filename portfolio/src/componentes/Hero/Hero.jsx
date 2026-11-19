import Icone from "../Icone/Icone";


function Hero({nome, cargo, resumo, cidade }) {
    return (
        <section className="hero" id="topo">
            <div className="container hero__linha">
                <div className="hero__texto">
                    <p className="hero__status">em busca de um emprego</p>
                    <h1>
                        {nome}
                        <span>.</span>
                    </h1>
                    <p className="hero__cargo">{cargo}</p>
                    <p className="hero__resumo">{resumo}</p>

                    <div className="hero__acoes">
                        <a className="botao-primario" href="#projetos">
                            Ver projetos <Icone nome="seta" tamanho={18} />
                        </a>
                        <a className="botao boatao--contorno" href="#conteudos">
                            Falar comigo
                        </a>
                    </div>
                </div>

                <div className="janela" role="img" aria-label={`Trecho do código com os dadso de $ {nome}`}>
                    <div className="janela__codigo">
                        <span className="janela__ponto"></span>
                        <span className="janela__ponto"></span>
                        <span className="janela__ponto"></span>
                        <span className="janela__nome">perfil.js</span>
                    </div>
                    <pre className="janela__odigo">
                        <code>
                            <span className="cod-palavra">export const</span>={'{'}
                                {'\n'}nome: <span className="cod-texto">'{nome}'</span>
                                {'\n'}cidade: <span className="cod-texto">'{cidade}'</span>
                                {'\n'}foco: <span className="cod-texto">'React'</span>
                                {'\n'}
                            {'}'}
                        </code>

                    </pre>
                </div>
            </div>
        </section>
    )
}

export default Hero