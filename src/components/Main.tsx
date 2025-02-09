import {
    AboutMeSection,
    ContactsSection,
    LangSection,
    WelcomeSection,
} from "./sections";

export const Main = () => {
    return (
        <main className="h-full space-y-12 sm:mx-auto sm:space-y-24">
            <WelcomeSection />
            <AboutMeSection />
            <LangSection />
            <ContactsSection />
        </main>
    );
};
