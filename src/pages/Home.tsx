import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import PlatformModules from '../components/PlatformModules';
import ProofOfConcept from '../components/ProofOfConcept';
import IncubatorGoals from '../components/IncubatorGoals';
import Roadmap from '../components/Roadmap';
import Collaborators from '../components/Collaborators';
import Members from '../components/Members';
// import Contact from '../components/Contact';

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
      {/* <Founder /> */}
      <Members />
      <Collaborators />
      {/* <Contact /> */}
      
    </>
  );
}
