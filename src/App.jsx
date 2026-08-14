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
        </Styled.Wrapper>
    );
}

export default App;
