const byuiCourse = {
  name: "Web Frontend Development I",
  code: "WDD231",
  sections: [
    { section: 1, enrolled: 87, instructor: "Brother Bingham" },
    { section: 2, enrolled: 84, instructor: "Sister Shultz" },
    { section: 3, enrolled: 95, instructor: "Sister Smith" }
  ],
  
  changeEnrollment: function(sectionNum, enroll = true) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.section == parseInt(sectionNum)
    );
    
    if (sectionIndex >= 0) {
      if (enroll) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
    }
  }
};

export default byuiCourse;