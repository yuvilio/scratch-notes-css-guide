// import uglify from 'rollup-plugin-uglify'

//common config settings
const defaultConfig = {
  // entry: 'src/fetch-inject.js',a
  format: 'iife',
  plugins: []
}

//currently generated js files (switch to others as needed)
import { activeConfigs, baseProps  } from './lib/rollup/css-guide/css-guide-001.js';

activeConfigs.forEach(activeConfig => {
  Object.assign(activeConfig, defaultConfig)
  Object.assign(activeConfig, baseProps)
})

export default activeConfigs
