module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@proapp/assets': './src/assets',
            '@proapp/components': './src/components',
            '@proapp/hooks': './src/hooks'
          }
        }
      ]
    ]
  }
}
