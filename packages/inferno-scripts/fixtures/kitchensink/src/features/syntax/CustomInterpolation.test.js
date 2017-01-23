import Inferno from 'inferno';

import CustomInterpolation from './CustomInterpolation';

describe('custom interpolation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<CustomInterpolation />, div);
  });
});
