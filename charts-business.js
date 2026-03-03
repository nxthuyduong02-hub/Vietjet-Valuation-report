import { ORANGE, applyChartDefaults } from "./theme.js";
applyChartDefaults();
import { DATA } from "./data.js";
import { renderTopRibbon, setActiveNav } from "./common.js";

renderTopRibbon();
setActiveNav("business");

const COLORS = {
  red: "#CE242C",
  red2:"#EC242C",
  red3:"#E52620",
  lime:"#B9CC25",
  amber:"#f59e0b",
  blue:"#60a5fa",
  gray:"#94a3b8",
  slate:"#64748b",
  purple:"#a78bfa"
};

function pctTick(v){
  return `${Math.round(v)}%`;
}
function fmtPctFromShare(s){
  return Math.round(s * 1000) / 10; // 1 decimal %
}

function stackedShareChart(canvasId, years, series, palette){
  const ctx = document.getElementById(canvasId);

  const datasets = series.map((s, i) => ({
    label: s.name,
    data: s.values.map(v => v * 100),
    backgroundColor: palette[i % palette.length],
    borderColor: "rgba(255,255,255,.10)",
    borderWidth: 1,
    stack: "mix"
  }));

  return new Chart(ctx, {
    type: "bar",
    data: { labels: years, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { color: "#a8b3c7" } },
        tooltip: {
          callbacks: {
            label: (c) => `${c.dataset.label}: ${c.parsed.y.toFixed(1)}%`
          }
        }
      },
      scales: {
        x: { stacked: true, ticks: { color: "#a8b3c7" }, grid: { color: "rgba(255,255,255,.06)" } },
        y: {
          stacked: true,
          min: 0,
          max: 100,
          ticks: { color: "#a8b3c7", callback: pctTick },
          grid: { color: "rgba(255,255,255,.06)" }
        }
      }
    }
  });
}

// Fig 2 — Revenue breakdown (100% stacked)
stackedShareChart(
  "revBreakdown",
  DATA.revenueBreakdownShare.years,
  DATA.revenueBreakdownShare.series,
  [COLORS.red, COLORS.lime, COLORS.amber, COLORS.blue, COLORS.gray]
);

// Fig 3 — Core breakdown (100% stacked)
stackedShareChart(
  "coreBreakdown",
  DATA.coreRevenueShare.years,
  DATA.coreRevenueShare.series,
  [COLORS.red, COLORS.lime, COLORS.amber]
);

// Fig 4 — Routes grouped bars
const routesCtx = document.getElementById("routesBar");
new Chart(routesCtx, {
  type: "bar",
  data: {
    labels: DATA.routesByType.years,
    datasets: [
      {
        label: "Domestic routes",
        data: DATA.routesByType.domestic,
        backgroundColor: "rgba(206,36,44,.65)",
        borderColor: COLORS.red,
        borderWidth: 1
      },
      {
        label: "International routes",
        data: DATA.routesByType.international,
        backgroundColor: "rgba(185,204,37,.55)",
        borderColor: COLORS.lime,
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { color: "#a8b3c7" } },
      tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${c.parsed.y}` } }
    },
    scales: {
      x: { ticks: { color: "#a8b3c7" }, grid: { color: "rgba(255,255,255,.06)" } },
      y: { ticks: { color: "#a8b3c7" }, grid: { color: "rgba(255,255,255,.06)" } }
    }
  }
});
