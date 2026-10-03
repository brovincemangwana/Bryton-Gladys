const testimonials = [
  {
    name: "Jane Doe",
    role: "Classmate",
    text: "Brovince is great to work with and always willing to help."
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