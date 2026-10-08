import Header from './Header'
import './App.css'
import Presentation from './Presentation';
import Parcours from './Parcours';
import Competences from './Competences';
import Formation from './Formation';
import Experiences from './Experiences';
import Projets from './Projets';
import Contact from './Contact';
import Reveal from './Reveal';

function App() {
  return (
    <>
      <Header />
      <Presentation />

      <Reveal><Parcours /></Reveal>
      <Reveal><Competences /></Reveal>
      <Reveal><Formation id="formation"/></Reveal>
      <Reveal><Experiences /></Reveal>
      <Reveal><Projets /></Reveal>
      <Reveal><Contact /></Reveal>
    </>
  );
}

export default App
