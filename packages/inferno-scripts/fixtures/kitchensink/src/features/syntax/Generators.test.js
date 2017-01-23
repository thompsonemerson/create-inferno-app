import Inferno from 'inferno';

import Generators from './Generators';

describe('generators', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<Generators />, div);
  });
});
