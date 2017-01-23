import Inferno from 'inferno';

import ShellEnvVariables from './ShellEnvVariables';

describe('shell env variables', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    Inferno.render(<ShellEnvVariables />, div);
  });
});
