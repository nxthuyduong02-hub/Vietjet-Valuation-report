import { ORANGE, applyChartDefaults } from "./theme.js";
applyChartDefaults();
import { DATA } from "./data.js";
import { renderTopRibbon, setActiveNav } from "./common.js";

renderTopRibbon();
setActiveNav("competitive");

const COLORS = {
  red: "#CE242C",
  lime:"#B9CC25",
  amber:"#f59e0b",
  blue:"#60a5fa",
  gray:"#94a3b8",
  slate:"#64748b",
  purple:"#a78bfa"
};

// ---- Fig 14 radar ----
const radarCtx = document.getElementById("fiveForcesRadar");
new Chart(radarCtx, {
  type: "radar",
  data: {
    labels: DATA.fiveForces.labels,
    datasets: [{
      label: "Force intensity (1–5)",
      data: DATA.fiveForces.scores,
      borderColor: COLORS.red,
      backgroundColor: "rgba(206,36,44,.18)",
      pointBackgroundColor: COLORS.lime,
      pointBorderColor: "rgba(255,255,255,.75)",
      pointRadius: 3,
      borderWidth: 2
    }]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{ position:"bottom", labels:{ color:"#a8b3c7" } },
      tooltip:{ callbacks:{ label:(c)=> `${c.label}: ${c.formattedValue} / 5` } }
    },
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: { stepSize: 1, color: "#a8b3c7", backdropColor: "rgba(0,0,0,0)" },
        grid: { color: "rgba(255,255,255,.08)" },
        angleLines: { color: "rgba(255,255,255,.08)" },
        pointLabels: { color: "#e7edf6", font: { size: 12 } }
      }
    }
  }
});

document.querySelector("#forceNote").textContent = DATA.fiveForces.scaleNote;

// ---- Reuse Fig 12 & Fig 13 donuts ----
function makeDonut(canvasId, labels, values){
  const ctx = document.getElementById(canvasId);
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: [COLORS.red, COLORS.lime, COLORS.amber, COLORS.blue, COLORS.gray, COLORS.slate],
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

// ---- Force text ----
const N = DATA.competitiveNarrative;

document.querySelector("#sup1").textContent = N.suppliers[0];
document.querySelector("#sup2").textContent = N.suppliers[1];
document.querySelector("#sup3").textContent = N.suppliers[2];

document.querySelector("#buy1").textContent = N.buyers[0];
document.querySelector("#buy2").textContent = N.buyers[1];
document.querySelector("#buy3").textContent = N.buyers[2];

document.querySelector("#ent1").textContent = N.entrants[0];
document.querySelector("#ent2").textContent = N.entrants[1];
document.querySelector("#ent3").textContent = N.entrants[2];

document.querySelector("#sub1").textContent = N.substitutes[0];
document.querySelector("#sub2").textContent = N.substitutes[1];

document.querySelector("#riv1").textContent = N.rivalry[0];
document.querySelector("#riv2").textContent = N.rivalry[1];
document.querySelector("#riv3").textContent = N.rivalry[2];
