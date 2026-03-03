import { ORANGE, applyChartDefaults } from "./theme.js";
applyChartDefaults();
import { DATA } from "./data.js";
import { renderTopRibbon, setActiveNav } from "./common.js";

renderTopRibbon();
setActiveNav("evaluation");

const COLORS = {
  red: "#CE242C",
  lime:"#B9CC25",
  gray:"#94a3b8"
};

const fmtVND = (x) => new Intl.NumberFormat("en-US").format(x) + " VND";

function lerp(a,b,t){ return a + (b-a)*t; }
function clamp(x,min,max){ return Math.max(min, Math.min(max, x)); }

// Map value -> color (dark -> red -> lime)
function heatColor(t){
  // t in [0,1]
  t = clamp(t, 0, 1);
  // 0..0.6: dark to red, 0.6..1: red to lime
  if (t <= 0.6){
    const u = t/0.6;
    return `rgba(${Math.round(lerp(20, 206, u))},${Math.round(lerp(24, 36, u))},${Math.round(lerp(32, 44, u))},0.95)`;
  } else {
    const u = (t-0.6)/0.4;
    return `rgba(${Math.round(lerp(206, 185, u))},${Math.round(lerp(36, 204, u))},${Math.round(lerp(44, 37, u))},0.95)`;
  }
}

function buildMatrixData(xLabels, yLabels, matrixValues){
  const flat = [];
  for (let yi=0; yi<yLabels.length; yi++){
    for (let xi=0; xi<xLabels.length; xi++){
      flat.push({ x: xLabels[xi], y: yLabels[yi], v: matrixValues[yi][xi] });
    }
  }
  return flat;
}

function matrixChart(canvasId, xLabels, yLabels, matrixValues, title){
  const data = buildMatrixData(xLabels, yLabels, matrixValues);
  const vals = data.map(d => d.v);
  const vMin = Math.min(...vals);
  const vMax = Math.max(...vals);

  const ctx = document.getElementById(canvasId);
  return new Chart(ctx, {
    type: "matrix",
    data: {
      datasets: [{
        label: title,
        data,
        backgroundColor: (c) => {
          const v = c.dataset.data[c.dataIndex].v;
          const t = (v - vMin) / (vMax - vMin || 1);
          return heatColor(t);
        },
        borderColor: "rgba(255,255,255,.10)",
        borderWidth: 1,
        width: (ctx) => {
          const a = ctx.chart.chartArea;
          return a ? (a.width / xLabels.length) - 2 : 20;
        },
        height: (ctx) => {
          const a = ctx.chart.chartArea;
          return a ? (a.height / yLabels.length) - 2 : 20;
        }
      }]
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ display:false },
        tooltip:{
          callbacks:{
            title:(items)=> {
              const d = items[0].raw;
              return `x=${d.x}, y=${d.y}`;
            },
            label:(item)=> `Value: ${fmtVND(item.raw.v)}`
          }
        }
      },
      scales:{
        x:{
          type:"category",
          labels: xLabels,
          ticks:{ color:"#a8b3c7" },
          grid:{ color:"rgba(255,255,255,.06)" }
        },
        y:{
          type:"category",
          labels: yLabels,
          ticks:{ color:"#a8b3c7" },
          grid:{ color:"rgba(255,255,255,.06)" }
        }
      }
    }
  });
}

// Table 8 heatmap
matrixChart(
  "dcfHeatmap",
  DATA.dcfSensitivity.coe.map(x => `${x.toFixed(2)}%`),
  DATA.dcfSensitivity.tgr.map(y => `${y.toFixed(2)}%`),
  DATA.dcfSensitivity.values,
  "DCF target price"
);
document.querySelector("#dcfBaseNote").textContent =
  `Base point: COE ${DATA.dcfSensitivity.base.coe.toFixed(2)}%, TGR ${DATA.dcfSensitivity.base.tgr.toFixed(2)}% → ${fmtVND(DATA.dcfSensitivity.base.price)}`;

// Table 9 heatmap
matrixChart(
  "peHeatmap",
  DATA.peSensitivity.intl.map(x => `${x.toFixed(1)}%`),
  DATA.peSensitivity.domestic.map(y => `${y.toFixed(2)}%`),
  DATA.peSensitivity.values,
  "P/E implied price"
);
document.querySelector("#peBaseNote").textContent =
  `Base point: Intl ${DATA.peSensitivity.base.intl.toFixed(1)}%, Domestic ${DATA.peSensitivity.base.domestic.toFixed(2)}% → ${fmtVND(DATA.peSensitivity.base.price)}`;

// Scenario bars
const scenarioCtx = document.getElementById("scenarioBars");
new Chart(scenarioCtx, {
  type: "bar",
  data: {
    labels: DATA.scenarios.names,
    datasets: [{
      label: "1-year target price",
      data: DATA.scenarios.target1y,
      backgroundColor: ["rgba(185,204,37,.55)", "rgba(206,36,44,.55)", "rgba(148,163,184,.45)"],
      borderColor: [COLORS.lime, COLORS.red, COLORS.gray],
      borderWidth: 1
    }]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
      tooltip:{ callbacks:{ label:(c)=> `${c.dataset.label}: ${fmtVND(c.parsed.y)}` } }
    },
    scales:{
      x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
      y:{ ticks:{ color:"#a8b3c7", callback:(v)=> fmtVND(v).replace(" VND","") }, grid:{ color:"rgba(255,255,255,.06)" } }
    }
  },
  plugins: [{
    id: "currentPriceLine",
    afterDatasetsDraw(chart){
      const {ctx, chartArea, scales} = chart;
      const y = scales.y.getPixelForValue(DATA.currentPriceVND);
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,.65)";
      ctx.setLineDash([6,6]);
      ctx.beginPath();
      ctx.moveTo(chartArea.left, y);
      ctx.lineTo(chartArea.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(255,255,255,.75)";
      ctx.font = "12px ui-monospace, Menlo, Consolas, monospace";
      ctx.fillText(`Current: ${fmtVND(DATA.currentPriceVND)}`, chartArea.left + 6, y - 6);
      ctx.restore();
    }
  }]
});

// Scenario table render
const t = document.querySelector("#scenarioTable");
t.innerHTML = `
  <thead>
    <tr>
      <th>Metric</th>
      ${DATA.scenarios.names.map(n => `<th>${n}</th>`).join("")}
    </tr>
  </thead>
  <tbody>
    <tr><td>Avg revenue growth</td>${DATA.scenarios.avgRevenueGrowthPct.map(x=>`<td>${x}%</td>`).join("")}</tr>
    <tr><td>Avg net margin</td>${DATA.scenarios.avgNetMarginPct.map(x=>`<td>${x}%</td>`).join("")}</tr>
    <tr><td>Total EV (bn VND)</td>${DATA.scenarios.totalEV_billionVND.map(x=>`<td>${x.toLocaleString("en-US")}</td>`).join("")}</tr>
    <tr><td>DCF target (85%)</td>${DATA.scenarios.dcfTarget.map(x=>`<td>${fmtVND(x)}</td>`).join("")}</tr>
    <tr><td>P/E target (15%)</td>${DATA.scenarios.peTarget.map(x=>`<td>${fmtVND(x)}</td>`).join("")}</tr>
    <tr><td>1-year target</td>${DATA.scenarios.target1y.map(x=>`<td>${fmtVND(x)}</td>`).join("")}</tr>
    <tr><td>Upside/Downside</td>${DATA.scenarios.upsidePct.map(x=>`<td>${x}%</td>`).join("")}</tr>
    <tr><td>Recommendation</td>${DATA.scenarios.recommendation.map(x=>`<td>${x}</td>`).join("")}</tr>
  </tbody>
`;
