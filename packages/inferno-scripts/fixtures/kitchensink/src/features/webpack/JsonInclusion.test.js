import Inferno from 'inferno';
import JsonInclusion from './JsonInclusion';

describe('JSON inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<JsonInclusion />, div);
  });
});
