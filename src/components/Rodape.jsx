export default function Rodape() {
    const anoAtual = new Date().getFullYear();
    return (
        <footer className="rodape">
           <div className="container rodape__conteudo">
            <p className="rodape__texto">{anoAtual}<strong> Seu Nome. </strong>Todos os direitos reservados.</p>
            <ul className="rodape__links">
                <li><a href="https://github.com/user" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://linkedin.com/in/user" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
           </div>
        </footer>
    );
}