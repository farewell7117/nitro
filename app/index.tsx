import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Root as RootContainer } from './containers/root';

const render = (root: React.ReactElement) => ReactDOM.render(
	root,
	document.getElementById('app')
);

render(<RootContainer />);

if (module.hot) {
	module.hot.accept('./containers/root', () => {
		const { Root: RootContainer } = require('./containers/root');

		render(<RootContainer />);
	});
}
