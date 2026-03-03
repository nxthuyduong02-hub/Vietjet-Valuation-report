// assets/js/appendices.js
import { DATA } from "./data.js";
import { renderTopRibbon, setActiveNav } from "./common.js";
import { tableToCSV, downloadCSV } from "./appendix-utils.js";

renderTopRibbon();
setActiveNav("appendices");

const acc = document.querySelector("#appendixAccordion");
const allTableIds = [];

function renderTable(table){
  const tableId = table.id;
  allTableIds.push(tableId);

  const headers = table.columns || [];
  const rows = table.rows || [];

  const html = `
    <div class="acc-item">
      <button class="acc-head" data-acc="${tableId}">
        <div>${table.title}</div>
        <span>${tableId}</span>
      </button>
      <div class="acc-body" id="body-${tableId}">
        <div class="btn-row">
          <button class="btn" data-download="${tableId}">Download CSV</button>
        </div>
        <div style="overflow:auto; border-radius:12px; max-height: 420px;">
          <table class="table" id="${tableId}">
            <thead>
              <tr>
                <th>Item</th>
                ${headers.map(h => `<th>${h}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${rows.map(r => `
                <tr>
                  <td>${r.label}</td>
                  ${(r.values || []).map(v => `<td>${formatCell(v)}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
  return html;
}

function formatCell(v){
  if (v === null || v === undefined) return "";
  if (typeof v === "number"){
    // keep decimals as-is, format big ints with commas
    if (Math.abs(v) >= 10000 && Number.isInteger(v)) return v.toLocaleString("en-US");
    return String(v);
  }
  return String(v);
}

function renderAppendixGroup(group){
  const tablesHTML = group.tables.map(t => renderTable(t)).join("");
  return `
    <div class="acc-item">
      <button class="acc-head" data-acc="${group.title}">
        <div>${group.title}</div>
        <span>${group.tables.length} tables</span>
      </button>
      <div class="acc-body" id="body-${cssSafe(group.title)}">
        ${tablesHTML}
      </div>
    </div>
  `;
}

function cssSafe(s){
  return s.replace(/[^a-zA-Z0-9_-]/g, "_");
}

// Build accordion content (3 appendices)
const A = DATA.appendices;
acc.innerHTML = [
  renderAppendixGroup(A.appendix1),
  renderAppendixGroup(A.appendix2),
  renderAppendixGroup(A.appendix3)
].join("");

// Accordion toggle
acc.addEventListener("click", (e) => {
  const head = e.target.closest(".acc-head");
  if (!head) return;

  const key = head.dataset.acc;

  // If it matches an appendix group title, open that group
  const bodyId = `body-${cssSafe(key)}`;
  let body = document.getElementById(bodyId);

  // If not a group title, it might be a table id
  if (!body){
    body = document.getElementById(`body-${key}`);
  }
  if (!body) return;

  body.classList.toggle("open");
});

// Per-table download
acc.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-download]");
  if (!btn) return;

  const tableId = btn.dataset.download;
  const tableEl = document.getElementById(tableId);
  if (!tableEl) return;

  const csv = tableToCSV(tableEl);
  downloadCSV(csv, `${tableId}.csv`);
});

// Download ALL (combined)
document.getElementById("downloadAll").addEventListener("click", () => {
  let combined = "\ufeff";
  allTableIds.forEach((id, i) => {
    const tableEl = document.getElementById(id);
    if (!tableEl) return;
    const csv = tableToCSV(tableEl).replace(/^\ufeff/, "");
    combined += `# ${id}\n` + csv + "\n\n";
  });
  downloadCSV(combined, `VJC_Appendices_AllTables.csv`);
});
