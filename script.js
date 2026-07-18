function addLead() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const source = document.getElementById('source').value;
    const status = document.getElementById('status').value;
    const notes = document.getElementById('notes').value;

    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    leads.push({ name, email, source, status, notes });

    localStorage.setItem("leads", JSON.stringify(leads));

    loadLeads();
}

function loadLeads() {
    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    let html = "";

    leads.forEach((lead, i) => {
        html += `
        <tr>
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.status}</td>
            <td>
                <button class="action-btn edit" onclick="editLead(${i})">Edit</button>
                <button class="action-btn convert" onclick="convertLead(${i})">Convert</button>
                <button class="action-btn delete" onclick="deleteLead(${i})">Delete</button>
            </td>
        </tr>`;
    });

    document.getElementById('data').innerHTML = html;
}

function deleteLead(i) {
    let leads = JSON.parse(localStorage.getItem("leads")) || [];
    leads.splice(i, 1);
    localStorage.setItem("leads", JSON.stringify(leads));
    loadLeads();
}

function convertLead(i) {
    let leads = JSON.parse(localStorage.getItem("leads")) || [];
    leads[i].status = "converted";
    localStorage.setItem("leads", JSON.stringify(leads));
    loadLeads();
}

function editLead(i) {
    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    document.getElementById('name').value = leads[i].name;
    document.getElementById('email').value = leads[i].email;
    document.getElementById('source').value = leads[i].source;
    document.getElementById('status').value = leads[i].status;
    document.getElementById('notes').value = leads[i].notes;

    deleteLead(i); // remove old → re-add after edit
}

loadLeads();