welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("Welcome to L'StudyGroups! What is your name?");
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerText =
        `Hello, ${userResponse}! Welcome to L'StudyGroups.`;
}

const form = document.getElementById("formData");
const tableBody = document.getElementById("tableData");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const konsultasi = document.getElementById("konsultasi");
    const question = document.getElementById("question");
    const levelInputs = document.querySelectorAll('input[name="level"]');

    let selectedLevel = "";
    levelInputs.forEach((item) => {
        if (item.checked) selectedLevel = item.value;
    });

    name.style.border = "";
    email.style.border = "";
    konsultasi.style.border = "";
    question.style.border = "";

    let isValid = true;

    if (name.value === "") {
        name.style.border = "2px solid red";
        isValid = false;
    }

    if (email.value === "") {
        email.style.border = "2px solid red";
        isValid = false;
    }

    if (konsultasi.value === "") {
        konsultasi.style.border = "2px solid red";
        isValid = false;
    }

    if (question.value === "") {
        question.style.border = "2px solid red";
        isValid = false;
    }

    if (selectedLevel === "") {
        alert("Silakan pilih level pertanyaan!");
        isValid = false;
    }

    if (!isValid) {
        alert("Form tidak boleh kosong!");
        return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name.value}</td>
        <td>${email.value}</td>
        <td>${konsultasi.value}</td>
        <td>${selectedLevel}</td>
        <td>${question.value}</td>
        <td class="cursor-pointer">🗑</td>
    `;

    row.querySelector("td:last-child").addEventListener("click", function () {
        row.remove();
    });

    tableBody.appendChild(row);
    form.reset();
});
