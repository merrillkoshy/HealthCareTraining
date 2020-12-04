import Layout from "../components/layouts/Layout";
import AboutContent from "../components/content/AboutContent";
import PageHeaders from "../components/header/PageHeaders";

const About = () => {
  return (
    <Layout>
      <PageHeaders title={"About"} />
      <AboutContent />
      {/* <TeamTwo /> */}
      {/* <CtaCard /> */}
      {/* <FeedbackTwo />
               <Partner />
               <Platform /> */}
    </Layout>
  );
};

export default About;
