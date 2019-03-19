/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

import util from 'util';
import JSON5 from 'json5';

function Json5Loader(source) {
  const value = JSON5.parse(source);

  return `module.exports = ${util.inspect(value, { depth: null })}`;
}

export default Json5Loader;
