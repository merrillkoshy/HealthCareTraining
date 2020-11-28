import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="h-screen ">{children}</main>

      {/* <div className="container mx-auto">{children}</div> */}
      <Footer />
    </div>
  );
};
export default Layout;
