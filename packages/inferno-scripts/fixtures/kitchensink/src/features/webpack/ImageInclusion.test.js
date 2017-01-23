import Inferno from 'inferno';
import ImageInclusion from './ImageInclusion';

describe('image inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<ImageInclusion />, div);
  });
});
