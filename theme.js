export const ORANGE = {
  o900: "#7A2E00",
  o800: "#9A3B00",
  o700: "#B94A00",
  o600: "#D95A00",
  o500: "#F36A1A",   // main orange
  o400: "#FF8A3D",
  o300: "#FFAA73",
  o200: "#FFD1B5",
  o100: "#FFE7D9"
};

export function applyChartDefaults(){
  // Global defaults (fonts + default colors)
  Chart.defaults.color = "#a8b3c7";
  Chart.defaults.borderColor = "rgba(255,255,255,.10)";
  Chart.defaults.backgroundColor = "rgba(243,106,26,.25)";

  // Make lines/bar borders look crisp
  Chart.defaults.elements.line.borderWidth = 2;
  Chart.defaults.elements.point.radius = 2;

  // Dark grid styling (consistent)
  Chart.defaults.scale.grid.color = "rgba(255,255,255,.06)";
  Chart.defaults.scale.ticks.color = "#a8b3c7";
}
