import Hero from "../components/Hero/Hero";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
