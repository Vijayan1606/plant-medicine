module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"],
          },
        },
      });
      return config;
    },
  };
  