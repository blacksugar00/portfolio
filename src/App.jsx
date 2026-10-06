import Header from './Header'
import './App.css'
import Presentation from './Presentation';

function App() {
    return(
    <>
     <div className="flex-col flex gap-7">
        <Header />
        <Presentation />
      </div>
    </>
    );
}

export default App
