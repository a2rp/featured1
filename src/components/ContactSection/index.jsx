import {
    FiCodepen,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiStar,
    FiYoutube,
} from "react-icons/fi";
import { Styled } from "./styled";

const socialLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FiGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FiGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FiCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FiLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FiFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FiYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FiMail },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FiHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FiCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FiStar },
];

function ContactSection() {
    return (
        <Styled.Wrapper id="contact">
            <div className="contactGrid" />

            <div className="contactTop">
                <span className="sectionIndex">04 / CONTACT</span>
                <p className="contactIntro">
                    Have an ambitious product, idea or digital experience in mind? Let&apos;s build something that deserves attention.
                </p>
            </div>

            <div className="contactMain">
                <span className="contactEyebrow">Start a conversation</span>
                <a className="contactTitle" href="mailto:ash.ranjan09@gmail.com">
                    Let&apos;s create
                    <span>what comes next.</span>
                    <strong>↗</strong>
                </a>
            </div>

            <div className="contactDetails">
                <div className="contactDetail">
                    <span>Email</span>
                    <a href="mailto:ash.ranjan09@gmail.com">ash.ranjan09@gmail.com</a>
                </div>
                <div className="contactDetail">
                    <span>Studio</span>
                    <p>Independent digital experience studio</p>
                </div>
                <div className="contactDetail">
                    <span>Availability</span>
                    <p className="availability"><span className="availabilityDot" />Open for selected projects</p>
                </div>
            </div>

            <footer className="footer">
                <div className="footerBrand">
                    <a href="#home">NEXUS<span>°</span></a>
                    <p>Digital experiences for the next era.</p>
                </div>

                <nav className="footerLinks" aria-label="Social and support links">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            aria-label={label}
                            title={label}
                        >
                            <Icon aria-hidden="true" />
                        </a>
                    ))}
                </nav>

                <div className="footerBottom">
                    <span>
                        Copyright &copy; {new Date().getFullYear()} {" "}
                        <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">
                            Ashish Ranjan
                        </a>
                    </span>
                    <span>Built for focused digital experiences.</span>
                    <a href="#home" aria-label="Back to top" title="Back to top">↑</a>
                </div>
            </footer>
        </Styled.Wrapper>
    );
}

export default ContactSection;
