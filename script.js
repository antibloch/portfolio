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
    
    const initialPlaceholder = document.createElement('p');
    initialPlaceholder.id = 'projects-placeholder';
    initialPlaceholder.style.textAlign = 'center';
    initialPlaceholder.style.color = 'var(--text-secondary)';
    initialPlaceholder.style.marginTop = '2rem';
    initialPlaceholder.textContent = 'Select a category above to view projects.';
    projectsContainer.appendChild(initialPlaceholder);

    for (const [categoryName, data] of Object.entries(groupedProjects)) {
      const section = document.createElement('div');
      section.className = 'category-section';
      section.setAttribute('data-category', data.slug);
      section.style.display = 'none';
      section.style.opacity = '0';
      section.style.transform = 'scale(0.9)';
      
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
          <div class="project-summary" style="cursor: pointer;">
            <div class="project-images" style="pointer-events: none;">
              ${imagesHTML}
            </div>
            <div class="project-header" style="padding: 1.8rem; padding-bottom: 1rem;">
              <h3 style="pointer-events: auto;"><a href="${project.url}" target="_blank" rel="noopener noreferrer" style="pointer-events: auto;">${project.title}</a></h3>
              <p class="project-category-tag">${project.categoryName}</p>
              <div class="tech-stack-container">${techStackHTML}</div>
              <p class="project-description">${project.description}</p>
              <div class="expand-indicator" style="text-align: center; color: var(--text-secondary); margin-top: 15px; font-size: 0.85rem; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 5px;">
                <span class="expand-text">Click to expand</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron" style="transition: transform 0.3s;"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>
          <div class="project-details" style="display: none; padding: 0 1.8rem 1.8rem 1.8rem; border-top: 1px solid var(--surface-border);">
            ${overviewHTML}
            ${featuresHTML}
            <div class="project-links">
              <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="repo-link-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                View Repository
              </a>
            </div>
          </div>
        `;
        
        // Add click event for expanding/collapsing
        const summary = article.querySelector('.project-summary');
        const details = article.querySelector('.project-details');
        const chevron = article.querySelector('.chevron');
        const expandText = article.querySelector('.expand-text');
        
        summary.addEventListener('click', (e) => {
          // Prevent collapsing when clicking the title link
          if(e.target.tagName.toLowerCase() === 'a') return;
          
          if (details.style.display === 'none') {
            details.style.display = 'block';
            chevron.style.transform = 'rotate(180deg)';
            expandText.textContent = 'Click to collapse';
          } else {
            details.style.display = 'none';
            chevron.style.transform = 'rotate(0deg)';
            expandText.textContent = 'Click to expand';
          }
        });
        grid.appendChild(article);
      });
      
      section.appendChild(grid);
      projectsContainer.appendChild(section);
    }
  }

  // --- Project Filtering ---
  const filterBtns = document.querySelectorAll('.filter-card');
  const categorySections = document.querySelectorAll('.category-section');
  const placeholder = document.getElementById('projects-placeholder');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      if (placeholder) placeholder.style.display = 'none';
      
      const filterValue = btn.getAttribute('data-filter');
      
      categorySections.forEach(section => {
        if (filterValue === 'all' || section.getAttribute('data-category') === filterValue) {
          section.style.display = 'block';
          setTimeout(() => { 
            section.style.opacity = '1'; 
            section.style.transform = 'scale(1)'; 
            
            // Staggered animation for project cards
            const cards = section.querySelectorAll('.project-card');
            cards.forEach((c, i) => {
              c.classList.remove('animate-card');
              void c.offsetWidth; // Force reflow
              c.style.animationDelay = `${i * 0.1}s`;
              c.style.opacity = '0'; // Ensure it's hidden before animation starts
              c.classList.add('animate-card');
            });
          }, 10);
        } else {
          section.style.opacity = '0';
          section.style.transform = 'scale(0.9)';
          setTimeout(() => { section.style.display = 'none'; }, 300);
        }
      });

      // Smoothly scroll to the projects container so the transition is visible
      setTimeout(() => {
        const headerOffset = 100;
        const elementPosition = document.getElementById('projects-container').getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
        });
      }, 50);
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

  // --- Dynamic Publications Rendering ---
  const publicationsContainer = document.getElementById('publications-container');
  if (typeof PUBLICATIONS_DATA !== 'undefined' && publicationsContainer) {
    PUBLICATIONS_DATA.forEach(pub => {
      const pubCard = document.createElement('div');
      pubCard.className = 'publication-card';
      
      const citationsHtml = pub.citations ? `<span class="citations">Citations: ${pub.citations}</span>` : '';
      const yearHtml = pub.year ? `<span>Year: ${pub.year}</span>` : '';

      pubCard.innerHTML = `
        <div class="publication-title">
          <a href="${pub.link}" target="_blank" rel="noopener noreferrer">${pub.title}</a>
        </div>
        <div class="publication-authors">${pub.authors}</div>
        <div class="publication-venue">
          <span class="pub-publisher">${pub.publisher}</span> 
          <span class="pub-journal">${pub.journal}</span> 
          <span class="pub-details">${pub.details}</span>
        </div>
        <div class="publication-meta">
          ${yearHtml}
          ${citationsHtml}
        </div>
      `;
      
      publicationsContainer.appendChild(pubCard);
    });
  }

});
