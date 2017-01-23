import Inferno from 'inferno';
import SvgInclusion from './SvgInclusion';

describe('svg inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<SvgInclusion />, div);
  });
});
