const floatingBtn = document.getElementById("floating-contact");
const heroContactBtn = document.getElementById("hero-contact");
const hero = document.querySelector(".hero");
const contactForm = document.getElementById("contact");

window.addEventListener("scroll", () => {
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  if (window.scrollY > heroBottom) {
    floatingBtn.classList.add("visible");
  } else {
    floatingBtn.classList.remove("visible");
  }
});

floatingBtn.addEventListener("click", () => {
  contactForm.scrollIntoView({ behavior: "smooth" });
});

heroContactBtn.addEventListener("click", () => {
  contactForm.scrollIntoView({ behavior: "smooth" });
});

const personalBtn = document.getElementById("personalBtn");
const businessBtn = document.getElementById("businessBtn");

personalBtn.addEventListener("click", () => {
  personalBtn.classList.add("active");
  businessBtn.classList.remove("active");
  personalPanel.classList.remove("hidden");
  businessPanel.classList.add("hidden");
});

businessBtn.addEventListener("click", () => {
  businessBtn.classList.add("active");
  personalBtn.classList.remove("active");
  businessPanel.classList.remove("hidden");
  personalPanel.classList.add("hidden");

});


const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.textContent =
        "Thanks! You will receive an email from Clayt on how to get on the road to being effective";
      submitButton.disabled = true;
      submitButton.style.opacity = "0.6";
      submitButton.style.background = "grey";
      submitButton.style.cursor = "not-allowed";
      submitButton.textContent = "Submitted";
      submitButton.classList.add("no-hover");
      form.reset();
    } else {
      status.textContent = "Oops! There was a problem submitting your form.";
    }
  } catch (error) {
    status.textContent = "Oops! Network error. Please try again later.";
  }

  status.style.opacity = 1;
  setTimeout(() => {
    status.style.opacity = 0;
  }, 100000);
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dotsContainer = document.querySelector(".testimonial-dots");
const testimonialCount = testimonials.length;

// Generate dots
testimonials.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showTestimonial(index));
  dotsContainer.appendChild(dot);
});

function showTestimonial(index) {
  testimonials[currentTestimonial].classList.remove("active");
  dotsContainer.children[currentTestimonial].classList.remove("active");
  currentTestimonial = index;
  testimonials[currentTestimonial].classList.add("active");
  dotsContainer.children[currentTestimonial].classList.add("active");
}

function showNextTestimonial() {
  let next = (currentTestimonial + 1) % testimonialCount;
  showTestimonial(next);
}

function showPrevTestimonial() {
  let prev = (currentTestimonial - 1 + testimonialCount) % testimonialCount;
  showTestimonial(prev);
}

document
  .querySelector(".next-arrow")
  .addEventListener("click", showNextTestimonial);
document
  .querySelector(".prev-arrow")
  .addEventListener("click", showPrevTestimonial);

// setInterval(showNextTestimonial, 10000);
