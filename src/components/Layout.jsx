import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Layout = ({ children }) => {
    return (
        <div className="bg-white h-screen flex flex-col overflow-hidden">

            {/* HEADER — stays in place (normal flow) */}
            <header className=" w-full shrink-0">
                <Header />
            </header>

            {/* ONLY THIS PART SCROLLS */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth
          [&::-webkit-scrollbar]:w-0 h-5
          [&::-webkit-scrollbar]:bg-transparent
          scrollbar-none">
                <main>
                    {children}
                </main>

                <footer className="w-full">
                    <Footer />
                </footer>
            </div>

        </div>
    );
};

export default Layout;
