//Displays content and side panel
import React from 'react';

import NewsContainer from './News/NewsContainer'
import ContentContainer from './Content/ContentContainer'

const style = {
   marginTop: '72px',
   border: '1px solid #eee',
   padding: '10px',
   display: 'flex',
   zIndex: '100'
}


const Dashboard = () => {
  return (
    <div style={style}>
      <ContentContainer />
      <NewsContainer />
    </div>
  );
}

export default Dashboard;


/*
          <Route path="/content/country/costarica" component={CostaRica} />

          <Route path="/content/type/slang" component={Slang} />

          <Route path="/content/difficulty/easiest" component={Easiest} />

          <Route path="/content/rating/highest" component={HighestRatedContent} />

          <Route path="/content/date/newest" component={HighestRatedContent} />
*/
