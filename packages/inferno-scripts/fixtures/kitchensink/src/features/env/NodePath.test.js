import Inferno from 'inferno';

import NodePath from './NodePath';

describe('NODE_PATH', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<NodePath />, div);
  });
});
