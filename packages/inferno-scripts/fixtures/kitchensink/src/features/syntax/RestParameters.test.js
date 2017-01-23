import Inferno from 'inferno';

import RestParameters from './RestParameters';

describe('rest parameters', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<RestParameters />, div);
  });
});
