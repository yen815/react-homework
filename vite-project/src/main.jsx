import "./index.css";

// import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function bodyStyling() {
  document.body.style.backgroundColor = `#B1D0FE`;
  document.body.style.color = `#000`;
}

bodyStyling();

/* -------------------------------------------------------------------------- */

const renderKosdaqIndex = () => (
  <div>
    <span className="KosdaqIndex">859.65</span>
  </div>
);

const renderKosdaqPercent = () => (
  <div>
    <span className="Kosdaq">코스닥</span>
    <span className="KosdaqPercent"> ⏷ 0.97% </span>
  </div>
);

const renderWidgetBar = () => (
  <div className="widgetBarGroup" role="group">
    <div className="widgetGroup">
      {renderKosdaqIndex()}
      {renderKosdaqPercent()}
    </div>
  </div>
);

createRoot(document.getElementById("root")).render(renderWidgetBar());
