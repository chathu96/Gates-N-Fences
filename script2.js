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

function readFormData() {
    var formData = {};
    formData["Company Name"] = document.getElementById("Company Name").value;
    formData["Company Address"] = document.getElementById("Company Address").value;
    formData["Business Type"] = document.getElementById("Business Type").value;
    formData["Owners Name"] = document.getElementById("Owners Name").value;
    formData["Type Of Business"] = document.getElementById("Type Of Business").value;
    formData["BR Number"] = document.getElementById("BR Number").value;
    formData["Zip Code"] = document.getElementById("Zip Code").value;
    formData["Tax Id"] = document.getElementById("Tax Id").value;
    formData["Email Address"] = document.getElementById("Email Address").value;
    formData["quotation"] = document.getElementById("quotation").value;
    return formData;
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
    document.getElementById("Company Name").value = "";
    document.getElementById("Company Address").value = "";
    document.getElementById("Business Type").value = "";
    document.getElementById("Owners Name").value = "";
    document.getElementById("Type Of Business").value = "";
    document.getElementById("BR Number").value = "";
    document.getElementById("Zip Code").value = "";
    document.getElementById("Tax Id").value = "";
    document.getElementById("Email Address").value = "";
    document.getElementById("quotation").value = "";
    selectedRow = null;
}
