import Layout from "../components/layouts/Layout";
import HeroSlider from "../components/sliders/HeroSlider";
export default function IndexPage() {
  return (
    <Layout>
      <HeroSlider />
      {/* <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
      </div> */}
    </Layout>
  );
}
