
function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    table = document.getElementById("main-table");
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
table = document.getElementById("main-table");
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