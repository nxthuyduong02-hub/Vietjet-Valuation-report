import { ORANGE, applyChartDefaults } from "./theme.js";
applyChartDefaults();
import { DATA } from "./data.js";
import { renderTopRibbon, setActiveNav } from "./common.js";

renderTopRibbon();
setActiveNav("industry");

const COLORS = {
  red: "#CE242C",
  red2:"#EC242C",
  lime:"#B9CC25",
  amber:"#f59e0b",
  blue:"#60a5fa",
  gray:"#94a3b8",
  slate:"#64748b",
  cyan:"#22d3ee",
  purple:"#a78bfa"
};

function lineChart(canvasId, labels, datasets, ySuffix="%"){
  const ctx = document.getElementById(canvasId);
  return new Chart(ctx, {
    type: "line",
    data: { labels, datasets },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
        tooltip:{ callbacks:{ label:(c)=> `${c.dataset.label}: ${c.parsed.y}${ySuffix}` } }
      },
      scales:{
        x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
        y:{ ticks:{ color:"#a8b3c7", callback:(v)=> v + ySuffix }, grid:{ color:"rgba(255,255,255,.06)" } }
      }
    }
  });
}

// Fig 5 — GDP VN vs SEA
lineChart(
  "gdpLine",
  DATA.gdpVNvsSEA.years,
  [
    { label:"Vietnam", data: DATA.gdpVNvsSEA.vietnam, borderColor: COLORS.red, borderWidth:2, pointRadius:2, tension:.25 },
    { label:"Southeast Asia", data: DATA.gdpVNvsSEA.sea, borderColor: COLORS.lime, borderWidth:2, pointRadius:2, tension:.25 }
  ],
  "%"
);

// Fig 6 — Tourists by nationality (doughnut)
const touristsCtx = document.getElementById("touristsPie");
new Chart(touristsCtx, {
  type: "doughnut",
  data: {
    labels: DATA.touristsNationalityShare.labels,
    datasets: [{
      data: DATA.touristsNationalityShare.values,
      backgroundColor: [COLORS.red, COLORS.lime, COLORS.amber, COLORS.blue, COLORS.purple, COLORS.gray],
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

// Fig 11 — Inflation VN vs US
lineChart(
  "inflationLine",
  DATA.inflationVNvsUS.years,
  [
    { label:"Vietnam", data: DATA.inflationVNvsUS.vn, borderColor: COLORS.red, borderWidth:2, pointRadius:2, tension:.25 },
    { label:"United States", data: DATA.inflationVNvsUS.us, borderColor: COLORS.blue, borderWidth:2, pointRadius:2, tension:.25 }
  ],
  "%"
);

// Fig 10 — Global LCC share
lineChart(
  "lccLine",
  DATA.globalLccShare.years,
  [
    { label:"Global LCC share", data: DATA.globalLccShare.values, borderColor: COLORS.lime, borderWidth:2, pointRadius:3, tension:.25 }
  ],
  "%"
);

// Fig 8 — Transport mode shares
lineChart(
  "transportLine",
  DATA.transportModeShares.years,
  [
    { label:"Road", data: DATA.transportModeShares.road, borderColor: COLORS.gray, borderWidth:2, pointRadius:0, tension:.2 },
    { label:"Aviation", data: DATA.transportModeShares.air, borderColor: COLORS.red, borderWidth:2, pointRadius:0, tension:.2 },
    { label:"Railways", data: DATA.transportModeShares.rail, borderColor: COLORS.blue, borderWidth:2, pointRadius:0, tension:.2 },
    { label:"Inland waterways", data: DATA.transportModeShares.water, borderColor: COLORS.lime, borderWidth:2, pointRadius:0, tension:.2 }
  ],
  "%"
);
