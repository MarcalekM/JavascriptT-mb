let webAppsData = [
    {"name": "Google Search", "users": "2 Billion"},
    {"name": "YouTube", "users": "1.9 Billion"},
    {"name": "Facebook", "users": "2.8 Billion"},
    {"name": "Gmail", "users": "1.5 Billion"},
    {"name": "WhatsApp Web", "users": "2 Billion"},
    {"name": "Amazon", "users": "300 Million"},
    {"name": "Twitter", "users": "330 Million"},
    {"name": "Zoom", "users": "300 Million"},
    {"name": "LinkedIn", "users": "740 Million"},
    {"name": "Google Drive", "users": "1 Billion"}
];

// Függvény az adatok táblázatba helyezéséhez
function populateTable(data) {
    const tableBody = document.getElementById("webAppsTable");
    tableBody.innerHTML = '';

    data.forEach(app => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const usersCell = document.createElement('td');

        nameCell.textContent = app.name;
        usersCell.textContent = app.users;

        row.appendChild(nameCell);
        row.appendChild(usersCell);

        tableBody.appendChild(row);
    });
}

// Eseménykezelő a "Sort by Most Users" gombhoz
document.getElementById("mostUsersBtn").addEventListener("click", () => {
    const sortedData = webAppsData.slice().sort((a, b) => parseFloat(b.users) - parseFloat(a.users));
    populateTable(sortedData);
});

// Eseménykezelő a "Sort by Fewest Users" gombhoz
document.getElementById("fewestUsersBtn").addEventListener("click", () => {
    const sortedData = webAppsData.slice().sort((a, b) => parseFloat(a.users) - parseFloat(b.users));
    populateTable(sortedData);
});

// Oldal betöltésekor az alapértelmezett adatok megjelenítése
populateTable(webAppsData);