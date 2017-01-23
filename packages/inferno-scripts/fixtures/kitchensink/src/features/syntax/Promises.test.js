import Inferno from 'inferno';

import Promises from './Promises';

describe('promises', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<Promises />, div);
  });
});
