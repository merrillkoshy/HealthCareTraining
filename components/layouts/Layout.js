import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
