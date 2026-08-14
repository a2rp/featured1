import { Styled } from "./styled";

const socialLinks = [
    {
        label: "Portfolio",
        href: "https://www.ashishranjan.net",
    },
    {
        label: "GitHub",
        href: "https://github.com/a2rp",
    },
    {
        label: "CodePen",
        href: "https://codepen.io/ash1198",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
    },
    {
        label: "Buy Me A Coffee",
        href: "https://buymeacoffee.com/a2rp",
    },
    {
        label: "Patreon",
        href: "https://patreon.com/a2rp",
    },
];

function ContactSection() {
    return (
        <Styled.Wrapper id="contact">
            <div className="contactGrid" />

            <div className="contactTop">
                <span className="sectionIndex">04 / CONTACT</span>

                <p className="contactIntro">
                    Have an ambitious product, idea or digital experience in
                    mind? Let&apos;s build something that deserves attention.
                </p>
            </div>

            <div className="contactMain">
                <span className="contactEyebrow">Start a conversation</span>

                <a
                    className="contactTitle"
                    href="mailto:ash.ranjan09@gmail.com"
                >
                    Let&apos;s create
                    <span>what comes next.</span>
                    <strong>↗</strong>
                </a>
            </div>

            <div className="contactDetails">
                <div className="contactDetail">
                    <span>Email</span>

                    <a href="mailto:ash.ranjan09@gmail.com">
                        ash.ranjan09@gmail.com
                    </a>
                </div>

                <div className="contactDetail">
                    <span>Studio</span>
                    <p>Independent digital experience studio</p>
                </div>

                <div className="contactDetail">
                    <span>Availability</span>

                    <p className="availability">
                        <span className="availabilityDot" />
                        Open for selected projects
                    </p>
                </div>
            </div>

            <footer className="footer">
                <div className="footerBrand">
                    <a href="#home">
                        NEXUS<span>°</span>
                    </a>

                    <p>Digital experiences for the next era.</p>
                </div>

                <div className="footerLinks">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{link.label}</span>
                            <span>↗</span>
                        </a>
                    ))}

                    <a href="mailto:ash.ranjan09@gmail.com">
                        <span>Email</span>
                        <span>↗</span>
                    </a>
                </div>

                <div className="footerBottom">
                    <span>© 2026 NEXUS°</span>

                    <span>
                        Designed & developed by{" "}
                        <a
                            href="https://www.ashishranjan.net"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </span>

                    <a href="#home">Back to top ↑</a>
                </div>
            </footer>
        </Styled.Wrapper>
    );
}

export default ContactSection;
