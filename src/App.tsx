import { Footer, Frame, HeaderNav, Main } from "./components";
import "./i18n";
import "./styles/index.css";

function App() {
    const html = document.getElementsByTagName("html")[0];
    if (
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !html.classList.contains("dark")
    ) {
        document.documentElement.classList.add("dark");
        console.log("messo dark");
    }

    return (
        <>
            <h2 className="absolute text-red-600 before:content-['start'] xs:before:content-['xs'] sm:before:content-['sm'] md:before:content-['md'] lg:before:content-['lg'] xl:before:content-['xl'] 2xl:before:content-['2xl']" />
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
