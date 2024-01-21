// import React from "https://esm.sh/react";
import ReactDOM from "react-dom/client";
import "./index.css";

const mainApp = (
  <div className="detail-why-container w-[1050px] border-t pt-72pxr">
    <div className="detail-why-wrapper pb-35pxr text-center text-28pxr font-bold">
      <h3>WHY EMONG</h3>
    </div>
    <div className="detail-wrapper-desc pb-84pxr">
      <div className="flex w-[1050px] justify-between px-52pxr align-top">
        <dl className="detail-desc1 m-0 pt-56pxr text-center">
          <dt className="flex flex-col items-center justify-center text-center text-21pxr font-semibold text-skybluemong">
            <img
              src="/assets/detail-list-icon.svg"
              alt="상품위원회"
              className="mb-16pxr h-40pxr w-40pxr"
            />
            깐깐한 상품위원회
          </dt>
          <dd className="pt-24pxr text-16pxr font-normal">
            나와 내 가족의 미래를 위한 <br />
            마음으로 매주 도구를 직접 사용해보고 <br />
            경험해보고 안정성 등 다각도의 기준을 <br />
            통과한 도구 만을 판매합니다.
          </dd>
        </dl>
        <dl className="detail-desc2 m-0 pt-56pxr text-center">
          <dt className="flex flex-col items-center justify-center text-center text-21pxr font-semibold text-skybluemong">
            <img
              src="/assets/detail-only-e.svg"
              alt="오직에몽"
              className="mb-16pxr h-40pxr w-40pxr"
            />
            차별화된 Emong Only 상품
          </dt>
          <dd className="pt-24pxr text-16pxr font-normal">
            전세계 각지의 훌륭한 생산자가 <br />
            믿고 선택하는 파트너, 에몽마켓.
            <br />
            1억 5천여 개가 넘는 에몽 단독 브랜드,
            <br />
            스펙의 Emong Only 상품을 믿고 만나보세요.
          </dd>
        </dl>
        <dl className="detail-desc m-0 pt-56pxr text-center">
          <dt className="flex flex-col items-center justify-center text-center text-21pxr font-semibold text-skybluemong">
            <img
              src="/assets/detail-delivery.svg"
              alt="배송"
              className="mb-16pxr h-40pxr w-40pxr"
            />
            타임머신 배송
          </dt>
          <dd className="pt-24pxr text-16pxr font-normal">
            이시대 업계 최초로 타임머신 타고 <br />
            눈 앞까지 배달 하는 배송 시스템,
            <br />
            상품을 안전하게 눈 앞까지 전해드립니다. <br />
            1초만에 배송 완료입니다.
          </dd>
        </dl>
      </div>
      <div className="flex justify-around px-160pxr">
        <dl className="detail-desc4 m-0 pt-56pxr text-center">
          <dt className="flex flex-col items-center justify-center text-center text-21pxr font-semibold text-skybluemong">
            <img
              src="/assets/detail-price.svg"
              alt="최선의가격"
              className="mb-16pxr h-40pxr w-40pxr"
            />
            고객, 생산자를 위한 최선의 가격
          </dt>
          <dd className="pt-24pxr text-16pxr font-normal">
            매주 A/S가 필요없게끔 하는 <br />
            좋은 품질, 타협하지 않은 선에서 <br />
            최선의 가격으로 언제나 합리적인 <br />
            가격으로 정기 조정합니다. <br />
            고객님들 감사합니다.
          </dd>
        </dl>
        <dl className="detail-desc5 m-0 pt-56pxr text-center">
          <dt className="flex flex-col items-center justify-center text-center text-21pxr font-semibold text-skybluemong">
            <img
              src="/assets/detail-circulation.svg"
              alt="환경보호유통"
              className="mb-16pxr h-40pxr w-40pxr"
            />
            환경을 생각하는 지속 가능한 품질
          </dt>
          <dd className="pt-24pxr text-16pxr font-normal">
            친환경 기계로부터 생산자가 상품에만 <br />
            집중할 수 있는 눈앞 배달 구조까지,
            <br />
            지속 가능한 품질을 고민하며 <br />
            에몽을 보다 더 나아질 수 있게 <br />
            모든 환경(생산자, 커뮤니티,직원)이 노력합니다.
          </dd>
        </dl>
      </div>
    </div>
  </div>
);

const rootElement = document.getElementById("root");
const reactDomRoot = ReactDOM.createRoot(rootElement);
reactDomRoot.render(mainApp);
