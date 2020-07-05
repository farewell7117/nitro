import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Root as RootContainer } from './containers/root';

const render = (root: React.ReactElement): void => {
  ReactDOM.render(
    root,
    document.getElementById('app'),
  );
};

render(<RootContainer />);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    // eslint-disable-next-line global-require
    const { Root: NewRootContainer } = require('./containers/root');

    render(<NewRootContainer />);
  });
}
