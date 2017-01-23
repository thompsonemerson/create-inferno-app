import Inferno from 'inferno';
import CssInclusion from './CssInclusion';

describe('css inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<CssInclusion />, div);
  });
});
