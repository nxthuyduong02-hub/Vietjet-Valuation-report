// assets/js/data.js
export const DATA = {
  asOf: "07/12/2022",
  ticker: "VJC",
  currentPriceVND: 106000,
  targetPriceVND: 129483,
  upsidePct: 22.15,
  valuationMix: { dcf: 0.85, pe: 0.15 },
  dcfPrice: 142894,
  pePrice: 53491,

  // Fig 12
  share2021: {
    labels: ["Vietnam Airlines", "Vietjet Air", "Bamboo", "Pacific Airlines", "Vasco", "Vietravel Airlines"],
    values: [39, 32, 20, 6, 2, 1.1]
  },

  // Fig 13
  shareH12022: {
    labels: ["Vietjet", "Vietnam Airlines", "Bamboo", "Pacific Airlines", "Others"],
    values: [43, 34, 13, 6, 4]
  },

  // Fig 1 (line chart)
  domesticShareTrend: {
    years: [2016, 2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Vietjet", values: [41, 42.9, 46, 43, 39, 41] },
      { name: "Vietnam Airlines", values: [44.2, 41.9, 39, 37, 39, 35] },
      { name: "Bamboo", values: [0, 0, 0, 6, 15, 16] },
      { name: "Pacific", values: [14.8, 14, 13, 14, 6, 5] },
      { name: "Other", values: [0, 1.2, 2, 0, 1, 3] }
    ]
  },
    // ===== BUSINESS PAGE DATA =====

  // Fig 2: Revenue breakdown (shares of total revenue)
  revenueBreakdownShare: {
    years: [2016, 2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Domestic transportation", values: [0.314417347, 0.254912982, 0.239413373, 0.212497152, 0.253218851, 0.154511338] },
      { name: "International (incl. charter)", values: [0.029161315, 0.057310791, 0.207570736, 0.290337232, 0.148481367, 0.011226636] },
      { name: "Ancillary revenue", values: [0.129200537, 0.129473213, 0.155654197, 0.223421329, 0.338666755, 0.391076088] },
      { name: "Non-core revenue", values: [0.522149744, 0.555446783, 0.390107385, 0.261539708, 0.237947785, 0.406150203] },
      { name: "Other revenue", values: [0.005071058, 0.002860619, 0.007254328, 0.012204579, 0.021685241, 0.037035735] }
    ]
  },

  // Fig 3: Core revenue breakdown (your data matches the core components)
  coreRevenueShare: {
    years: [2016, 2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Domestic transportation", values: [0.314417347, 0.254912982, 0.239413373, 0.212497152, 0.253218851, 0.154511338] },
      { name: "International (incl. charter)", values: [0.029161315, 0.057310791, 0.207570736, 0.290337232, 0.148481367, 0.011226636] },
      { name: "Ancillary revenue", values: [0.129200537, 0.129473213, 0.155654197, 0.223421329, 0.338666755, 0.391076088] }
    ]
  },

  // Fig 4: Routes (counts)
  routesByType: {
    years: [2016, 2017, 2018, 2019, 2020, 2021],
    domestic: [37, 38, 39, 44, 48, 53],
    international: [23, 44, 66, 95, 146, 150]
  },

    // ===== INDUSTRY PAGE DATA =====

  // Fig 5: Vietnam vs Southeast Asia GDP growth (%)
  gdpVNvsSEA: {
    years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    vietnam: [6.90, 7.20, 7.20, 2.90, 2.60, 7.00, 6.20, 6.60, 6.70, 6.70, 6.80],
    sea:    [5.40, 5.30, 4.70, -3.20, 3.10, 5.00, 4.60, 5.10, 5.00, 4.90, 4.90]
  },

  // Fig 6: Tourists by nationality (share %)
  touristsNationalityShare: {
    labels: ["China", "Taiwan", "South Korea", "Laos", "Japan", "Others"],
    values: [40.49, 7.79, 22.81, 6.46, 6.53, 15.93]
  },

  // Fig 8: Transport mode shares (1995–2020) (%)
  transportModeShares: {
    years: [
      1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,
      2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,
      2015,2016,2017,2018,2019,2020
    ],
    rail: [8.85,8.55,8.92,8.77,8.92,9.86,9.62,9.39,9.17,8.55,7.91,6.78,6.48,5.83,4.86,4.47,4.20,3.96,3.55,3.22,2.68,2.02,1.94,1.71,1.37,0.97],
    road: [66.13,68.17,68.67,69.62,69.75,68.92,65.67,65.05,68.63,66.97,66.91,68.17,68.70,69.35,72.19,70.66,71.76,73.23,72.53,69.67,68.14,67.54,67.11,63.28,62.43,75.42],
    water:[8.04,8.35,8.29,8.26,8.08,7.73,7.56,7.51,6.17,6.17,5.91,4.99,4.39,4.15,3.58,3.26,2.63,2.44,2.34,2.15,1.98,1.90,1.88,2.18,2.66,1.60],
    air:  [16.98,14.93,14.12,13.34,13.25,13.50,17.15,18.05,16.03,18.31,19.28,20.05,20.43,20.66,19.37,21.61,21.40,20.36,21.58,24.96,27.20,28.53,29.07,32.83,33.54,22.01]
  },

  // Fig 10: Global LCC share trend (%)
  globalLccShare: {
    years: [2015, 2016, 2017, 2018, 2019, 2020],
    values: [25.40, 25.50, 30.00, 31.00, 31.00, 35.00]
  },

  // Fig 11: Inflation VN vs US (%)
  inflationVNvsUS: {
    years: [2017, 2018, 2019, 2020, 2021],
    us: [2.13, 2.44, 1.81, 1.23, 4.70],
    vn: [3.52, 3.54, 2.80, 3.22, 1.83]
  },

    // ===== COMPETITIVE PAGE DATA =====
  fiveForces: {
    labels: [
      "Supplier power",
      "Buyer power",
      "Threat of entrants",
      "Threat of substitutes",
      "Rivalry intensity"
    ],
    // 1 (low) ... 5 (high)
    // Based on your narrative:
    // - Suppliers: high
    // - Buyers: low
    // - Entrants: low-to-moderate
    // - Substitutes: low (not emphasized in text)
    // - Rivalry: very intense
    scores: [4.5, 2.0, 2.5, 2.0, 4.5],
    scaleNote: "Qualitative 1–5 scoring derived from report narrative."
  },

  competitiveNarrative: {
    suppliers: [
      "High supplier power due to concentration (Airbus/Boeing; major engine makers).",
      "Large-scale contracts can improve payment terms and credit arrangements.",
      "Access to technical support reduces operational burden."
    ],
    buyers: [
      "Buyer power relatively low; VietJet builds brand to reduce elasticity.",
      "Customers are price-sensitive and switching costs are low (online info).",
      "Omnichannel/social presence and co-branding support loyalty."
    ],
    entrants: [
      "Threat of entrants limited by high capital requirements and regulation.",
      "Long preparation timeline and operating expertise are barriers.",
      "Example: repeated attempts by AirAsia to enter Vietnam market failed."
    ],
    substitutes: [
      "Substitutes exist (road/rail), but for long-distance travel air wins on time.",
      "Substitute pressure is secondary vs rivalry in the report conclusion."
    ],
    rivalry: [
      "Rivalry is intense with multiple carriers and a new entrant (Vietravel Airlines).",
      "High fixed costs increase competitive pressure.",
      "Key strategic focus: compete effectively against existing players."
    ]
  },

    // ===== EVALUATION PAGE DATA =====

  // Table 8 (DCF sensitivity): rows = TGR, cols = COE
  dcfSensitivity: {
    coe: [9.92, 10.42, 10.92, 11.42, 11.92],
    tgr: [4.27, 4.77, 5.27, 5.77, 6.27],
    // matrix[tgrIndex][coeIndex]
    values: [
      [153998, 138000, 124452, 112838, 102778],
      [166833, 148353, 132923, 119854, 108651],
      [182432, 160717, 142894, 128012, 115407],
      [201792, 175742, 154803, 137615, 123263],
      [226462, 194391, 169275, 149084, 132510]
    ],
    base: { coe: 10.92, tgr: 5.27, price: 142894 }
  },

  // Table 9 (P/E sensitivity): rows = domestic growth, cols = international growth
  peSensitivity: {
    intl: [177.9, 178.4, 178.9, 179.4, 179.9],
    domestic: [-20.81, -20.31, -19.81, -19.31, -18.81],
    values: [
      [53101, 53171, 53241, 53311, 53381],
      [53226, 53296, 53366, 53436, 53506],
      [53351, 53421, 53491, 53561, 53630],
      [53476, 53546, 53616, 53686, 53755],
      [53601, 53671, 53741, 53810, 53880]
    ],
    base: { intl: 178.9, domestic: -19.81, price: 53491 }
  },

  // Table 10 (Scenario)
  scenarios: {
    names: ["Best", "Base", "Worst"],
    avgRevenueGrowthPct: [48, 45, 40],
    avgNetMarginPct: [6.8, 6.0, 5.5],
    totalEV_billionVND: [86855, 77393, 60560],
    dcfTarget: [160364, 142894, 111815],
    peTarget: [78470, 53491, 40188],
    target1y: [148080, 129483, 101070],
    upsidePct: [39.7, 34.8, -4.7],
    recommendation: ["Buy", "Buy", "Sell"]
  },

    // ===== FINANCIALS PAGE DATA =====
  peers: ["Spring Airlines", "Cebu Air", "Jin Air", "AirAsia (CapitalA)", "VietJet", "Industry Median"],

  // Fig 16: peers revenue growth (2017–2021)
  peerRevenueGrowth: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [0.279434926, 0.220940859, 0.080917092, -0.366127881, 0.239121201] },
      { name: "Cebu Air", values: [0.035746221, 0.042468358, 0.16385511, -0.721746793, -0.299193343] },
      { name: "Jin Air", values: [0.267371421, 0.168504141, -0.148992169, -0.705228529, -0.062548815] },
      { name: "AirAsia (CapitalA)", values: [0.366668159, 0.167405364, 0.086018554, -0.739696817, -0.405487686] },
      { name: "VietJet", values: [0.504130208, 0.237739703, -0.055514296, -0.639935825, -0.276942537] },
      { name: "Industry Median", values: [0.279434926, 0.168504141, 0.080917092, -0.705228529, -0.276942537] }
    ]
  },

  // Fig 17: cost metrics (2017–2020)
  costMetrics: {
    years: [2017, 2018, 2019, 2020],
    fuelExpensePerASK: [1.56, 1.81, 1.56, 1.30],
    caskExFuel: [2.38, 2.38, 2.40, 2.73],
    cask: [3.95, 4.19, 3.96, 4.03]
  },

  // Fig 18: cargo revenue growth (index or trillion? keep as provided)
  cargoRevenueGrowth: {
    years: [2017, 2018, 2019, 2020, 2021],
    values: [0.809, 0.89, 0.989, 1.137, 3.362]
  },

  // Fig 19: Gross profit margin (%)
  peerGPM: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [12.1, 9.7, 11.4, -6.4, -4.4] },
      { name: "AirAsia (CapitalA)", values: [44.5, 28.8, 38.5, 2.3, 11.0] },
      { name: "Cebu Air", values: [33.5, 28.0, 41.3, 0.1, -30.4] },
      { name: "Jin Air", values: [17.4, 14.5, 3.7, -53.6, -58.7] },
      { name: "VietJet", values: [15.5, 14.0, 11.1, -7.7, -15.8] },
      { name: "Industry Median", values: [17.4, 14.5, 11.4, -6.4, -15.8] }
    ]
  },

  // Fig 20: Operating margin (%)
  peerOPM: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [14.6, 14.6, 15.6, -6.7, 0.1] },
      { name: "AirAsia (CapitalA)", values: [25.7, 18.1, 6.1, -179.2, -190.1] },
      { name: "Cebu Air", values: [14.9, 9.5, 14.9, -88.3, -146.5] },
      { name: "Jin Air", values: [10.9, 6.2, -5.4, -67.8, -74.9] },
      { name: "VietJet", values: [12.5, 10.8, 7.6, -11.1, 1.3] },
      { name: "Industry Median", values: [14.6, 10.8, 7.6, -67.8, -74.9] }
    ]
  },

  // Fig 22: Inventory turnover
  inventoryTurnover: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [119.9, 109.3, 89.7, 51.6, 52.6] },
      { name: "AirAsia (CapitalA)", values: [96.1, 86.8, 57.8, 22.3, 11.1] },
      { name: "Cebu Air", values: [18.5, 12.4, 9.8, 5.5, 5.4] },
      { name: "Jin Air", values: [1915.5, 964.1, 577.6, 287.9, 293.9] },
      { name: "VietJet", values: [176.5, 125.2, 73.9, 26.9, 19.6] },
      { name: "Industry Median", values: [119.9, 109.3, 73.9, 26.9, 19.6] }
    ]
  },

  // Fig 23: Total asset turnover
  assetTurnover: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [0.55, 0.56, 0.53, 0.30, 0.31] },
      { name: "AirAsia (CapitalA)", values: [0.44, 0.53, 0.54, 0.14, 0.09] },
      { name: "Cebu Air", values: [0.65, 0.62, 0.59, 0.16, 0.12] },
      { name: "Jin Air", values: [2.22, 1.99, 1.49, 0.43, 0.43] },
      { name: "VietJet", values: [1.64, 1.51, 1.15, 0.39, 0.27] },
      { name: "Industry Median", values: [0.65, 0.62, 0.59, 0.30, 0.27] }
    ]
  },

  // Fig 24: AP turnover (Jin Air missing in your data -> nulls)
  apTurnover: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [25.5, 23.0, 19.6, 14.1, 18.8] },
      { name: "AirAsia (CapitalA)", values: [96.1, 86.9, 57.9, 22.3, 11.1] },
      { name: "Cebu Air", values: [10.8, 9.9, 7.4, 4.4, 5.8] },
      { name: "Jin Air", values: [null, null, null, null, null] },
      { name: "VietJet", values: [74.5, 61.9, 31.7, 7.4, 4.5] },
      { name: "Industry Median", values: [50.01, 42.41, 25.68, 10.73, 8.41] }
    ]
  },

  // Fig 25: AR turnover
  arTurnover: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [6.3, 4.8, 6.8, 15.4, 15.6] },
      { name: "AirAsia (CapitalA)", values: [10.1, 11.0, 10.2, 2.3, 1.5] },
      { name: "Cebu Air", values: [33.8, 32.9, 31.9, 8.4, 6.4] },
      { name: "Jin Air", values: [31.4, 32.2, 26.9, 13.7, 64.7] },
      { name: "VietJet", values: [5.0, 5.4, 3.9, 1.0, 0.6] },
      { name: "Industry Median", values: [10.1, 11.0, 10.2, 8.4, 6.4] }
    ]
  },

  // Fig 26: Cash conversion cycle
  ccc: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [46.8, 64.5, 38.9, 5.0, 11.1] },
      { name: "AirAsia (CapitalA)", values: [17.7, 17.8, 17.6, 66.3, -35.6] },
      { name: "Cebu Air", values: [-3.1, 3.6, -0.4, 26.6, 61.5] },
      { name: "Jin Air", values: [11.9, 11.7, 14.2, 28.0, 6.9] },
      { name: "VietJet", values: [70.3, 65.3, 88.3, 333.4, 562.0] }
    ]
  },

  // Fig 27: Asset/Equity
  assetEquity: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [2.43, 1.99, 1.95, 2.29, 2.79] },
      { name: "AirAsia (CapitalA)", values: [2.69, 2.38, 5.69, -5.56, -3.12] },
      { name: "Cebu Air", values: [2.74, 3.23, 3.51, 5.66, 13.03] },
      { name: "Jin Air", values: [2.15, 1.95, 3.67, 5.67, 3.48] },
      { name: "VietJet", values: [2.99, 2.78, 3.28, 3.02, 3.07] },
      { name: "Industry Median", values: [2.69, 2.38, 3.51, 3.02, 3.07] }
    ]
  },

  // Fig 28: Debt/Equity
  debtEquity: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [1.05, 0.69, 0.64, 1.01, 1.47] },
      { name: "AirAsia (CapitalA)", values: [1.16, 0.15, 2.87, -6.92, -17.36] },
      { name: "Cebu Air", values: [1.03, 1.34, 1.66, 3.37, 8.96] },
      { name: "Jin Air", values: [0.20, 0.11, 1.52, 3.77, 2.00] },
      { name: "VietJet", values: [0.71, 0.39, 0.79, 0.76, 0.92] },
      { name: "Industry Median", values: [1.03, 0.39, 1.52, 1.01, 1.47] }
    ]
  },

  // Fig 29: ROE (DuPont) (%)
  roeDuPont: {
    years: [2017, 2018, 2019, 2020, 2021],
    series: [
      { name: "Spring Airlines", values: [16.0, 13.8, 13.0, -4.0, 0.3] },
      { name: "AirAsia (CapitalA)", values: [22.2, 24.8, -5.1, -311.3, -22.2] },
      { name: "Cebu Air", values: [21.6, 9.8, 21.5, -65.8, -149.5] },
      { name: "Jin Air", values: [47.8, 17.9, -24.7, -131.4, -98.6] },
      { name: "VietJet", values: [66.2, 43.3, 26.3, 0.5, 0.5] }
    ]
  },

    // ===== VALUATION PAGE DATA =====

  // Fig 31 / Fig 42: Total revenue projection + growth
  totalRevenueProj: {
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    revenue: [
      50602936007389, 18220292888526, 12874919725450,
      31644221949287, 50609329871051, 58085139446126,
      71753626081544, 81986647843573, 93053986931873
    ],
    growthPct: [-6, -64, -29, 146, 60, 15, 24, 14, 13]
  },

  // Fig 35: Domestic transportation revenue projection (trillion VND)
  domesticRevenueProj: {
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    revenueTrn: [10.75, 4.61, 1.99, 10.75, 8.62, 10.14, 11.93, 12.08, 12.24],
    growthPct: [-16.17, -57.09, -56.88, 440.54, -19.81, 17.64, 17.58, 1.30, 1.30]
  },

  // Fig 38: International transportation revenue projection (VND)
  intlRevenueProj: {
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    revenue: [
      14691916365734, 2705373999227, 144542035476,
      3563973331079, 9940069946593, 10903221798007,
      13167818320578, 15467852587044, 17897133598077
    ],
    growthPct: [32.11, -81.59, -94.66, 2365.70, 178.90, 9.69, 20.77, 17.47, 15.71]
  },

  // Fig 39: Cargo revenue projection (trillion VND)
  cargoRevenueProj: {
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    revenueTrn: [0.99, 1.14, 3.36, 0.89, 1.66, 1.82, 2.16, 2.45, 2.77],
    growthPct: [11.11, 15.00, 195.65, -73.45, 86.53, 9.52, 18.21, 13.90, 12.88]
  },

  // Fig 41: Ancillary (excluding cargo) projection (trillion VND)
  ancillaryExCargoProj: {
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    revenueTrn: [10.32, 5.03, 1.67, 5.89, 10.99, 12.04, 14.23, 16.21, 18.30],
    growthPct: [38.49, -51.21, -66.76, 252.28, 86.53, 9.52, 18.21, 13.90, 12.88]
  },

  // Fig 43: Core vs non-core weight projection (%)
  coreNonCoreWeightProj: {
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    corePct: [47.28, 44.17, 60.26, 72.63, 74.04, 55.68, 66.69, 61.69, 60.10, 57.81, 56.37, 55.03],
    nonCorePct: [52.72, 55.83, 39.74, 27.37, 25.96, 44.32, 33.31, 38.31, 39.90, 42.19, 43.63, 44.97]
  },

  // Fig 44: Margin projection (%)
  marginsProj: {
    years: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    operating: [12.53, 10.84, 7.60, -11.07, 1.34, 2.06, 3.19, 4.92, 8.00, 10.13, 13.50],
    gross: [15.50, 14.00, 11.10, -7.70, -15.80, -5.50, 0.40, 2.10, 11.10, 13.90, 17.50],
    net: [12.00, 10.00, 7.50, 0.40, 0.60, 1.13, 2.12, 3.99, 7.50, 9.49, 12.00]
  },

  // Fig 45: Net CAPEX (trillion VND)
  netCapex: {
    years: [2022, 2023, 2024, 2025, 2026, 2027],
    valuesTrn: [8.23, 13.16, 15.10, 18.66, 21.32, 24.19]
  },

  // Fig 46: Change in working capital (trillion VND)
  deltaWC: {
    years: [2022, 2023, 2024, 2025, 2026, 2027],
    valuesTrn: [2.44, 2.47, 0.97, 1.78, 1.33, 1.44]
  },

  // Fig 47: Net debt (trillion VND) and debt-to-asset ratio (%)
  netDebtAndDA: {
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    netDebtTrn: [5.69, -0.37, 4.04, 2.67, 3.91, 4.02, 5.11, 5.66, 6.41],
    debtToAssetPct: [24, 25, 30, 25, 25, 25, 25, 25, 25]
  },

  // Fig 32: Vietnam GDP growth used in model (%)
  gdpModel: {
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
    values: [2.9, 2.6, 8.2, 6.5, 6.6, 6.7, 6.7, 6.7]
  },

  // Fig 33: Airline market share in Vietnam transport market projection (%)
  airShareTransportProj: {
    years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    values: [21.01, 14.27, 15.57, 16.87, 18.17, 19.47, 20.77, 22.07]
  },

  // Fig 34: VJC market share projection (%)
  vjcShareProj: {
    years: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
    values: [39, 41, 43, 45.00, 46.00, 46.00, 46, 46]
  },

  // Fig 36: Routes in operation projection (counts)
  routesProj: {
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    domestic: [37, 38, 39, 47, 52, 49, 52, 52, 52, 52, 52, 52],
    intl: [50, 52, 66, 92, 95, 35, 65, 95, 101, 103, 105, 106]
  },

  // Fig 37: Fleet size projection
  fleetProj: {
    years: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
    values: [41, 52, 64, 69, 71, 76, 77, 79, 82, 83, 84, 85]
  },

  // Table 6: DCF model calculation (million VND)
  dcfTable: {
    years: ["2021","2022F","2023F","2024F","2025F","2026F","2027F","2028F"],
    discountPeriod: ["Past",0.07,1.07,2.07,3.07,4.07,5.07,6.07],
    salesGrowthPct: [-29.34,145.78,59.93,13.84,23.54,14.35,13.57,5.27],
    netProfitMarginPct: [0.60,1.13,2.12,3.99,7.50,9.49,12.00,9.00],
    sales_mVND: [12874920,31644222,50609330,58085139,71753626,81986648,93053987,97957932],
    netProfit_mVND: [77250,357580,1072918,2317597,5381522,7780533,11166478,8816214],
    netCapex_mVND: [76831,4834081,4884511,1925413,3520353,2635540,2850421,1263023],
    deltaWC_mVND: [8858628,2443062,2468549,973071,1779127,1331957,1440554,638311],
    debtFinancing_mVND: [4044488,1819286,1838265,724621,1324870,991874,1072744,475333],
    fcfe_mVND: [-4813721,-5100278,-4441877,143734,1406912,4804910,7948247,7390213],
    terminalValue_mVND_2028: 130888183,
    pvFcfe_mVND: [null,-5065651,-3977525,116040,1024055,3153165,82142871,null],
    equityValue_mVND_2022: 77392956,
    pricePerShareVND: 142894,
    sharesOutstanding_m: 541.611
  },

  // Table 7: P/E method
  peTable: {
    rows: [
      { peer:"Spring Airlines", trailing:-28.58, forward:45.6, indTrailing:9.19, indForward:19.8, relative:2.30 },
      { peer:"Jin Air", trailing:-6.71, forward:15.1, indTrailing:9.19, indForward:19.8, relative:0.76 },
      { peer:"AirAsia (CapitalA)", trailing:-1.07, forward:620, indTrailing:10.6, indForward:14.06, relative:44.10 },
      { peer:"Vietjet", trailing:47.21, forward:20.91, indTrailing:11.28, indForward:14.37, relative:1.46 },
      { peer:"Median", trailing:-3.89, forward:33.25, indTrailing:9.895, indForward:17.08, relative:1.88 }
    ],
    derived: [
      { label:"Adjusted median industry P/E", value:32.104 },
      { label:"Adjusted P/E for VJC", value:27.002 },
      { label:"Forward EPS 2023 (VND)", value:1981 },
      { label:"VJC price 2023 (VND)", value:53491 }
    ]
  },

    // ===== APPENDICES DATA =====
  appendices: {
    appendix1: {
      title: "APPENDIX 1: Domestic transportation revenue projection",
      tables: [
        {
          id: "app1_table1_domestic_calc",
          title: "Table 1: Domestic Transportation Calculation",
          columns: ["2022F","2023F","2024F","2025F","2026F","2027F"],
          rows: [
            { label: "Increase in GDP growth rate", values: [null, -1.7, 0.1, 0.1, 0, 0] },
            { label: "Air spending growth", values: ["-22.61%","15.34%","16.28%","0.00%","0.00%","0.00%"] },
            { label: "Air market share gain", values: ["1.30%","1.30%","1.30%","1.30%","1.30%","1.30%"] },
            { label: "Total revenue growth", values: ["-21.31%","16.64%","17.58%","1.30%","1.30%","1.30%"] },

            { label: "VietJet market share gain", values: ["2%","1%","0%","0%","0%","0%"] },
            { label: "Domestic revenue growth", values: ["440.54%","-19.81%","17.64%","17.58%","1.30%","1.30%"] },
            { label: "CAGR", values: ["2.62%","","","","",""] }
          ]
        }
      ]
    },

    appendix2: {
      title: "APPENDIX 2: International transportation revenue projection",
      tables: [
        {
          id: "app2_table2_gdp_capita",
          title: "Table 2: Estimation of GDP and GDP/capita (2022–2027)",
          columns: ["2022F","2023F","2024F","2025F","2026F","2027F"],
          rows: [
            { label: "GDP (billion VND)", values: [9654105, 10281622, 10960209, 11694543, 12478077, 13314108] },
            { label: "GDP growth", values: ["8.20%","6.50%","6.60%","6.70%","6.70%","6.70%"] },
            { label: "Population (million)", values: [98.6, 98.85, 99.49, 100.1, 100.67, 101.22] },
            { label: "GDP per capita (VND)", values: [97911815, 104012362, 110163926, 116828601, 123950303, 131536337] },
            { label: "GDP per capita growth", values: ["7.54%","6.23%","5.91%","6.05%","6.10%","6.12%"] }
          ]
        },

        {
          id: "app2_table3_hist_multiplier",
          title: "Table 3: Outbound travel multiplier & air-travel spend (2016–2021)",
          columns: ["2016","2017","2018","2019","2020","2021"],
          rows: [
            { label: "Outbound spending tourism (bn VND)", values: [550981, 628229, 743238, 640331, 130523, 95969] },
            { label: "GDP (bn VND)", values: [6143635, 6750811, 7384788, 7988553, 8355733, 8922463] },
            { label: "GDP growth", values: ["6.75%","6.90%","7.20%","7.20%","2.90%","2.60%"] },
            { label: "Propensity to travel (spend/GDP)", values: ["8.97%","9.31%","10.06%","8.02%","1.56%","1.08%"] },
            { label: "Population (million)", values: [92.7, 93.67, 94.67, 95.77, 97.47, 98.18] },
            { label: "GDP per capita (VND)", values: [66274377, 72070146, 78005576, 83413935, 85726204, 90878621] },
            { label: "GDP per capita growth", values: ["6.35%","8.75%","8.24%","6.93%","2.77%","6.01%"] },
            { label: "Outbound travel multiplier", values: [1.41, 1.06, 1.22, 1.16, 0.56, 0.18] },
            { label: "Outbound spending on air travel (bn VND)", values: ["",111824.76,130973.38,111129.49,25556.44,18363.73] },
            { label: "Weight of air travel spend", values: ["","0.178","0.176","0.174","0.196","0.191"] },
            { label: "Average multiplier (2022–2027)", values: ["1.21","","","","",""] },
            { label: "Average air-spend weight", values: ["0.183","","","","",""] }
          ]
        },

        {
          id: "app2_table4_outbound_air_spend",
          title: "Table 4: Factor 1 — Outbound spending on air travel (2022–2027)",
          columns: ["2022F","2023F","2024F","2025F","2026F","2027F"],
          rows: [
            { label: "Avg outbound travel multiplier", values: [1.21,1.21,1.21,1.21,1.21,1.21] },
            { label: "GDP/capita growth", values: ["7.54%","6.23%","5.91%","6.05%","6.10%","6.12%"] },
            { label: "Propensity to travel", values: ["9.36%","7.54%","7.16%","7.32%","7.38%","7.41%"] },
            { label: "GDP (bn VND)", values: [9654105, 10281622, 10960209, 11694543, 12478077, 13314108] },
            { label: "Outbound spending tourism (bn VND)", values: [904041, 775141, 784341, 856068, 920381, 985972] },
            { label: "Avg weight air travel spend", values: [0.183,0.183,0.183,0.183,0.183,0.183] },
            { label: "Outbound spending on air travel (bn VND)", values: [165440, 141851, 143534, 156660, 168430, 180433] },
            { label: "Outbound air-travel spend growth", values: ["800.90%","-14.26%","1.19%","9.14%","7.51%","7.13%"] }
          ]
        },

        {
          id: "app2_table5_weights_inout",
          title: "Table 5: Weights of outbound vs inbound (historical)",
          columns: ["2017","2018","2019","2020","2021","2022F"],
          rows: [
            { label: "Outbound departures (k trips)", values: [9084,10879,11604,1182,896,11000] },
            { label: "Outbound share of total", values: ["48.30%","48.29%","46.14%","30.10%","91.05%","80.62%"] },
            { label: "Inbound arrivals (k trips)", values: [9722,11651,13547,2743,88,2667] },
            { label: "Inbound share of total", values: ["51.70%","51.71%","53.86%","70%","9%","20%"] },
            { label: "Total intl trips (k)", values: [18806,22530,25151,3925,984,13644] },
            { label: "Weighted growth (given)", values: ["","19.81%","11.84%","-82.78%","-30.65%","1476.08%"] },
            { label: "Avg outbound weight (2023–2027)", values: ["47.58%","","","","",""] },
            { label: "Avg inbound weight (2023–2027)", values: ["52.42%","","","","",""] }
          ]
        },

        {
          id: "app2_table6_factor2_forecast",
          title: "Table 6: Factor 2 — Forecast inbound/outbound weighted growth",
          columns: ["2023F","2024F","2025F","2026F","2027F"],
          rows: [
            { label: "Outbound departures growth", values: ["-14.26%","1.19%","9.14%","7.51%","7.13%"] },
            { label: "Outbound departures (k trips)", values: [9432, 9544, 10416, 11199, 11997] },
            { label: "Outbound weight", values: ["47.58%","47.58%","47.58%","47.58%","47.58%"] },
            { label: "Total intl trips (k)", values: [19823, 20058, 21892, 23537, 25214] },
            { label: "Inbound arrivals (k trips)", values: [10391, 10514, 11476, 12338, 13217] },
            { label: "Inbound arrivals growth", values: ["289.57%","1.19%","9.14%","7.51%","7.13%"] },
            { label: "Inbound weight", values: ["52.42%","52.42%","52.42%","52.42%","52.42%"] },
            { label: "Weighted growth rate", values: ["145.01%","1.19%","9.14%","7.51%","7.13%"] }
          ]
        },

        {
          id: "app2_table7_routes_factor3",
          title: "Table 7: Factor 3 — International routes in operation (2020–2027F)",
          columns: ["2020","2021","2022F","2023F","2024F","2025F","2026F","2027F"],
          rows: [
            { label: "International routes in operation", values: [95, 35, 65, 95, 101, 103, 105, 106] },
            { label: "Growth rate of routes", values: ["3.26%","-63.16%","85.71%","46.15%","6.32%","1.98%","1.94%","0.95%"] }
          ]
        },

        {
          id: "app2_table8_intl_growth_final",
          title: "Table 8: Final international transportation revenue growth",
          columns: ["2022F","2023F","2024F","2025F","2026F","2027F"],
          rows: [
            { label: "Outbound air-spend growth", values: ["800.90%","-14.26%","1.19%","9.14%","7.51%","7.13%"] },
            { label: "Weighted growth intl arrivals/departures", values: ["1476.08%","145.01%","1.19%","9.14%","7.51%","7.13%"] },
            { label: "Routes in operation growth", values: ["85.71%","46.15%","6.32%","1.98%","1.94%","0.95%"] },
            { label: "VJC intl market share gain (assumption)", values: ["3.00%","2.00%","1.00%","0.50%","0.50%","0.50%"] },
            { label: "VJC intl revenue growth (sum)", values: ["2365.70%","178.90%","9.69%","20.77%","17.47%","15.71%"] },
            { label: "Intl transportation revenue (bn VND)", values: [3564, 9940, 10903, 13168, 15468, 17897] },
            { label: "CAGR", values: ["38.09%","","","","",""] }
          ]
        }
      ]
    },

    appendix3: {
      title: "APPENDIX 3: Scenario analysis",
      tables: [
        {
          id: "app3_base_inputs",
          title: "Base case inputs (2022F–2028F)",
          columns: ["2021","2022F","2023F","2024F","2025F","2026F","2027F","2028F","Average"],
          rows: [
            { label: "Discount period", values: ["Past",0.07,1.07,2.07,3.07,4.07,5.07,6.07,""] },
            { label: "Revenue growth rate", values: ["-29.34%","145.78%","59.93%","13.84%","23.54%","14.35%","13.57%","5.27%","45%"] },
            { label: "Net profit margin", values: ["0.60%","1.13%","2.12%","3.99%","7.50%","9.49%","12.00%","9.00%","6%"] },
            { label: "EPS (VND)", values: ["",660,1981,4279,9936,14366,20617,"",""] }
          ]
        },
        {
          id: "app3_best_inputs",
          title: "Table 9: Assumptions for best case scenario",
          columns: ["2021","2022F","2023F","2024F","2025F","2026F","2027F","2028F","Average"],
          rows: [
            { label: "Discount period", values: ["Past",0.07,1.07,2.07,3.07,4.07,5.07,6.07,""] },
            { label: "Revenue growth rate", values: ["-29.34%","150.00%","63.00%","20.00%","24.00%","15.00%","14.00%","5.27%","48%"] },
            { label: "Net profit margin", values: ["0.60%","2.00%","3.00%","5.00%","8.00%","10.00%","12.50%","9.00%","6.8%"] },
            { label: "EPS (VND)", values: ["",1188,2906,5812,11531,16576,23621,"",""] }
          ]
        },
        {
          id: "app3_worst_inputs",
          title: "Table 10: Assumptions for worst case scenario",
          columns: ["2021","2022F","2023F","2024F","2025F","2026F","2027F","2028F","Average"],
          rows: [
            { label: "Discount period", values: ["Past",0.07,1.07,2.07,3.07,4.07,5.07,6.07,""] },
            { label: "Revenue growth rate", values: ["-29.34%","135.00%","54.00%","12.00%","19.00%","8.00%","9.00%","5.27%","40%"] },
            { label: "Net profit margin", values: ["0.60%","0.84%","1.73%","3.71%","7.05%","8.72%","11.17%","9.00%","5.5%"] },
            { label: "EPS (VND)", values: [469,1488,3575,8084,10798,15077,469,"",""] }
          ]
        },
        {
          id: "app3_valuation_results",
          title: "Scenario valuation results (Best/Base/Worst)",
          columns: ["Best","Base","Worst"],
          rows: [
            { label: "Average revenue growth", values: ["48%","45%","40%"] },
            { label: "Average net income margin", values: ["6.8%","6.0%","5.5%"] },
            { label: "Total EV (billion VND)", values: [86855,77393,60560] },
            { label: "DCF target price (85%)", values: [160364,142894,111815] },
            { label: "P/E target price (15%)", values: [78470,53491,40188] },
            { label: "1-year target price (VND)", values: [148080,129483,101070] },
            { label: "Upside/Downside", values: ["39.7%","34.8%","-4.7%"] },
            { label: "Recommendation", values: ["Buy","Buy","Sell"] }
          ]
        }
      ]
    }
  },

};

