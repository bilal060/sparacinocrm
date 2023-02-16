import './App.css';
// import MainLayout from './layouts';
// import './assets/css/style.css'
import "./index.css"
import "@fontsource/montserrat"; // Defaults to weight 400.
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/routes';

function App() {
  return (
    <BrowserRouter basename={''}>
      {/* <MainLayout> */}
        <AppRoutes/>
      {/* </MainLayout> */}
    </BrowserRouter>
  );
}

export default App;
