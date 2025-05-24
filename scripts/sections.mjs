export function setSectionSelection(sections) {
  const sectionElement = document.querySelector("#sectionNumber");
  
  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.section;
    option.textContent = section.section;
    sectionElement.appendChild(option);
  });
}