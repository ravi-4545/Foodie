import Catogaries from "./components/Catogaries";
import Delivery from "./components/Delivery";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPics from "./components/TopPics";


function App() {
  return (
    <div className="App">
     <TopNav/>
     <Feature/>
     <Delivery/>
     <TopPics/>
     <Meals/>
     <Catogaries/>
     <NewsLetter/>
     <Footer/>
    </div>
  );
}

export default App;
