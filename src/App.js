import Brief from "./Components/Brief";
import Navigator from "./Components/Navigator";
import Project from "./Components/Project";
import Skills from "./Components/Skills.js"
import Contact from "./Components/Contact.js"
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'
import './App.css'
import LandingPage from "./Components/LandingPage";
import Feducation from "./Components/Feducation";
import pp from "./Components/PP";
function App() {
  return (
    <>
    <Router>
     <Navigator />
      <Switch>
        <Route path='/brief' exact component={Brief} />
        <Route path='/'  exact component={LandingPage} />
        <Route path='/personality' exact component={pp} />
        <Route path='/Feducation' exact component={Feducation} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/Project' exact component={Project} />
        <Route path='/Skills' exact component={Skills} />
      </Switch>

    </Router>
    </>
  );
}
export default App;
