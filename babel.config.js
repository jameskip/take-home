module.exports = function (api) {
  api.cache(true)

  const presets = [ 'flow' ]
  const plugins = [ '@babel/plugin-proposal-optional-chaining', '@babel/plugin-transform-runtime' ]

  return {
    presets,
    plugins
  }
}
