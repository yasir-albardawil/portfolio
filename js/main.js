function current_year() {
    let date = new Date();
    let current_year = date.getFullYear();
    document.getElementById("current-year").innerHTML = current_year.toString();
}

// Call the current_year function
current_year();
