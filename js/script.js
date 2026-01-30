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

welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("Welcome to Yama Company! What is your name?");
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerText =
        `Hello, ${userResponse}! Welcome to Yama Company.`;
}

const form = document.getElementById("formData");
const tableBody = document.getElementById("tableData");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const birthdate = document.getElementById("birthdate");
    const message = document.getElementById("message");

    const genderInputs = document.querySelectorAll('input[name="gender"]');
    let selectedGender = "";

    genderInputs.forEach((item) => {
        if (item.checked) {
            selectedGender = item.value;
        }
    });

    let isValid = true;

    name.style.border = "";
    birthdate.style.border = "";
    message.style.border = "";

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
    if (selectedGender === "") {
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
        <td class="border">${selectedGender}</td>
        <td class="border">${message.value}</td>
        <td class="border text-blue-500 cursor-pointer">Klik Disini</td>
        <td class="border cursor-pointer">🗑</td>
    `;

    row.querySelector("td:last-child").addEventListener("click", function () {
        row.remove();
    });

    tableBody.appendChild(row);
    form.reset();
});


