import React from 'react';

import ContentAdder from './ContentAdder';
import Contents from './Contents';
import ContentViewer from './ContentViewer';
import { Route, Switch, withRouter } from 'react-router-dom';

const style = {
   position: 'relative',
   marginTop: '72px',

}

const ContentContainer = () => {
  return (
    <div style={style}>
      <Switch>
        <Route path={'/'} exact component={Contents} />
        <Route path={'/content/:id'} exact component={ContentViewer} />
      </Switch>

    </div>
  );
}

export default withRouter( ContentContainer );
