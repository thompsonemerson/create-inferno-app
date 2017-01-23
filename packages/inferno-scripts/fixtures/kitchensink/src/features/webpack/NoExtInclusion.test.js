import Inferno from 'inferno';
import NoExtInclusion from './NoExtInclusion';

describe('no ext inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<NoExtInclusion />, div);
  });
});
