import './styles/main.css';
import vk from  './img/icons/vk.svg'
import github from './img/icons/gitHub.svg'
import githubBlack from './img/icons/gitHub-black.svg'
import instagram from './img/icons/instagram.svg'
import linkedin from './img/icons/linkedIn.svg'
import twitter from './img/icons/twitter.svg'
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
function App() {
  return (
    <div className="App">
        <Navbar />

        {/*<Home />*/}
        <Projects />
        {/*<Contacts />*/}

        <Footer />
    </div>
  );
}

export default App;
