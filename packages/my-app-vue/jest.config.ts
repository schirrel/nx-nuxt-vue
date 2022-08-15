module.exports = {
  displayName: 'my-app-vue',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue2-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/packages/my-app-vue',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'packages/my-app-vue/tsconfig.spec.json',
      babelConfig: 'packages/my-app-vue/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'packages/my-app-vue/tsconfig.spec.json',
      babelConfig: 'packages/my-app-vue/babel.config.js',
    },
  },
};
