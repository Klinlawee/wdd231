export function setTitle(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

export function renderSections(sections) {
  const tableBody = document.querySelector("#sections");
  tableBody.innerHTML = "";
  
  sections.forEach((section) => {
    const row = document.createElement("tr");
    
    const sectionCell = document.createElement("td");
    sectionCell.textContent = section.section;
    row.appendChild(sectionCell);
    
    const enrolledCell = document.createElement("td");
    enrolledCell.textContent = section.enrolled;
    row.appendChild(enrolledCell);
    
    const instructorCell = document.createElement("td");
    instructorCell.textContent = section.instructor;
    row.appendChild(instructorCell);
    
    tableBody.appendChild(row);
  });
}