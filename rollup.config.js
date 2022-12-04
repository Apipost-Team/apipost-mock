import commonjs from 'rollup-plugin-commonjs'


export default [{
  name: 'apipostMock',
  input: './src/mock.js',
  output: {
    name: 'apipostMock',
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [commonjs()],
}]