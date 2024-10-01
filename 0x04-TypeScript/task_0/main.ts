// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
    const body: HTMLBodyElement | null = document.querySelector('body');
    const table: HTMLTableElement = document.createElement('table');
    const headerRow: HTMLTableRowElement = table.insertRow();
    
    // Create header
    const firstNameHeader: HTMLTableCellElement = headerRow.insertCell(0);
    const locationHeader: HTMLTableCellElement = headerRow.insertCell(1);
    firstNameHeader.textContent = "First Name";
    locationHeader.textContent = "Location";

    // Add data rows
    studentsList.forEach((student: Student) => {
        const row: HTMLTableRowElement = table.insertRow();
        const firstNameCell: HTMLTableCellElement = row.insertCell(0);
        const locationCell: HTMLTableCellElement = row.insertCell(1);
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
    });

    // Append table to body
    if (body) {
        body.appendChild(table);
    }
}

// Call the render function when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderTable);
