import Inferno from 'inferno';

import ArrayDestructuring from './ArrayDestructuring';

describe('array destructuring', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<ArrayDestructuring />, div);
  });
});
