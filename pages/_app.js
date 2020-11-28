import "../styles/scss/styles.scss";
import { Preloader, Placeholder } from "react-preloading-screen";
import Loader from "../components/helpers/Loader";
import GoTop from "../components/helpers/GoTop";
function MyApp({ Component, pageProps }) {
  return (
    <Preloader>
      <Component {...pageProps} />
      <GoTop scrollStepInPx="50" delayInMs="16.66" />

      <Placeholder>
        <Loader />
      </Placeholder>
    </Preloader>
  );
}

export default MyApp;
