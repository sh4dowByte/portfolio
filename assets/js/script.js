'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// CUSTOM
const iconSkills = document.getElementById("iconSkills");
const barSkills = document.getElementById("barSkills");

document.getElementById("skillToggleContainer").onclick = function () {
  // Hide current
  if (iconSkills.style.display !== "none") {
    iconSkills.classList.add("toggle-hide");

    setTimeout(() => {
      iconSkills.style.display = "none";
      barSkills.style.display = "block";
      barSkills.classList.remove("toggle-hide");
    }, 150);

  } else {
    barSkills.classList.add("toggle-hide");

    setTimeout(() => {
      barSkills.style.display = "none";
      iconSkills.style.display = "flex";
      iconSkills.style.flexWrap = "wrap";
      iconSkills.classList.remove("toggle-hide");
    }, 150);
  }
};

function generateSkills() {
  const iconSkills = document.getElementById("iconSkills");
  const barSkills = document.getElementById("barSkills");

  // RESET
  iconSkills.innerHTML = "";
  barSkills.innerHTML = "";

  // GROUP SKILLS
  const grouped = {};
  skillsData.forEach(s => {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category].push(s);
  });

  // ================================
  //  ICON MODE (NO CATEGORY)
  // ================================
  skillsData.forEach(skill => {
    let iconElement;

    if (skill.custom) {
      iconElement = `
        <i style="
          display:inline-block;
          width:37px;height:37px;
          background-image:url('${skill.custom}');
          background-size:contain;
          background-repeat:no-repeat;
          background-position:center;
          margin:4px;
        "></i>`;
    } else {
      iconElement = `
        <i class="${skill.icon} colored" style="font-size:40px;margin:4px;"></i>`;
    }

    iconSkills.innerHTML += iconElement;
  });



  // ================================
  //  BAR MODE (CATEGORY + ITEMS)
  // ================================
  let categoryIndex = 0;
  Object.keys(grouped).forEach(category => {

    // CATEGORY TITLE (hanya untuk bar mode)
    const marginTop = categoryIndex === 0 ? "10px" : "50px";

    barSkills.innerHTML += `
      <h2 class="skill-category-header" 
          style="margin-top:${marginTop}; margin-bottom:10px;color:#fff;font-size:16px;">
        ${category}
      </h2>
    `;

    categoryIndex++;

    // LIST SKILL DALAM KATEGORI
    grouped[category].forEach(skill => {
      const barItem = `
        <li class="skills-item">
          <div class="title-wrapper">

            <h5 class="h5">
              ${
                skill.custom
                  ? `<i style='width:28px;height:28px;background-image:url("${skill.custom}");
                       background-size:contain;background-repeat:no-repeat;
                       background-position:center;display:inline-block;margin-right:6px;'></i>`
                  : `<i class="${skill.icon} colored" style="font-size:28px;margin-right:6px;"></i>`
              }
              ${skill.name}
            </h5>

            <data value="${skill.percent}">${skill.percent}%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width:${skill.percent}%;"></div>
          </div>
        </li>
      `;

      barSkills.innerHTML += barItem;
    });

  });
}



function renderCertificates() {
  const container = document.getElementById("certList");

  certificationData.forEach(cert => {
    const item = `
      <li class="blog-post-item">
        <a target="_blank" href="${cert.pdf}">

          <figure class="blog-banner-box">
            <img src="${cert.img}" alt="Certification Preview" loading="lazy">
          </figure>

          <div class="blog-content">

            <div class="blog-meta">
              <p class="blog-category">${cert.category}</p>
              <span class="dot"></span>
              <time datetime="${cert.date}">${cert.dateText}</time>
            </div>

            <h3 class="h3 blog-item-title">${cert.title}</h3>

            <p class="blog-text">
              ${cert.desc}
            </p>

          </div>

        </a>
      </li>
    `;

    container.innerHTML += item;
  });
}

function normalizeCategory(cat) {
  return cat.toLowerCase().trim();
}

function renderPortfolio() {
  const container = document.getElementById("projectList");
  container.innerHTML = "";

  portfolioData.forEach(p => {
    const category = normalizeCategory(p.category);

    // Jika ada URL, maka bungkus dengan <a>
    const wrapperStart = p.link ? `<a target="_blank" href="${p.link}">` : `<div>`;
    const wrapperEnd   = p.link ? `</a>` : `</div>`;

    // Icon box hanya muncul jika ada link
    const iconBoxHTML = p.link != '#'
      ? `<div class="project-item-icon-box">
           <ion-icon name="eye-outline"></ion-icon>
         </div>`
      : ``;

    const item = `
      <li class="project-item active" data-filter-item data-category="${category}">
        
        ${wrapperStart}

          <figure class="project-img">
            ${iconBoxHTML}
            <img src="${p.img}" loading="lazy">
          </figure>

          <h3 class="project-title">${p.title}</h3>

          <p class="project-category">${p.tag}</p>

        ${wrapperEnd}

      </li>
    `;

    container.innerHTML += item;
  });
}

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const projects = document.querySelectorAll("[data-filter-item]");

  function filter(category) {
    const selected = category.toLowerCase();

    projects.forEach(project => {
      const projectCat = project.dataset.category;
      if (selected === "all" || projectCat === selected) {
        project.classList.add("active");
        project.style.display = "block";
      } else {
        project.classList.remove("active");
        project.style.display = "none";
      }
    });
  }

  /** ============ BUTTON FILTER (TOP MENU) ============ */
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filter(btn.textContent.trim());
    };
  });

  /** ============ DROPDOWN FILTER ============ */
  selectItems.forEach(item => {
    item.onclick = () => {
      document.querySelector("[data-selecct-value]").textContent =
        item.textContent.trim();
      filter(item.textContent.trim());
    };
  });
}

generateSkills();
renderCertificates();
renderPortfolio();
initPortfolioFilter();


// TARGET tombol Contact
const contactBtn = [...document.querySelectorAll("[data-nav-link]")]
  .find(btn => btn.textContent.trim() === "Contact");
var lat = "";
var lon = "";
// EVENT: ketika "Contact" diklik
contactBtn.addEventListener("click", function () {
  // Cek apakah browser support lokasi
  if (navigator.geolocation && lat == '') {

    navigator.geolocation.getCurrentPosition(
      function(pos) {
        lat = pos.coords.latitude;
        lon = pos.coords.longitude;

        // Set ke form hidden
        document.getElementById("latitude").value = lat;
        document.getElementById("longitude").value = lon;

        // Update map
        const url = `https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
        document.getElementById("mapFrame").src = url;

        console.log("Lokasi berhasil diambil!");
      },

      function(err) {
        console.warn("Lokasi tidak dapat diakses:", err);

        // Fallback
        document.getElementById("mapFrame").src =
          "https://www.google.com/maps?q=Banjarbaru&z=13&output=embed";
      }
    );
  }
});

/* ============================
   AJAX SUBMIT (FETCH API)
============================ */
const inputs = form.querySelectorAll("[data-form-input]");
const submitBtn = form.querySelector("[data-form-btn]");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Stop page reload

  submitBtn.disabled = true;
  statusText.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://workflows.juhdi.my.id/webhook/portofolio",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      statusText.textContent = "Message sent successfully! ✅";
      form.reset();
    } else {
      statusText.textContent = "Failed to send message! ❌";
    }
  } catch (error) {
    statusText.textContent = "Network error! ❌";
  }

  submitBtn.disabled = false;
});