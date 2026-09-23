import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./App.styled";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ContactSection from "./components/ContactSection";

function App() {
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowGoToTop(window.scrollY > 360);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            {showGoToTop && (
                <Styled.GoToTop
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                >
                    <FiArrowUp aria-hidden="true" />
                </Styled.GoToTop>
            )}
        </Styled.Wrapper>
    );
}

export default App;
