//This will be more about react (the rendering layer of the application - react router)
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Landing = () => <h2>Landing</h2>
const Dashboard = () => <h2>Dashboard</h2>
const ContentContainer = () => <h2>Content</h2>
const NewspanelContainer = () => <h2>Newspanel</h2>

const App = () => {
  return (
    <div> //this div is only for CSS//
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />

          <Route path="/content/country/costarica" component={CostaRica} />

          <Route path="/content/type/slang" component={Slang} />

          <Route path="/content/difficulty/easiest" component={Easiest} />

          <Route path="/content/rating/highest" component={HighestRatedContent} />

          <Route path="/content/date/newest" component={HighestRatedContent} />


        </div>
      </BrowserRouter>
    </div>
  );
};


export default App;
