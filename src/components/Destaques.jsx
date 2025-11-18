export default function Destaques() {
    return (
        <section className="destaques" id="destaque">
            <div className="container destaque__conteudo">
                <div className="destaque__texto">
                    <p className="destaque__intro">Desenvolvedor Front-End</p>
                    <h1 className="destaque__nome">Olá, eu sou Lucas Sarvuchi</h1>
                    <p className="destaque__descricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum porro autem quibusdam accusamus aut fuga, harum consequatur, rem officia dolores nobis aperiam praesentium excepturi inventore! Magnam dicta beatae repellendus rem!
                    </p>
                        <div className="destaque__botoes">
                <a href="#projetos" className="botao botao--primario destaque__botao--projetos">Ver Projetos</a>
                <a href="#" className="botao" target="_blank">GitHub</a>
            </div>
                </div>
                <div className="destaque__foto">
                    <img src="/profile.jpg" alt="Foto de Lucas Sarvuchi" className="destaque__imagem"/>
                </div>
            </div>
            </section>

    );
}