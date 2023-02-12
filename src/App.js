import './Css/style.css';
// import Poeple from './pages/Poeple';
import PoepleMainPage from './pages/Poeple/Poeple-Main';
import SearchPropertyPage from './pages/Properties/Search-Property';
import SearchProperty2Page from './pages/Properties/Search-Property2';
// import HomePage from './pages/Poeple/Home';


function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <Poeple /> */}
      {/* <PoepleMainPage /> */}
      <SearchPropertyPage/>
      {/* <SearchProperty2Page /> */}
    </div>
  );
}

export default App;
