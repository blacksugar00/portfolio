import Header from './Header'
import './App.css'
import Presentation from './Presentation';
import Parcours from './Parcours';
import Competences from './Competences';
import Formation from './Formation';
import Experiences from './Experiences';
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
      </div>
    </>
    );
}

export default App
