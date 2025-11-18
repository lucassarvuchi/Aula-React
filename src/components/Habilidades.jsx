const skills = [
    { nome: 'JavaScript', level: 'Avançado' },
    { nome: 'React', level: 'Intermediário' },
    { nome: 'HTML & CSS', level: 'Avançado' },
    { nome: 'Node.js', level: 'Básico' },
    { nome: 'Java', level: 'Intermediário' },
    { nome: 'C#', level: 'Intermediário' },
    { nome: 'Phyton', level: 'Intermediário' },
    { nome: 'Angular', level: 'Intermediário' },
    { nome: 'MySql', level: 'Intermediário' },
    { nome: 'Git', level: 'Intermediário' },
    { nome: 'TypeScript', level: 'Intermediário' },
];
const tecnologias = [
    'JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 
    'Java', 'C#', 'Python', 'Angular', 
    'MySQL', 'Git', 'TypeScript'
];

export default function Habilidades() {
    return (
        <section className="habilidades" id="habilidades">
        <div className="container">
            <header className="habilidades__cabeca">
                <span className="eyebrow">O que eu sei fazer</span>
                <h2 className="habilidades__titulo">Habilidades</h2>
                </header>
                <ul className="Habilidades_barras" arias-label="Barras de proficiência">
                    {skills.map((s) => (
                        <li key={s.nome}>
                            <span className="Habilidade">{s.nome}</span>
                            <div className="habilidade__topo">
                                <span className="habilidade__nome">{s.nome}
                                </span>
                                <span className="habilidade__percentual" aria-hidden="true">{s.level}%  
                                </span>
                            </div>
                            <div className="habilidade__bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={s.nivel} aria-label={`Proficência em ${s.nome}:${s.nivel}%`}>
                                <div className="habilidade__fill" style={{ width: `${s.nivel}%` }}>     
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="habilidades__tecnologias">
                    {tecnologias.map((t) => (
                        <span key={t} className="tech">{t}</span>
                    ))}
                </div>
        </div>
        </section>

    );
}