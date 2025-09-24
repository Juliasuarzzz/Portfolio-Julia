import withLess from 'next-plugin-less';

export default withLess({
  reactStrictMode: true,
  cssLoaderOptions: {
    modules: {
      localIdentName: "[local]__[hash:base64:5]",
    },
  },
});
