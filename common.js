// assets/js/common.js
import { DATA } from "./data.js";

export function setActiveNav(pageKey){
  const links = document.querySelectorAll("[data-nav]");
  links.forEach(a => {
    a.classList.toggle("active", a.dataset.nav === pageKey);
  });
}

export function renderTopRibbon(){
  const el = document.querySelector("#topRibbon");
  if(!el) return;

  el.innerHTML = `
    <div class="ribbon">
      <div class="ribbon-left">
        <span class="ticker">${DATA.ticker}</span>
        <span class="badge-buy">BUY</span>
        <span class="metric">As of <b>${DATA.asOf}</b></span>
      </div>

      <div class="metrics">
        <span class="metric">Current <b>${fmtVND(DATA.currentPriceVND)}</b></span>
        <span class="metric">Target <b>${fmtVND(DATA.targetPriceVND)}</b></span>
        <span class="metric">Upside <b>${DATA.upsidePct.toFixed(2)}%</b></span>
        <span class="metric">Mix <b>${Math.round(DATA.valuationMix.dcf*100)}%</b> DCF / <b>${Math.round(DATA.valuationMix.pe*100)}%</b> P/E</span>
      </div>
    </div>
  `;
}

function fmtVND(x){
  return new Intl.NumberFormat("en-US").format(x) + " VND";
}

