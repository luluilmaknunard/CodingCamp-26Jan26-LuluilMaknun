welcomeMessage();

function welcomeMessage() {
    
    let userResponse = prompt("Welcome to Yama Company! What is your name?");

    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Yama Company.`;
}


function submitMessage() { }


const form = document.getElementById("formData");
const tableBody = document.getElementById("tableData");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const birthdate = document.getElementById("birthdate").value;
        const message = document.getElementById("message").value;
        const gender = document.querySelector('input[name="gender"]:checked');

        if (!gender) {
            alert("Pilih jenis kelamin terlebih dahulu!");
            return;
        }

        const row = document.createElement("tr");

        row.innerHTML = `
            <td class="border px-2">${name}</td>
            <td class="border px-2">${birthdate}</td>
            <td class="border px-2">${gender.value}</td>
            <td class="border px-2">${message}</td>
            <td class="border px-2 text-blue-500 cursor-pointer">Klik Disini</td>
            <td class="border px-2 cursor-pointer">🗑</td>
        `;

        // tombol delete
        row.querySelector("td:last-child").addEventListener("click", function () {
            row.remove();
        });

        tableBody.appendChild(row);
        form.reset();
    });

    const form = document.getElementById("formData");
const tableBody = document.getElementById("tableData");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const birthdate = document.getElementById("birthdate");
    const message = document.getElementById("message");
    const gender = document.querySelector('input[name="gender"]:checked');

    let isValid = true;

    // reset border
    name.style.border = "";
    birthdate.style.border = "";
    message.style.border = "";

    // VALIDASI KOSONG
    if (name.value === "") {
        name.style.border = "2px solid red";
        isValid = false;
    }
    if (birthdate.value === "") {
        birthdate.style.border = "2px solid red";
        isValid = false;
    }
    if (message.value === "") {
        message.style.border = "2px solid red";
        isValid = false;
    }
    if (!gender) {
        isValid = false;
    }

    if (!isValid) {
        alert("Form ini tidak boleh kosong!");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td class="border">${name.value}</td>
        <td class="border">${birthdate.value}</td>
        <td class="border">${gender.value}</td>
        <td class="border">${message.value}</td>
        <td class="border text-blue-500 cursor-pointer">Klik Disini</td>
        <td class="border cursor-pointer">🗑</td>
    `;

    // tombol delete
    row.querySelector("td:last-child").addEventListener("click", function () {
        row.remove();
    });

    tableBody.appendChild(row);
    form.reset();
});

}
