import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import PlatformModules from '../components/PlatformModules';
import ProofOfConcept from '../components/ProofOfConcept';
import IncubatorGoals from '../components/IncubatorGoals';
import Roadmap from '../components/Roadmap';
import Founder from '../components/Founder';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <PlatformModules />
      <ProofOfConcept />
      <IncubatorGoals />
      <Roadmap />
      <Founder />
      <Contact />
    </>
  );
}
