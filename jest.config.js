module.exports = {
  moduleDirectories: [
    'node_modules',
  ],

  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],

  preset: 'ts-jest',

  testMatch: [
    '**/*.test.js?(x)',
  ],

  transform: {
    '.(js|jsx)': 'babel-jest',
    '.(ts|tsx)': 'ts-jest',
  },
};
