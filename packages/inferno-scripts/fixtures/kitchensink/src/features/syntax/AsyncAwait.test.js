import Inferno from 'inferno';

import AsyncAwait from './AsyncAwait';

describe('async/await', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<AsyncAwait />, div);
  });
});
