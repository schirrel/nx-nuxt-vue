module.exports = {
  displayName: 'my-lib',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue2-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/packages/my-lib',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'packages/my-lib/tsconfig.spec.json',
      babelConfig: 'packages/my-lib/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'packages/my-lib/tsconfig.spec.json',
      babelConfig: 'packages/my-lib/babel.config.js',
    },
  },
};
