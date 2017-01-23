import Inferno from 'inferno';

import ObjectDestructuring from './ObjectDestructuring';

describe('object destructuring', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<ObjectDestructuring />, div);
  });
});
