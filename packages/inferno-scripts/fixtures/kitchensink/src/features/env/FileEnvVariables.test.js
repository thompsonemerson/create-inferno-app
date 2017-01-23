import Inferno from 'inferno';

import FileEnvVariables from './FileEnvVariables';

describe('.env variables', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<FileEnvVariables />, div);
  });
});
