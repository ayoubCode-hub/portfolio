import { Accueil } from "./component/Acceuil";
import { Competences } from "./component/competences";
import { Contacts } from "./component/Contacts";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import { Projets } from "./component/Projets";
import { A_propos } from "./component/Propos";
function App() {
  return (
    <>
      <Navbar/>
      <Accueil/>
      <A_propos/>
      <Competences/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
