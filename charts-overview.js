import { ORANGE, applyChartDefaults } from "./theme.js";
applyChartDefaults();
import { DATA } from "./data.js";
import { renderTopRibbon, setActiveNav } from "./common.js";

renderTopRibbon();
setActiveNav("overview");

const fmtVND = (x) => new Intl.NumberFormat("en-US").format(x) + " VND";

document.querySelector("#kpiCurrent").textContent = fmtVND(DATA.currentPriceVND);
document.querySelector("#kpiTarget").textContent = fmtVND(DATA.targetPriceVND);
document.querySelector("#kpiUpside").textContent = `Upside: ${DATA.upsidePct.toFixed(2)}%`;
document.querySelector("#kpiMix").textContent = `${Math.round(DATA.valuationMix.dcf*100)}% / ${Math.round(DATA.valuationMix.pe*100)}%`;

const COLORS = {
  red: "#CE242C",
  red2:"#EC242C",
  lime:"#B9CC25",
  amber:"#f59e0b",
  blue:"#60a5fa",
  gray:"#94a3b8",
  slate:"#64748b"
};

function makeDonut(canvasId, labels, values){
  const ctx = document.getElementById(canvasId);
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: [
          COLORS.red, COLORS.lime, COLORS.amber, COLORS.blue, COLORS.gray, COLORS.slate
        ],
        borderColor: "rgba(255,255,255,.10)",
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
        tooltip:{ callbacks:{ label:(c)=> `${c.label}: ${c.parsed}%` } }
      },
      cutout:"62%"
    }
  });
}

makeDonut("share2021", DATA.share2021.labels, DATA.share2021.values);
makeDonut("shareH12022", DATA.shareH12022.labels, DATA.shareH12022.values);

const trendCtx = document.getElementById("shareTrend");
new Chart(trendCtx, {
  type: "line",
  data: {
    labels: DATA.domesticShareTrend.years,
    datasets: DATA.domesticShareTrend.series.map((s, i) => ({
      label: s.name,
      data: s.values,
      borderWidth: 2,
      tension: 0.25,
      pointRadius: 2,
      borderColor: [
        COLORS.red, COLORS.lime, COLORS.blue, COLORS.amber, COLORS.gray
      ][i] || COLORS.gray
    }))
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
      tooltip:{ callbacks:{ label:(c)=> `${c.dataset.label}: ${c.parsed.y}%` } }
    },
    scales:{
      x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
      y:{ ticks:{ color:"#a8b3c7", callback:(v)=> v+"%" }, grid:{ color:"rgba(255,255,255,.06)" } }
    }
  }
});
