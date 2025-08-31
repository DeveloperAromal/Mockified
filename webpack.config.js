import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js", // npm convention
    library: {
      type: "module", // modern ESM output
    },
    clean: true, // clear old dist
  },
  experiments: {
    outputModule: true, // required for library.type: "module"
  },
  externals: {
    react: "react", // don’t bundle react
    "react-dom": "react-dom",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      crypto: false,
      stream: false,
      vm: false, // ✅ disables unnecessary polyfills
    },
  },
  performance: {
    hints: false,
  },
};
