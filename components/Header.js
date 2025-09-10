'use client';
export default function Header() {
    return (
        <header style={{ textAlign: 'center', margin: '2rem 0' }}>
            <h1>Gabriel Gazal</h1>
            <nav style={{ marginTop: '1rem' }}>
                <a href="#about" style={{ margin: '0 1rem' }}>Sobre</a>
                <a href="#projects" style={{ margin: '0 1rem' }}>Projetos</a>
                <a href="#contact" style={{ margin: '0 1rem' }}>Contato</a>
            </nav>
        </header>
    )
}
