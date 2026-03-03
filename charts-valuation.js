import { ORANGE, applyChartDefaults } from "./theme.js";
applyChartDefaults();
import { DATA } from "./data.js";
import { renderTopRibbon, setActiveNav } from "./common.js";

renderTopRibbon();
setActiveNav("valuation");

const COLORS = {
  red: "#CE242C",
  lime:"#B9CC25",
  blue:"#60a5fa",
  gray:"#94a3b8",
  white:"#e7edf6"
};

const fmtVND = (x) => new Intl.NumberFormat("en-US").format(x) + " VND";
const fmtTrn = (x) => `${x.toFixed(2)} trn`;
const fmtPct = (x) => `${x}%`;

function comboBarLine(canvasId, labels, barData, lineData, {barLabel, lineLabel, barFmt, y2=false}){
  const ctx = document.getElementById(canvasId);
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          type:"bar",
          label: barLabel,
          data: barData,
          backgroundColor: "rgba(206,36,44,.55)",
          borderColor: COLORS.red,
          borderWidth: 1,
          order: 2
        },
        {
          type:"line",
          label: lineLabel,
          data: lineData,
          borderColor: COLORS.lime,
          borderWidth: 2,
          pointRadius: 2,
          tension: 0.25,
          order: 1,
          yAxisID: y2 ? "y1" : "y"
        }
      ]
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
        tooltip:{
          callbacks:{
            label:(c)=>{
              if (c.dataset.type === "line") return `${c.dataset.label}: ${c.parsed.y}%`;
              return `${c.dataset.label}: ${barFmt(c.parsed.y)}`;
            }
          }
        }
      },
      scales:{
        x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
        y:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
        ...(y2 ? { y1:{ position:"right", ticks:{ color:"#a8b3c7", callback:(v)=> v+"%" }, grid:{ drawOnChartArea:false } } } : {})
      }
    }
  });
}

function lineChart(canvasId, labels, datasets, {pct=false}={}){
  const ctx = document.getElementById(canvasId);
  return new Chart(ctx, {
    type:"line",
    data:{ labels, datasets },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
        tooltip:{ callbacks:{ label:(c)=> pct ? `${c.dataset.label}: ${c.parsed.y}%` : `${c.dataset.label}: ${c.parsed.y}` } }
      },
      scales:{
        x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
        y:{ ticks:{ color:"#a8b3c7", callback:(v)=> pct ? v+"%" : v }, grid:{ color:"rgba(255,255,255,.06)" } }
      }
    }
  });
}

// Total revenue (VND) + growth
comboBarLine(
  "totalRevenue",
  DATA.totalRevenueProj.years,
  DATA.totalRevenueProj.revenue,
  DATA.totalRevenueProj.growthPct,
  { barLabel:"Total revenue", lineLabel:"YoY growth", barFmt: fmtVND }
);

// Domestic (trn) + growth
comboBarLine(
  "domesticRevenue",
  DATA.domesticRevenueProj.years,
  DATA.domesticRevenueProj.revenueTrn,
  DATA.domesticRevenueProj.growthPct,
  { barLabel:"Domestic revenue (trn VND)", lineLabel:"Growth", barFmt: fmtTrn }
);

// International (VND) + growth
comboBarLine(
  "intlRevenue",
  DATA.intlRevenueProj.years,
  DATA.intlRevenueProj.revenue,
  DATA.intlRevenueProj.growthPct,
  { barLabel:"International revenue", lineLabel:"Growth", barFmt: fmtVND }
);

// Ancillary ex cargo (trn) + growth
comboBarLine(
  "ancillary",
  DATA.ancillaryExCargoProj.years,
  DATA.ancillaryExCargoProj.revenueTrn,
  DATA.ancillaryExCargoProj.growthPct,
  { barLabel:"Ancillary ex-cargo (trn)", lineLabel:"Growth", barFmt: fmtTrn }
);

// Cargo (trn) + growth
comboBarLine(
  "cargo",
  DATA.cargoRevenueProj.years,
  DATA.cargoRevenueProj.revenueTrn,
  DATA.cargoRevenueProj.growthPct,
  { barLabel:"Cargo revenue (trn)", lineLabel:"Growth", barFmt: fmtTrn }
);

// Margins
lineChart("margins", DATA.marginsProj.years, [
  { label:"Operating margin", data: DATA.marginsProj.operating, borderColor: COLORS.red, borderWidth:2, pointRadius:2, tension:.25 },
  { label:"Gross margin", data: DATA.marginsProj.gross, borderColor: COLORS.blue, borderWidth:2, pointRadius:2, tension:.25 },
  { label:"Net profit margin", data: DATA.marginsProj.net, borderColor: COLORS.lime, borderWidth:2, pointRadius:2, tension:.25 }
], { pct:true });

// CAPEX, WC
new Chart(document.getElementById("capex"), {
  type:"bar",
  data:{ labels: DATA.netCapex.years, datasets:[{ label:"Net CAPEX (trn)", data: DATA.netCapex.valuesTrn, backgroundColor:"rgba(206,36,44,.55)", borderColor: COLORS.red, borderWidth:1 }]},
  options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:"bottom", labels:{ color:"#a8b3c7" } } }, scales:{ x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } }, y:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } } } }
});

new Chart(document.getElementById("wc"), {
  type:"bar",
  data:{ labels: DATA.deltaWC.years, datasets:[{ label:"Δ Working capital (trn)", data: DATA.deltaWC.valuesTrn, backgroundColor:"rgba(185,204,37,.45)", borderColor: COLORS.lime, borderWidth:1 }]},
  options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:"bottom", labels:{ color:"#a8b3c7" } } }, scales:{ x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } }, y:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } } } }
});

// Net debt + debt-to-asset (bar + line) [web:114]
new Chart(document.getElementById("netDebt"), {
  type:"bar",
  data:{
    labels: DATA.netDebtAndDA.years,
    datasets:[
      { type:"bar", label:"Net debt (trn VND)", data: DATA.netDebtAndDA.netDebtTrn, backgroundColor:"rgba(206,36,44,.55)", borderColor: COLORS.red, borderWidth:1, order:2 },
      { type:"line", label:"Debt-to-asset (%)", data: DATA.netDebtAndDA.debtToAssetPct, borderColor: COLORS.lime, borderWidth:2, pointRadius:2, tension:.25, yAxisID:"y1", order:1 }
    ]
  },
  options:{
    responsive:true,
    maintainAspectRatio:false,
    plugins:{ legend:{ position:"bottom", labels:{ color:"#a8b3c7" } } },
    scales:{
      x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
      y:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
      y1:{ position:"right", ticks:{ color:"#a8b3c7", callback:(v)=> v+"%" }, grid:{ drawOnChartArea:false } }
    }
  }
});

// GDP model, air share, VJC share
lineChart("gdpModel", DATA.gdpModel.years, [
  { label:"GDP growth", data: DATA.gdpModel.values, borderColor: COLORS.lime, borderWidth:2, pointRadius:2, tension:.25 }
], { pct:true });

lineChart("airShare", DATA.airShareTransportProj.years, [
  { label:"Air share", data: DATA.airShareTransportProj.values, borderColor: COLORS.blue, borderWidth:2, pointRadius:2, tension:.25 }
], { pct:true });

lineChart("vjcShare", DATA.vjcShareProj.years, [
  { label:"VJC market share", data: DATA.vjcShareProj.values, borderColor: COLORS.red, borderWidth:2, pointRadius:2, tension:.25 }
], { pct:true });

// Routes projection
new Chart(document.getElementById("routesProj"), {
  type:"bar",
  data:{
    labels: DATA.routesProj.years,
    datasets:[
      { label:"Domestic routes", data: DATA.routesProj.domestic, backgroundColor:"rgba(206,36,44,.55)", borderColor: COLORS.red, borderWidth:1 },
      { label:"Intl routes", data: DATA.routesProj.intl, backgroundColor:"rgba(185,204,37,.45)", borderColor: COLORS.lime, borderWidth:1 }
    ]
  },
  options:{
    responsive:true,
    maintainAspectRatio:false,
    plugins:{ legend:{ position:"bottom", labels:{ color:"#a8b3c7" } } },
    scales:{ x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } }, y:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } } }
  }
});

// Fleet projection
new Chart(document.getElementById("fleetProj"), {
  type:"bar",
  data:{ labels: DATA.fleetProj.years, datasets:[{ label:"Fleet size", data: DATA.fleetProj.values, backgroundColor:"rgba(96,165,250,.35)", borderColor: COLORS.blue, borderWidth:1 }]},
  options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:"bottom", labels:{ color:"#a8b3c7" } } }, scales:{ x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } }, y:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } } } }
});

// ---- Render DCF table ----
const d = DATA.dcfTable;
const dcfEl = document.querySelector("#dcfTable");

const dcfHead = `
  <thead>
    <tr>
      <th>Item</th>
      ${d.years.map(y=>`<th>${y}</th>`).join("")}
    </tr>
  </thead>
`;

function row(name, arr, fmt=(x)=>x){
  return `<tr><td>${name}</td>${arr.map(v => `<td>${v===null || v===undefined ? "" : fmt(v)}</td>`).join("")}</tr>`;
}

const dcfBody = `
  <tbody>
    ${row("Discount period", d.discountPeriod, (x)=> typeof x==="number" ? x.toFixed(2) : x)}
    ${row("Sales growth (%)", d.salesGrowthPct, (x)=> x.toFixed(2)+"%")}
    ${row("Net profit margin (%)", d.netProfitMarginPct, (x)=> x.toFixed(2)+"%")}
    ${row("Sales (m VND)", d.sales_mVND, (x)=> x.toLocaleString("en-US"))}
    ${row("Net profit (m VND)", d.netProfit_mVND, (x)=> x.toLocaleString("en-US"))}
    ${row("Net CAPEX (m VND)", d.netCapex_mVND, (x)=> x.toLocaleString("en-US"))}
    ${row("Δ Working capital (m VND)", d.deltaWC_mVND, (x)=> x.toLocaleString("en-US"))}
    ${row("Debt financing (m VND)", d.debtFinancing_mVND, (x)=> x.toLocaleString("en-US"))}
    ${row("FCFE (m VND)", d.fcfe_mVND, (x)=> x.toLocaleString("en-US"))}
    ${row("PV of FCFE (m VND)", d.pvFcfe_mVND, (x)=> x.toLocaleString("en-US"))}
  </tbody>
`;

dcfEl.innerHTML = dcfHead + dcfBody;

document.querySelector("#dcfSummary").textContent =
  `DCF output: Equity value ${d.equityValue_mVND_2022.toLocaleString("en-US")} (m VND), price/share ${fmtVND(d.pricePerShareVND)}, shares ${d.sharesOutstanding_m}m.`;

// ---- Render P/E table ----
const peEl = document.querySelector("#peTable");
const p = DATA.peTable;

peEl.innerHTML = `
  <thead>
    <tr>
      <th>Peer</th>
      <th>Firm P/E (Trailing)</th>
      <th>Firm P/E (Forward)</th>
      <th>Industry P/E (Trailing)</th>
      <th>Industry P/E (Forward)</th>
      <th>Relative P/E</th>
    </tr>
  </thead>
  <tbody>
    ${p.rows.map(r => `
      <tr>
        <td>${r.peer}</td>
        <td>${r.trailing}</td>
        <td>${r.forward}</td>
        <td>${r.indTrailing}</td>
        <td>${r.indForward}</td>
        <td>${r.relative}</td>
      </tr>
    `).join("")}
    <tr><td colspan="6" style="text-align:left;color:#a8b3c7;">Derived</td></tr>
    ${p.derived.map(x => `
      <tr>
        <td>${x.label}</td>
        <td colspan="5" style="text-align:right;">${typeof x.value==="number" ? x.value.toLocaleString("en-US") : x.value}</td>
      </tr>
    `).join("")}
  </tbody>
`;

const pePriceRow = p.derived.find(x => x.label.includes("price"));
document.querySelector("#peSummary").textContent =
  `Relative P/E output: implied 2023 price ${fmtVND(pePriceRow.value)}.`;
