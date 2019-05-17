const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')

  // Add markdown loader
  config.module.rules.push({
    test: /\.md$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('raw-loader'),
  })
  config.resolve.extensions.push('.md')

  return config
}
