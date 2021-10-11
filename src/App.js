import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import Home from "./Components/Home";
import AboutUs from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import TermsAndConditions from "./Components/Footer/subComponents/TermsAndConditions";
import PrivacyPolicy from "./Components/Footer/subComponents/PrivacyPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div class='body'>
      <Router>
        <TopNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" exact component={AboutUs} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/tc" exact component={TermsAndConditions} />
          <Route path="/pp" exact component={PrivacyPolicy} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
