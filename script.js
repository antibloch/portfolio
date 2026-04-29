document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll Animations (Intersection Observer) ---
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(el => scrollObserver.observe(el));

  // --- Dynamic Project Rendering ---
  const projectsContainer = document.getElementById('projects-container');
  
  if (typeof PROJECTS_DATA !== 'undefined' && projectsContainer) {
    // Group projects by category
    const groupedProjects = PROJECTS_DATA.reduce((acc, project) => {
      if (!acc[project.categoryName]) {
        acc[project.categoryName] = {
          slug: project.category,
          projects: []
        };
      }
      acc[project.categoryName].projects.push(project);
      return acc;
    }, {});

    projectsContainer.innerHTML = '';
    projectsContainer.style.display = 'flex';
    projectsContainer.style.flexDirection = 'column';
    projectsContainer.style.gap = '4rem';

    for (const [categoryName, data] of Object.entries(groupedProjects)) {
      const section = document.createElement('div');
      section.className = 'category-section';
      section.setAttribute('data-category', data.slug);
      
      const heading = document.createElement('h3');
      heading.className = 'category-heading';
      heading.textContent = categoryName;
      section.appendChild(heading);

      const grid = document.createElement('div');
      grid.className = 'projects-grid';
      
      data.projects.forEach(project => {
        const article = document.createElement('article');
        article.className = 'project-card';
        article.setAttribute('data-category', project.category);
        
        const techStackHTML = (project.tech_stack || []).map(tech => 
          `<span class="tech-pill">${tech}</span>`
        ).join('');
        
        let imagesHTML = `<img src="${project.image}" alt="${project.title} screenshot" loading="lazy">`;

        const featuresHTML = project.features ? `<p class="project-features"><strong>Key Features:</strong> ${project.features}</p>` : '';
        
        let overviewAssetsHTML = '';
        if (project.extra_images && project.extra_images.length > 0) {
          project.extra_images.forEach((img, index) => {
            overviewAssetsHTML += `<img src="${img}" alt="${project.title} extra ${index+1}" loading="lazy">`;
          });
        }
        if (project.extra_videos && project.extra_videos.length > 0) {
          project.extra_videos.forEach((vid, index) => {
            overviewAssetsHTML += `<video src="${vid}" autoplay loop muted playsinline></video>`;
          });
        }
        
        let overviewHTML = '';
        if (project.overview || overviewAssetsHTML) {
          overviewHTML = `
            <div class="project-overview">
              <strong>Overview:</strong>
              ${project.overview ? `<p>${project.overview}</p>` : ''}
              ${overviewAssetsHTML ? `<div class="overview-assets">${overviewAssetsHTML}</div>` : ''}
            </div>
          `;
        }
        
        article.innerHTML = `
          <div class="project-images">
            ${imagesHTML}
          </div>
          <div class="project-content">
            <h3><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3>
            <p class="project-category-tag">${project.categoryName}</p>
            <div class="tech-stack-container">${techStackHTML}</div>
            <p class="project-description">${project.description}</p>
            ${overviewHTML}
            ${featuresHTML}
          </div>
        `;
        grid.appendChild(article);
      });
      
      section.appendChild(grid);
      projectsContainer.appendChild(section);
    }
  }

  // --- Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categorySections = document.querySelectorAll('.category-section');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      categorySections.forEach(section => {
        if (filterValue === 'all' || section.getAttribute('data-category') === filterValue) {
          section.style.display = 'block';
          setTimeout(() => { section.style.opacity = '1'; section.style.transform = 'scale(1)'; }, 10);
        } else {
          section.style.opacity = '0';
          section.style.transform = 'scale(0.9)';
          setTimeout(() => { section.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // --- Lightbox Functionality ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');
  // Include dynamic project images
  const galleryImages = document.querySelectorAll('.project-images img, .overview-assets img, .skills-wrapper img, .hero-image img, .contact-card img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

});
