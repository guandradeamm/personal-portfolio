import Hero from "../components/Hero/Hero";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Acomplishments from "../components/Acomplishments/Acomplishments";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
