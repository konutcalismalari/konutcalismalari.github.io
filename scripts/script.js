d3.csv('./data.csv').then(function(data) {
    renderTable(data); 
});

// Function to render the table
function renderTable(data) {
    const tableBody = document.querySelector('#dataTable tbody');

    data.forEach(function(row) {
        const tr = document.createElement('tr');

        Object.keys(row).forEach(function(key) {
            if (key === "Open Access") {
                return;
            }

            const td = document.createElement('td');

            if (key === "Link") {
                const link = document.createElement('a');
                link.href = row[key];
                link.textContent = '⟶';
                link.style.fontSize = "xx-large";

                if (row['Open Access'] === 'TRUE') {
                    link.classList.add("open-access-true");
                } else {
                    link.classList.add("open-access-false");
                }

                td.appendChild(link);

            } else {
                td.textContent = row[key];
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}



function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
        if (tr[i].id != 'tableHeader'){tr[i].style.display = "none";}
        }
    }
}

function sortTable(n) {
var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
table = document.getElementById("dataTable");
switching = true;
dir = "asc";
while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    if (dir == "asc") {
        x = x.innerText.toLowerCase();
        y = y.innerText.toLowerCase();
        if (x.localeCompare(y, 'en', {numeric: true}) > 0) {
        shouldSwitch = true;
        break;
        }
    } else if (dir == "desc") {
        x = x.innerText.toLowerCase();
        y = y.innerText.toLowerCase();
        if (x.localeCompare(y, 'en', {numeric: true}) < 0) {
        shouldSwitch = true;
        break;
        }
    }
    }
    if (shouldSwitch) {
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    switchcount++;
    } else {
    if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
    }
    }
}
}
