var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function insertNewRecord(data) {
    var table = document.getElementById("contactList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.city;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.state;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.zipcode;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.email;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = data.quotation;
    cell4 = newRow.insertCell(7);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zipcode").value = "";
    document.getElementById("email").value = "";
    document.getElementById("quotation").value = "";
    selectedRow = null;
}
