import { Styled } from "./App.styled";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ContactSection from "./components/ContactSection";

function App() {
    return (
        <Styled.Wrapper>
            <Header />

            <main>
                <HeroSection />
                <WorkSection />
                <AboutSection />
                <CapabilitiesSection />
                <ContactSection />
            </main>
            <Styled.Footer>
                Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a>
                <nav aria-label="Footer links"><a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://codepen.io/ash1198" target="_blank" rel="noopener noreferrer">CodePen</a><a href="mailto:ash.ranjan09@gmail.com">Email</a><a href="https://a2rp-donation-page.netlify.app/" target="_blank" rel="noopener noreferrer">Support</a><a href="https://buymeacoffee.com/a2rp" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a><a href="https://patreon.com/a2rp" target="_blank" rel="noopener noreferrer">Patreon</a></nav>
            </Styled.Footer>
        </Styled.Wrapper>
    );
}

export default App;
