const exportButton = document.querySelector(".export-btn");

const exportHtmlTableToCSV = (selector) =>{
    // parse table for data
    const table = document.querySelector(selector);
    const rows = Array.from(table.rows);
    const teamMembers = rows.map((row) =>
    Array.from(row.cells).map(
        // if cell have multiple values use pipe symbol
        (cell) => cell.innerText.replace(/\n/g, '|')
    )
    );

    // construct CSV
    const CsvContent =
    "data:text/csv;charset=utf-8," + teamMembers.map((teamMember) =>
    Object.values(teamMember).join(',')).join('\n');

    // name file and download
    const endcodeUri = endcodeUri(CsvContent);
    const link = document.createElement("a");
    link.setAttribute("href", endcodeUri);
    link.setAttribute("download", "team-members.csv");
    document.body.appendChild(link);
    link.click();
};

exportButton.addEventListener("click", function (){
    exportHtmlTableToCSV(".tale-widget > table");
});