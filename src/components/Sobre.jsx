export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
        <div className="container sobre__conteudo">
          <header className="sobre__cabeca">
            <span className="eyebrow">Quem sou</span>
            <h2 className="sobre__titulo">Sobre Mim</h2>
          </header>
          <div className="sobre__texto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Amet aliquam delectus 
            doloremque quam recusandae animi consectetur, 
            expedita ab tempore suscipit ducimus 
            commodi nostrum porro culpa maxime. Suscipit officia a alias.
        </div>
        <ul className="sobre__infos">
          <li><span><strong>Foco</strong><p>Front-end - React</p></span></li>
          <li><span><strong>Local</strong><p>Brasil - Remoto / Presencial</p></span></li>
          <li><span><strong>Stack</strong><p>HTML, CSS, JS, React</p></span></li>
          <li><span><strong>Estudando</strong><p>Acessibilidade e UI</p></span></li>
        </ul>
      </div>
    </section>
  );
}
