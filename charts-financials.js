import { ORANGE, applyChartDefaults } from "./theme.js";
applyChartDefaults();
import { DATA } from "./data.js";
import { renderTopRibbon, setActiveNav } from "./common.js";

renderTopRibbon();
setActiveNav("financials");

const COLORS = {
  red: "#CE242C",
  lime:"#B9CC25",
  amber:"#f59e0b",
  blue:"#60a5fa",
  gray:"#94a3b8",
  slate:"#64748b",
  purple:"#a78bfa",
  cyan:"#22d3ee"
};

function linePeers(canvasId, metric, { percent=false, emphasizeMedian=true } = {}){
  const ctx = document.getElementById(canvasId);
  const years = metric.years;

  const palette = [COLORS.gray, COLORS.blue, COLORS.purple, COLORS.amber, COLORS.red, COLORS.lime];
  const datasets = metric.series.map((s, i) => {
    const isMedian = s.name.toLowerCase().includes("median");
    const isVJC = s.name.toLowerCase().includes("vietjet");

    return {
      label: s.name,
      data: s.values,
      spanGaps: true,
      borderColor: isVJC ? COLORS.red : (isMedian ? COLORS.lime : palette[i % palette.length]),
      backgroundColor: "transparent",
      borderWidth: isVJC ? 3 : (isMedian && emphasizeMedian ? 3 : 2),
      borderDash: (isMedian && emphasizeMedian) ? [6,4] : undefined,
      tension: 0.25,
      pointRadius: (isVJC || isMedian) ? 2 : 1
    };
  });

  return new Chart(ctx, {
    type: "line",
    data: { labels: years, datasets },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
        tooltip:{
          callbacks:{
            label:(c)=>{
              const v = c.parsed.y;
              return percent ? `${c.dataset.label}: ${v.toFixed(1)}%` : `${c.dataset.label}: ${v}`;
            }
          }
        }
      },
      scales:{
        x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
        y:{
          ticks:{ color:"#a8b3c7", callback:(v)=> percent ? `${v}%` : v },
          grid:{ color:"rgba(255,255,255,.06)" }
        }
      }
    }
  });
}

// Fig 16 (convert decimals to %)
const revGrowthPct = {
  years: DATA.peerRevenueGrowth.years,
  series: DATA.peerRevenueGrowth.series.map(s => ({ name:s.name, values: s.values.map(v => v*100) }))
};
linePeers("revGrowth", revGrowthPct, { percent:true });

// Fig 18 cargo growth
new Chart(document.getElementById("cargoGrowth"), {
  type: "bar",
  data: {
    labels: DATA.cargoRevenueGrowth.years,
    datasets: [{
      label: "Cargo revenue (as provided)",
      data: DATA.cargoRevenueGrowth.values,
      backgroundColor: "rgba(185,204,37,.55)",
      borderColor: COLORS.lime,
      borderWidth: 1
    }]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
      tooltip:{ callbacks:{ label:(c)=> `${c.dataset.label}: ${c.parsed.y}` } }
    },
    scales:{
      x:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
      y:{ ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } }
    }
  }
});

// Fig 17 cost metrics (stacked bars + line) using mixed chart [web:114]
new Chart(document.getElementById("costMetrics"), {
  type: "bar",
  data: {
    labels: DATA.costMetrics.years,
    datasets: [
      {
        type: "bar",
        label: "Fuel expense per ASK",
        data: DATA.costMetrics.fuelExpensePerASK,
        backgroundColor: "rgba(206,36,44,.55)",
        borderColor: COLORS.red,
        borderWidth: 1,
        stack: "cask"
      },
      {
        type: "bar",
        label: "CASK ex-fuel",
        data: DATA.costMetrics.caskExFuel,
        backgroundColor: "rgba(185,204,37,.45)",
        borderColor: COLORS.lime,
        borderWidth: 1,
        stack: "cask"
      },
      {
        type: "line",
        label: "CASK (total)",
        data: DATA.costMetrics.cask,
        borderColor: "#e7edf6",
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.25,
        yAxisID: "y"
      }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{ position:"bottom", labels:{ color:"#a8b3c7" } }
    },
    scales:{
      x:{ stacked:true, ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } },
      y:{ stacked:true, ticks:{ color:"#a8b3c7" }, grid:{ color:"rgba(255,255,255,.06)" } }
    }
  }
});

// Fig 19/20 margins
linePeers("gpm", DATA.peerGPM, { percent:true });
linePeers("opm", DATA.peerOPM, { percent:true });

// Fig 22–25 turnover
linePeers("invTurn", DATA.inventoryTurnover);
linePeers("assetTurn", DATA.assetTurnover);
linePeers("apTurn", DATA.apTurnover);
linePeers("arTurn", DATA.arTurnover);

// Fig 26 CCC
linePeers("ccc", DATA.ccc);

// Fig 27–28 leverage
linePeers("ae", DATA.assetEquity);
linePeers("de", DATA.debtEquity);

// Fig 29 ROE
linePeers("roe", DATA.roeDuPont, { percent:true, emphasizeMedian:false });
