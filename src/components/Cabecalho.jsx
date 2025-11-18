export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className="container cabecalho__conteudo">
                <a href="#" className="cabecalho__logo"> LOGO </a>

                <nav className="menu">
                    <a href="#destaque" className="menu__item">Início</a>
                    <a href="#sobre" className="menu__item">Sobre</a>
                    <a href="#habilidades" className="menu__item">Habilidades</a>
                    <a href="#projetos" className="menu__item">Projetos</a>
                    <a href="#contato" className="menu__item">Contato</a>
                </nav>

                <a href="/cv.pdf" className="botao botao--primario" download>
                    Baixar CV
                </a>
                </div>
        </header>
    );
}
