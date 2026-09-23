import { Styled } from "./styled";

function WorkSection() {
    return (
        <Styled.Wrapper id="work">
            <div className="workHeader">
                <div>
                    <span className="sectionIndex">01 / SELECTED WORK</span>

                    <h2>
                        Built for ideas
                        <span>that refuse to blend in.</span>
                    </h2>
                </div>

                <p>
                    A selection of digital products, interfaces and experimental
                    experiences created around clarity, detail and modern
                    technology.
                </p>
            </div>

            <div className="workGrid">
                <article className="projectCard projectLarge">
                    <div className="projectVisual visualOne">
                        <div className="projectNumber">01</div>

                        <div className="interfaceWindow">
                            <div className="windowHeader">
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="windowContent">
                                <div className="windowSidebar" />

                                <div className="windowMain">
                                    <div className="windowLine windowLineLarge" />
                                    <div className="windowLine" />
                                    <div className="windowLine windowLineShort" />

                                    <div className="windowCards">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span className="projectBadge">Digital Product</span>
                    </div>

                    <div className="projectInfo">
                        <div>
                            <span className="projectMeta">
                                Product Design / Development
                            </span>

                            <h3>Orbital Intelligence</h3>
                        </div>

                        <span className="projectArrow">↗</span>
                    </div>
                </article>

                <article className="projectCard">
                    <div className="projectVisual visualTwo">
                        <div className="projectNumber">02</div>

                        <div className="sphere">
                            <div className="sphereRing ringOne" />
                            <div className="sphereRing ringTwo" />
                            <div className="sphereCore" />
                        </div>

                        <span className="projectBadge">Adaptive Experience</span>
                    </div>

                    <div className="projectInfo">
                        <div>
                            <span className="projectMeta">
                                Emerging Interfaces
                            </span>

                            <h3>Neural Field</h3>
                        </div>

                        <span className="projectArrow">↗</span>
                    </div>
                </article>

                <article className="projectCard">
                    <div className="projectVisual visualThree">
                        <div className="projectNumber">03</div>

                        <div className="monolith">
                            <span>N</span>
                        </div>

                        <div className="monolithShadow" />

                        <span className="projectBadge">Brand System</span>
                    </div>

                    <div className="projectInfo">
                        <div>
                            <span className="projectMeta">
                                Identity / Digital
                            </span>

                            <h3>Monolith Systems</h3>
                        </div>

                        <span className="projectArrow">↗</span>
                    </div>
                </article>
            </div>
        </Styled.Wrapper>
    );
}

export default WorkSection;
