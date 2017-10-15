/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ErrorOverlay from '../components/ErrorOverlay';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CodeBlock from '../components/CodeBlock';
import generateAnsiHTML from '../utils/generateAnsiHTML';
import parseCompileError from '../utils/parseCompileError';

const codeAnchorStyle = {
  cursor: 'pointer',
};

function CompileErrorContainer({ error, editorHandler }) {
  const errLoc: ?ErrorLocation = parseCompileError(error);
  const canOpenInEditor = errLoc !== null && editorHandler !== null;
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <ErrorOverlay>
      <Header headerText="Failed to compile" />
      <a
        onClick={canOpenInEditor && errLoc ? () => editorHandler(errLoc) : null}
        style={canOpenInEditor ? codeAnchorStyle : null}
      >
        <CodeBlock main={true} codeHTML={generateAnsiHTML(error)} />
      </a>
      <Footer line1="This error occurred during the build time and cannot be dismissed." />
    </ErrorOverlay>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */
}

export default CompileErrorContainer;
