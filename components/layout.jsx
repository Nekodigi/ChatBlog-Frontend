import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="page">
          <div className="container">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}