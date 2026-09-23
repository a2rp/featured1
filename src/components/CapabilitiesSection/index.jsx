import { Styled } from "./styled";

const capabilities = [
    {
        number: "01",
        title: "Strategy",
        description:
            "Product direction, positioning, digital systems and experience planning for ambitious ideas.",
        tags: ["Research", "Positioning", "Product Direction"],
    },
    {
        number: "02",
        title: "Interface Design",
        description:
            "High-end digital interfaces focused on clarity, hierarchy, usability and visual precision.",
        tags: ["UI", "UX", "Design Systems"],
    },
    {
        number: "03",
        title: "Development",
        description:
            "Modern frontend experiences built with performance, responsiveness and maintainability in mind.",
        tags: ["React", "Interaction", "Frontend"],
    },
    {
        number: "04",
        title: "Experiments",
        description:
            "Explorations around emerging interfaces, motion, and future-facing technology.",
        tags: ["Interfaces", "Motion", "Creative Tech"],
    },
];

function CapabilitiesSection() {
    return (
        <Styled.Wrapper id="capabilities">
            <div className="sectionHeader">
                <span className="sectionIndex">03 / CAPABILITIES</span>

                <div className="headingBlock">
                    <h2>
                        From first thought
                        <span>to final interaction.</span>
                    </h2>

                    <p>
                        We combine strategy, design and technology to shape
                        digital experiences as one connected system.
                    </p>
                </div>
            </div>

            <div className="capabilityList">
                {capabilities.map((capability) => (
                    <article className="capabilityItem" key={capability.number}>
                        <span className="capabilityNumber">
                            {capability.number}
                        </span>

                        <h3>{capability.title}</h3>

                        <p>{capability.description}</p>

                        <div className="capabilityTags">
                            {capability.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>

                        <div className="capabilityArrow">↗</div>
                    </article>
                ))}
            </div>
        </Styled.Wrapper>
    );
}

export default CapabilitiesSection;
