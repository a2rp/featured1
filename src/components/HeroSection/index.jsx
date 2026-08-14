import { Styled } from "./styled";

function HeroSection() {
    return (
        <Styled.Wrapper id="home">
            <div className="heroGrid" />
            <div className="heroGlow glowOne" />
            <div className="heroGlow glowTwo" />

            <div className="heroContent">
                <div className="eyebrow">
                    <span className="statusDot" />
                    Independent digital studio · 2026
                </div>

                <h1>
                    We design
                    <span>interfaces for</span>
                    what comes next.
                </h1>

                <div className="heroBottom">
                    <p>
                        NEXUS° creates high-end digital experiences for
                        ambitious products, emerging technology and
                        future-facing brands.
                    </p>

                    <a className="primaryCta" href="#work">
                        <span>Explore our work</span>
                        <span className="arrow">↘</span>
                    </a>
                </div>
            </div>

            <div className="visual" aria-hidden="true">
                <div className="orbit orbitOuter" />
                <div className="orbit orbitMiddle" />
                <div className="orbit orbitInner" />

                <div className="core">
                    <span>N</span>
                </div>

                <span className="orbitPoint pointOne" />
                <span className="orbitPoint pointTwo" />
                <span className="orbitPoint pointThree" />
            </div>

            <div className="heroMeta">
                <span>Strategy</span>
                <span>Design</span>
                <span>Technology</span>
                <span>Experience</span>
            </div>

            <a className="scroll" href="#work">
                Scroll to explore
                <span>↓</span>
            </a>
        </Styled.Wrapper>
    );
}

export default HeroSection;
