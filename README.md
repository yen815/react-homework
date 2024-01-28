## mission02 과제 -> mission02-2 branch에 구현 완료

![image](https://github.com/yen815/react-homework/assets/119932452/46d9fe5f-7b28-44a0-92b4-9e0423da95e3)

## 🙌 안녕하세요. mission02-2 입니다.
## 환경설정(해당 파일 안으로 들어가서 설치)
   
<details><summary>환경설정 내용
</summary>

- **Git Repository 생성**

- **vite 설치**
``` shell
pnpm create vite@latest
pnpm i
```

- **React 설치**
``` shell
pnpm add react react-dom -D
```

- **tailwind 설치**
``` shell
pnpm i -D tailwindcss
npx tailwindcss init
pnpm add -D tailwindcss postcss autoprefixer postcss-import postcss-nesting
pnpm i lodash --save
```

- **postcss.config.js 생성**
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

- **tailwind.config.js 생성**
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

- **vite.config.js port 번호 추가**
``` shell
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // default: 'localhost'
    port: 3001, // default: 5273
    open: true, // default: false
  },
});
```

- **설치된 프로그램 중 사용할 내용만 정리**
</details>

<br>   

## 파일 구성 설명
![image](https://github.com/yen815/react-homework/assets/119932452/e9761695-b18b-4fd5-b9e6-ebbaced125f9)


## 구성 설명
- index.html
![image](https://github.com/yen815/react-homework/assets/119932452/c9b37ff2-063d-4d32-a277-0b6ef41bcb95)

- main.jsx<br>
![image](https://github.com/yen815/react-homework/assets/119932452/5d1c8cf8-4728-4868-9a95-94cea2ecee67)

- App.jsx
![image](https://github.com/yen815/react-homework/assets/119932452/4e19be8c-91df-4dce-94d4-ff7fd8629ba0)

- data -> contacts.jsx
![image](https://github.com/yen815/react-homework/assets/119932452/321749ce-03d6-4833-bbf4-1933d558e093)

- tailwind.css<br>
![image](https://github.com/yen815/react-homework/assets/119932452/367ee971-8dc3-4880-8f96-cae8fdcea0ba)

<br> 

## 느낀점
파일 환경 설정부터 다시 하는게 너무 오래 걸렸습니다. 그래도 처음 미션보다는 덜 걸리고 어떤걸 어디에 써야 하는지
파악할 수 있어서 설치 순서 또한 재정비 할 수 있었습니다.

App.jsx 파일이 화면에 렌더링 되지 않았을 때 어떤 이유인지 도무지 찾을 수 없었는데 map을 돌린 후에 return 값을 주지 
않아서 발생한 오류였습니다. 간단한듯 간단하지 않은 사소한 문제들이 생겼었는데 동기분들 덕분에 잘 해결할 수 있었습니다.

매번 과제를 하면서 느끼지만 수업의 진도에 비해 제가 너무 못하는게 아닐까 걱정도 되고, vscode에 적힌 내용을 보면 그렇구나 
하며 이해가 되지만 막상 제 예제에 적용시키는 것은 쉽지 않았습니다. 
그래도 이렇게 꾸준히 학습하다 보면 실력이 향상될 것이라 기대하면서 잘 마무리 했습니다.

앞으로도 열심히 학습하겠습니다. 감사합니다.
