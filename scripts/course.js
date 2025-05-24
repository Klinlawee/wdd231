document.addEventListener('DOMContentLoaded', function() {
    const courses = [
      {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: false
      },
      {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
      },
      {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions.',
        technology: ['Python'],
        completed: false
      },
      {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: false
      },
      {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
      },
      {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
      }
    ];
  
    const courseCardsContainer = document.getElementById('courseCards');
    const totalCreditsElement = document.getElementById('totalCredits');
    const allCoursesButton = document.getElementById('allCourses');
    const wddCoursesButton = document.getElementById('wddCourses');
    const cseCoursesButton = document.getElementById('cseCourses');
  
    function displayCourses(filteredCourses) {
      courseCardsContainer.innerHTML = '';
      let totalCredits = 0;
  
      filteredCourses.forEach(course => {
        totalCredits += course.credits;
        
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        
        card.innerHTML = `
          <h3>${course.subject} ${course.number}: ${course.title}</h3>
          <p><strong>Credits:</strong> ${course.credits}</p>
          <p><strong>Status:</strong> ${course.completed ? 'Completed' : 'In Progress'}</p>
          <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
          <p>${course.description}</p>
        `;
        
        courseCardsContainer.appendChild(card);
      });
  
      totalCreditsElement.textContent = totalCredits;
    }
  
    function filterCourses(subject) {
      if (subject === 'all') {
        return displayCourses(courses);
      }
      const filtered = courses.filter(course => course.subject === subject);
      displayCourses(filtered);
    }
  
    // Initial display
    displayCourses(courses);
  
    // Event listeners for filter buttons
    allCoursesButton.addEventListener('click', () => filterCourses('all'));
    wddCoursesButton.addEventListener('click', () => filterCourses('WDD'));
    cseCoursesButton.addEventListener('click', () => filterCourses('CSE'));
  });
  // Mobile menu functionality
document.getElementById('menuButton').addEventListener('click', () => {
    const primaryNav = document.getElementById('primaryNav');
    primaryNav.classList.toggle('open');
    
    const menuButton = document.getElementById('menuButton');
    if (primaryNav.classList.contains('open')) {
        menuButton.textContent = '✕'; // Change to close icon
        menuButton.setAttribute('aria-expanded', 'true');
    } else {
        menuButton.textContent = '☰'; // Change back to menu icon
        menuButton.setAttribute('aria-expanded', 'false');
    }
});