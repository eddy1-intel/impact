// script.js

document.addEventListener("DOMContentLoaded", () => {
    loadDropdownOptions();
    loadDataTable();
});

// Dropdown toggle
function toggleDropdown() {
    const dropdownMenu = document.getElementById("processDropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

// Populate dropdown
function loadDropdownOptions() {
    const dropdownMenu = document.getElementById("processDropdownMenu");
    const processes = ["1272", "1273", "1274", "1275"]; // Example processes

    processes.forEach((process) => {
        const option = document.createElement("label");
        option.innerHTML = `<input type="checkbox" value="${process}"> ${process}`;
        dropdownMenu.appendChild(option);
    });
}

// Apply selected filters
function applyFilters() {
    const selectedProcesses = Array.from(
        document.querySelectorAll("#processDropdownMenu input[type='checkbox']:checked")
    ).map((checkbox) => checkbox.value);

    alert(`Selected Processes: ${selectedProcesses.join(", ")}`);
}

// Load data table
function loadDataTable() {
    const tableData = document.getElementById("tableData");

    const data = [
        { action: "Edit", segment: "SSAFl", ceid: "DVDnn", availReq: "4/6", invStg: "1802/9", wse: "5145", userInput: "Details 1", status: "Limiter" },
        { action: "Edit", segment: "PLMnx", ceid: "PLMix", availReq: "3/4", invStg: "857/2", wse: "4788", userInput: "Details 2", status: "Limiter" }
    ];

    data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.action}</td>
            <td>${row.segment}</td>
            <td>${row.ceid}</td>
            <td>${row.availReq}</td>
            <td>${row.invStg}</td>
            <td>${row.wse}</td>
            <td>${row.userInput}</td>
            <td>${row.status}</td>
        `;
        tableData.appendChild(tr);
    });
}

// Popup functionality
function showPopup(title) {
    const popup = document.getElementById("popup");
    document.getElementById("popupTitle").innerText = title;
    popup.classList.add("show");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
}
