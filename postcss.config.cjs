module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': false
      },
    },
    cssnano: {
      preset: 'default',
    },
  },
};
