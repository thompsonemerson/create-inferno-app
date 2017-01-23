import Inferno from 'inferno';

import ArraySpread from './ArraySpread';

describe('array spread', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<ArraySpread />, div);
  });
});
