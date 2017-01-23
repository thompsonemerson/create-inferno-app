import Inferno from 'inferno';

import TemplateInterpolation from './TemplateInterpolation';

describe('template interpolation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<TemplateInterpolation />, div);
  });
});
