document.addEventListener("DOMContentLoaded", () => {
    loadDropdownOptions(); // Populate Process dropdown
    loadFabOptions(); // Populate Fab dropdown
    loadDataTable(); // Load sample data into the table
});

// Function to toggle the visibility of dropdown menus
function toggleDropdown(menuId) {
    const dropdownMenu = document.getElementById(menuId);
    if (dropdownMenu) {
        const isOpen = dropdownMenu.classList.contains("show");
        // Close all dropdowns before toggling the selected one
        document.querySelectorAll(".dropdown-menu").forEach((menu) => menu.classList.remove("show"));
        if (!isOpen) {
            dropdownMenu.classList.add("show");
        }
    }
}

// Function to populate Process dropdown (multi-select with checkboxes)
function loadDropdownOptions() {
    const dropdownMenu = document.getElementById("processDropdownMenu");
    const processes = ["1272", "1273", "1274", "1275"]; // Example process options

    processes.forEach((process) => {
        const option = document.createElement("label");
        option.className = "dropdown-option"; // Add a class for styling
        option.innerHTML = `
            <input type="checkbox" value="${process}" /> ${process}
        `;
        dropdownMenu.appendChild(option);
    });
}

// Function to populate Fab dropdown (single-select)
function loadFabOptions() {
    const dropdownMenu = document.getElementById("fabDropdownMenu");
    const fabs = ["F42", "F44", "F46", "F48"]; // Example Fab options

    fabs.forEach((fab) => {
        const option = document.createElement("div");
        option.className = "dropdown-option"; // Add a class for styling
        option.textContent = fab;
        option.onclick = () => selectFab(fab); // Handle Fab selection
        dropdownMenu.appendChild(option);
    });
}

// Function to handle Fab selection
function selectFab(selectedFab) {
    const fabDropdownButton = document.getElementById("fabDropdownButton");
    fabDropdownButton.textContent = selectedFab; // Update button text
    toggleDropdown("fabDropdownMenu"); // Close dropdown
}

// Function to apply selected filters
function applyFilters() {
    // Get selected Processes (multi-select)
    const selectedProcesses = Array.from(
        document.querySelectorAll("#processDropdownMenu input[type='checkbox']:checked")
    ).map((checkbox) => checkbox.value);

    // Get selected Fab (single-select)
    const fabDropdownButton = document.getElementById("fabDropdownButton");
    const selectedFab = fabDropdownButton.textContent !== "Select Fab" ? fabDropdownButton.textContent : null;

    alert(`Selected Processes: ${selectedProcesses.join(", ")}\nSelected Fab: ${selectedFab}`);
}

// Ensure dropdowns close when clicking outside
window.onclick = function (event) {
    if (
        !event.target.closest("#processDropdownContainer") &&
        !event.target.closest("#fabDropdownContainer") &&
        !event.target.matches(".dropdown button")
    ) {
        document.querySelectorAll(".dropdown-menu").forEach((menu) => menu.classList.remove("show"));
    }
};

// Function to populate sample data into the table
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
