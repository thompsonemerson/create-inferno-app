import Inferno from 'inferno';

import ClassProperties from './ClassProperties';

describe('class properties', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<ClassProperties />, div);
  });
});
