import Inferno from 'inferno';
import UnknownExtInclusion from './UnknownExtInclusion';

describe('unknown ext inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<UnknownExtInclusion />, div);
  });
});
