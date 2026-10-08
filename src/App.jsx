import Header from './Header'
import './App.css'
import Presentation from './Presentation';
import Parcours from './Parcours';
import Competences from './Competences';
function App() {
    return(
    <>
     <div className="">
        <Header />
        <Presentation />
        <Parcours />
        <Competences/>
      </div>
    </>
    );
}

export default App
