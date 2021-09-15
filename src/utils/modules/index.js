import ModuleGenerator from '../../module-generator';

const _loader = require.context(".", false, /\.js$/);
export default ModuleGenerator.generateObjectModule(_loader);