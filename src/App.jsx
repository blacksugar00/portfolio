import Header from './Header'
import './App.css'
import Presentation from './Presentation';
import Parcours from './Parcours';
import Competences from './Competences';
import Formation from './Formation';
import Experiences from './Experiences';
import Projets from './Projets';
import Contact from './Contact';
function App() {
    return(
    <>
     <div className="">
        <Header />
        <Presentation />
        <Parcours />
        <Competences/>
        <Formation/>
        <Experiences/>
        <Projets/>
        <Contact/>
      </div>
    </>
    );
}

export default App
