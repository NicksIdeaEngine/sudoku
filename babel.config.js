module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      'emotion',
      {
        labelFormat: '[filename]--[local]',
      },
    ],
  ],
};
