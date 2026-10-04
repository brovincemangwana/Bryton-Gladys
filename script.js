const testimonials = [
  {
    name: "Jane Quinn",
    role: "Classmate",
    text: "Brovince and Gladys are great to work with and always willing to help."
  },
  {
    name: "John Smith",
    role: "Mentor",
    text: "A quick learner who asks good questions and follows through."
  },
  {
    name: "Mary Johnson",
    role: "Team Lead",
    text: "Reliable, organized, and delivers clean work on time."
  }
];

const testimonialsList = document.getElementById("testimonials-list");

for (const testimonial of testimonials) {
  const card = document.createElement("div");
  card.classList.add("testimonial-card");

  card.innerHTML = `
    <p class="testimonial-text">"${testimonial.text}"</p>
    <p class="testimonial-author">${testimonial.name}, ${testimonial.role}</p>
  `;

  testimonialsList.appendChild(card);
}

const projects = [
  {
    title: "Personal Portfolio",
    description: "A single-page portfolio built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"]
  },

  {
    title: "To-Do List App",
    description: "A simple task manager that lets you add and remove tasks.",
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

const projectsList = document.getElementById("projects-list");

for (const project of projects) {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <p class="project-tech">Tech used: ${project.tech.join(", ")}</p>
  `;

  projectsList.appendChild(card);

}
