import Inferno from 'inferno';

import RestAndDefault from './RestAndDefault';

describe('rest + default', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<RestAndDefault />, div);
  });
});
