let students = JSON.parse(localStorage.getItem("students")) || [];

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function displayStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${student.name}
            <button onclick="markAttendance(${index})">
                Present
            </button>
            <button onclick="deleteStudent(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });
}

function addStudent() {
    const name = document.getElementById("name").value;

    if(name === "") return;

    students.push({
        name:name,
        attendance:0
    });

    saveStudents();
    displayStudents();

    document.getElementById("name").value = "";
}

function markAttendance(index) {
    students[index].attendance++;
    saveStudents();

    alert(
        students[index].name +
        " Attendance: " +
        students[index].attendance
    );
}

function deleteStudent(index) {
    students.splice(index,1);

    saveStudents();
    displayStudents();
}

displayStudents();
