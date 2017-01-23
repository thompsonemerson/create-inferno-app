import Inferno from 'inferno';

import DestructuringAndAwait from './DestructuringAndAwait';

describe('destructuring and await', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<DestructuringAndAwait />, div);
  });
});
