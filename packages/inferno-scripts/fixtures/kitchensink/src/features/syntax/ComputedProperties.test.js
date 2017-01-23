import Inferno from 'inferno';

import ComputedProperties from './ComputedProperties';

describe('computed properties', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<ComputedProperties />, div);
  });
});
