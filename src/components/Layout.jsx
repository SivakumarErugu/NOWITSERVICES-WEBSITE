import Header from "./partials/Header";
import Footer from "./partials/Footer";


const Layout = ({ children }) => {
    return (
        <div className='bg-white max-w-screen min-h-screen border-white'>
            <div>
                <header className='h-20 w-full'>
                    <Header />
                </header>

                <main>
                    {children}
                </main>
                <footer className="h-90 w-full">
                    <Footer />
                </footer>
            </div>

        </div>
    )
}

export default Layout