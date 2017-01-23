import Inferno from 'inferno';

import ObjectSpread from './ObjectSpread';

describe('object spread', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<ObjectSpread />, div);
  });
});
