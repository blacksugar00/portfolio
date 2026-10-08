import Header from './Header'
import './App.css'
import Presentation from './Presentation';
import Parcours from './Parcours';
import Competences from './Competences';
import Formation from './Formation';
import Experiences from './Experiences';
import Projets from './Projets';
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
      </div>
    </>
    );
}

export default App
