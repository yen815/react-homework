## 🙌 안녕하세요. mission01 입니다.
## 환경설정(해당 파일 안으로 들어가서 설치)
   
<details><summary>환경설정 내용
</summary>

- **Git Repository 생성**
- **React 설치**
``` shell
pnpm add react react-dom -D
```

- **tailwind 설치**
``` shell
pnpm i -D tailwindcss
npx tailwindcss init
pnpm add -D tailwindcss postcss autoprefixer postcss-import
pnpm i lodash --save
pnpm i -D postcss-nesting
```

- **postcss.config 생성**
``` shell
export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- **tailwind.config 생성**
``` shell
import { range } from "lodash";
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(start, end).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

// 타입을 지정하고 싶은 객체 바로 위에 타입스크립트 구문이 포함된 jsdoc 주석을 써 주셔야 타입스크립트의 지원을 받을 수 있습니다,
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      inset: {
        ...pxToRemFunc(0, 1000),
      },
      fontSize: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      lineHeight: {
        ...pxToRemFunc(0, 1000),
      }, // px을 rem으로 변환
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
      },
    },
    fontFamily: {
      sans: ["noto-sans-kr", "sans-serif"],
    }, // font-family: noto-sans-kr, sans-serif;
  },
  plugins: [],
};
```

- **.eslintrc.cjs 추가**
``` shell
env: {
        node: true,
      },
```

- **vite 설치**
``` shell
pnpm create vite@latest
pnpm i
```

- **설치된 프로그램 중 사용할 내용만 정리**
</details>

<br>   

## 파일 구성 설명
![image](https://github.com/yen815/react-homework/assets/119932452/21d3174c-fe41-48ee-b6cd-04d4614863b7)

## 구성 설명
![image](https://github.com/yen815/react-homework/assets/119932452/8b548017-d3b3-4f92-ad36-f20594d1b6d5)
- index.html
<div id="root"></div> : root 안에 jsx로 마크업

- main.jsx
![image](https://github.com/yen815/react-homework/assets/119932452/ffe08e82-430f-4038-a382-16b61ab31fd2)
![image](https://github.com/yen815/react-homework/assets/119932452/095d2678-64ff-47d5-a018-d307a78cdb8c)

- ReactDOM과 index.css를 import 해오고 mainApp에 마크업 내용 추가
  ```shell
  import ReactDOM from "react-dom/client";
  import "./index.css";
  ~
  const rootElement = document.getElementById("root");
  const reactDomRoot = ReactDOM.createRoot(rootElement);
  reactDomRoot.render(mainApp);
  ```
- index.css
![image](https://github.com/yen815/react-homework/assets/119932452/8ea49cee-52d5-4331-9ffe-d901a24fc92a)
tailwind css 추가
