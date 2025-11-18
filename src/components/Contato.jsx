export default function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="container">
            <header className="contato__cabeca">
                <span className="eyebrow">Vamos conversar</span>
                <h2 className="contato__titulo">Contato</h2>
            <p className="contato__sub">Você pode entrar em contato comigo através do email:</p>
            </header>
            <div className="contato__grid">
                <div className="contato__infos">
                    <p><strong>Email:</strong> seuemail@exemplo.com</p>
                    <p><strong>Linkedin:</strong> Linkedin.com/in/perfi</p>
                    <p><strong>Github</strong> github.com/perfil</p>
                    <p><strong>Whatsapp</strong>+55 11 99999-9999</p>
                    <div className="contato__endereco">
                        <p><strong>Endereço:</strong>Exemplo, 123 - Bairro Centro. Cidade/UF - Brasil</p>
                        </div>
                    </div>
                    <form 
                    className="contato__form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Mensagem enviada com sucesso")
                    }}>
                        <div className="campo">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" placeholder="Seu Nome" required/>
                        </div>
                        <div className="campo">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Seu Email" required/>
                        </div>
                        <div className="campo">
                            <label htmlFor="assunto">Assunto</label>
                            <input type="text" id="assunto" name="assunto" placeholder="Assunto da mensagem" required/>
                        </div>
                        <div className="campo">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem aqui..." required></textarea>
                        </div>
                            <button type="submit" className="botao botao--primario">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    );
};