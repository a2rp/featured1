import { Styled } from "./styled";

function AboutSection() {
    return (
        <Styled.Wrapper id="about">
            <div className="aboutTop">
                <span className="sectionIndex">02 / ABOUT</span>

                <p className="aboutIntro">
                    We are a digital studio focused on shaping ambitious ideas
                    into refined, useful and memorable experiences.
                </p>
            </div>

            <div className="aboutStatement">
                <h2>
                    Design with purpose.
                    <span>Technology with restraint.</span>
                    Experiences with impact.
                </h2>
            </div>

            <div className="aboutGrid">
                <div className="aboutCopy">
                    <p>
                        NEXUS° brings together strategy, interface design and
                        technology to create digital products that feel
                        considered at every level.
                    </p>

                    <p>
                        We believe the strongest digital experiences are not the
                        ones with the most effects. They are the ones where
                        every detail has a reason to exist.
                    </p>
                </div>

                <div className="statsGrid">
                    <div className="statItem">
                        <strong>12+</strong>
                        <span>Digital disciplines</span>
                    </div>

                    <div className="statItem">
                        <strong>100%</strong>
                        <span>Independent thinking</span>
                    </div>

                    <div className="statItem">
                        <strong>∞</strong>
                        <span>Room to evolve</span>
                    </div>

                    <div className="statItem">
                        <strong>01</strong>
                        <span>Standard: exceptional</span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
}

export default AboutSection;
