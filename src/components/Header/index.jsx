import { Styled } from "./styled";

function Header() {
    return (
        <Styled.Wrapper>
            <a className="brand" href="#home" aria-label="NEXUS home">
                NEXUS<span>°</span>
            </a>

            <nav className="nav" aria-label="Main navigation">
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#capabilities">Capabilities</a>
                <a href="#contact">Contact</a>
            </nav>

            <a className="headerCta" href="#contact">
                Start a project
                <span>↗</span>
            </a>
        </Styled.Wrapper>
    );
}

export default Header;
