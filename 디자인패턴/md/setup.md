# design_patterns

### 1. 웹팩 설치

```
npm install webpack webpack-cli --save-dev
```

### 2. webpack config 설정

```javascript
// webpack.config.js;

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

### 3. 타입스크립트 설치

```
npm install typescript ts-loader --save-dev
```

### 4. ts-config 생성

```
tsc --init
```

### 5. html 만들기

```
- dist 하위 폴더에 index.html 작성 후 bundle.js 를 읽어올 스크립트 파일 작성.
```

### 6. package.json script 명령어 추가

```
"bundle": "webpack"
```
