const projetos = [
    {
        titulo: "Landing Page Pessoal",
        descricao: "Uma landing page responsiva para apresentar meu portfólio e habilidades como desenvolvedor front-end.",
        imagem: "/projeto1.png",
        site: "https://meu-portfolio.com",
        codigo: "https//github.com/user/projeto"
    },
     {
        titulo: "Catálogo de Filmes",
        descricao: "Uma landing page responsiva para apresentar meu portfólio e habilidades como desenvolvedor front-end.",
        imagem: "/projeto1.png",
        site: "https://meu-portfolio2.com",
        codigo: "https//github.com/user/projeto2"
    },
    {
        titulo: "Dashboard financeiro",
        descricao: "Uma landing page responsiva para apresentar meu portfólio e habilidades como desenvolvedor front-end.",
        imagem: "/projeto1.png",
        site: "https://meu-portfolio2.com",
        codigo: "https//github.com/user/projeto3"
    }
];

export default function Projetos() {
    return (
        <section className="projetos" id="projetos">
        <div className="container">
            <header className="projetos__cabeca">
                <span className="eyebrow">Portifólio</span>
                <h2 className="projetos__titulo">Projetos</h2>
            </header>
            <div className="projetos__grid">
                {projetos.map((p) => (
                    <article key={p.titulo} className="projeto">
                        <div className="projeto__tumb">
                        <img src={p.imagem} alt={`Imagem do projeto ${p.titulo}`}/>
                        </div>
                        <div className="projeto__corpo">
                            <h3 className="projeto__titulo">{p.titulo}</h3>
                            <p className="projeto__descricao">{p.descricao}</p>
                            <div className="projeto__acoes">
                                <a
                                className="botao botao--primario"
                                href={p.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Abrir site do projeto ${p.titulo}`}
                                >
                                    Ver Site
                                </a>
                                <a
                                className="botao"
                                href={p.codigo}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Abrir site do projeto ${p.titulo}`}
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
        </section>
    );
};