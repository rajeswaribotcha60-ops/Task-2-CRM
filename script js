const form = document.getElementById("leadForm");
const leadTable = document.getElementById("leadTable");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("Rajeswari Botcha").value;
    const email = document.getElementById("rajeswaribotcha60@gmail.com").value;
    const source = document.getElementById("linkedin").value;
    const status = document.getElementById("new").value;
    const notes = document.getElementById("Interested in web development internship").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${source}</td>
        <td>${status}</td>
        <td>${notes}</td>
    `;

    leadTable.appendChild(row);

    form.reset();
});