import Inferno from 'inferno';

import DefaultParameters from './DefaultParameters';

describe('default parameters', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<DefaultParameters />, div);
  });
});
