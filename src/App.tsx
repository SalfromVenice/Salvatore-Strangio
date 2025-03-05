import { Footer, Frame, HeaderNav, Main } from "./components";
import "./i18n";
import { setPreferedColorScheme } from "./utils/theme-helpers";

function App() {
    setPreferedColorScheme();

    return (
        <>
            <div className="h-full min-h-screen max-w-5xl overflow-hidden bg-primary-light shadow-light sm:mx-auto sm:my-12 sm:h-fit sm:w-4/5 sm:rounded-xl dark:bg-primary-dark dark:shadow-dark">
                <HeaderNav />
                <div className="relative h-full min-h-screen px-12 pt-30 pb-24 xs:pb-32 sm:px-14 md:px-16">
                    <Frame />
                    <Main />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
