/**
 * ============================================================================
 * PORTFOLIO JAVASCRIPT - SUBAVISHNU V
 * Associate Software Developer | MERN Stack Developer
 * 
 * Features:
 * 1. Mobile Hamburger Menu Toggle (with Accessibility ARIA updates)
 * 2. Sticky Navbar Styling on Scroll
 * 3. Active Navigation Link Highlighting on Scroll
 * 4. Contact Form Client-Side Validation & Feedback
 * 5. Smooth Scroll & Back to Top Handling
 * 6. Subtle Scroll-Reveal Animations (Intersection Observer)
 * ============================================================================
 */

// Wait until the DOM content is completely parsed and loaded
document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. DOM Element References
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  const backToTopBtn = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id], header[id]');
  const projectsSliderContainer = document.getElementById('projectsSliderContainer');
  const projectPrevBtn = document.getElementById('projectPrevBtn');
  const projectNextBtn = document.getElementById('projectNextBtn');

  // --------------------------------------------------------------------------
  // 2. Mobile Hamburger Menu Toggle
  // --------------------------------------------------------------------------
  if (navToggle && navMenu) {
    // Click event for hamburger button
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded state for screen readers
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
    });

    // Close mobile menu when any navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          navToggle.classList.remove('is-active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close mobile menu when clicking outside of the navbar
    document.addEventListener('click', (event) => {
      const isClickInside = header.contains(event.target);
      if (!isClickInside && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Sticky Header Shadow on Scroll
  // --------------------------------------------------------------------------
  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run on initial load

  // --------------------------------------------------------------------------
  // 4. Active Navigation Link Highlighting on Scroll
  // --------------------------------------------------------------------------
  const highlightActiveNavLink = () => {
    const scrollPosition = window.scrollY + 120; // Offset for header height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightActiveNavLink, { passive: true });

  // --------------------------------------------------------------------------
  // 5. Contact Form Validation and User Feedback
  // --------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const messageInput = document.getElementById('userMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Helper: Simple email validation regex pattern
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
    };

    // Helper: Clear specific field error
    const clearError = (input, errorSpan) => {
      input.classList.remove('is-invalid');
      if (errorSpan) errorSpan.textContent = '';
    };

    // Helper: Set specific field error
    const setError = (input, errorSpan, message) => {
      input.classList.add('is-invalid');
      if (errorSpan) errorSpan.textContent = message;
    };

    // Clear errors when the user types
    nameInput.addEventListener('input', () => clearError(nameInput, nameError));
    emailInput.addEventListener('input', () => clearError(emailInput, emailError));
    messageInput.addEventListener('input', () => clearError(messageInput, messageError));

    // Handle form submit
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default page refresh

      let hasErrors = false;

      // Validate Name
      if (!nameInput.value.trim()) {
        setError(nameInput, nameError, 'Please enter your name.');
        hasErrors = true;
      } else if (nameInput.value.trim().length < 2) {
        setError(nameInput, nameError, 'Name must be at least 2 characters long.');
        hasErrors = true;
      } else {
        clearError(nameInput, nameError);
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        setError(emailInput, emailError, 'Please enter your email address.');
        hasErrors = true;
      } else if (!isValidEmail(emailInput.value)) {
        setError(emailInput, emailError, 'Please enter a valid email address (e.g. name@domain.com).');
        hasErrors = true;
      } else {
        clearError(emailInput, emailError);
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        setError(messageInput, messageError, 'Please write a message.');
        hasErrors = true;
      } else if (messageInput.value.trim().length < 10) {
        setError(messageInput, messageError, 'Message must be at least 10 characters long.');
        hasErrors = true;
      } else {
        clearError(messageInput, messageError);
      }

      // If validation fails, stop here
      if (hasErrors) {
        return;
      }

      // If valid: Provide visual progress state
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="btn-text">Sending...</span>
        <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
      `;

      // Simulate a network response delay (1.2 seconds)
      setTimeout(() => {
        // Reset submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;

        // Display success alert
        formFeedback.className = 'form-feedback success is-visible';
        formFeedback.innerHTML = `
          <strong>Thank you!</strong> Your message has been received. I will get back to you as soon as possible.
        `;

        // Reset the form fields
        contactForm.reset();

        // Automatically hide success alert after 6 seconds
        setTimeout(() => {
          formFeedback.classList.remove('is-visible');
        }, 6000);

      }, 1200);
    });
  }

  // --------------------------------------------------------------------------
  // 6. Smooth Scroll for Back-to-Top Button
  // --------------------------------------------------------------------------
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6b. Projects Horizontal Carousel (<, >) Scroll Controls
  // --------------------------------------------------------------------------
  if (projectsSliderContainer && projectPrevBtn && projectNextBtn) {
    const getScrollDistance = () => {
      const firstCard = projectsSliderContainer.querySelector('.project-card');
      return firstCard ? firstCard.offsetWidth + 28 : 380;
    };

    projectPrevBtn.addEventListener('click', () => {
      projectsSliderContainer.scrollBy({
        left: -getScrollDistance(),
        behavior: 'smooth'
      });
    });

    projectNextBtn.addEventListener('click', () => {
      projectsSliderContainer.scrollBy({
        left: getScrollDistance(),
        behavior: 'smooth'
      });
    });

    const updateCarouselButtons = () => {
      const maxScrollLeft = projectsSliderContainer.scrollWidth - projectsSliderContainer.clientWidth;
      projectPrevBtn.disabled = projectsSliderContainer.scrollLeft <= 5;
      projectNextBtn.disabled = projectsSliderContainer.scrollLeft >= maxScrollLeft - 5;
    };

    projectsSliderContainer.addEventListener('scroll', updateCarouselButtons, { passive: true });
    window.addEventListener('resize', updateCarouselButtons, { passive: true });
    updateCarouselButtons();
  }

  // --------------------------------------------------------------------------
  // 7. Subtle Reveal Animations on Scroll (Intersection Observer)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll(
    '.skill-card, .project-card, .detail-card, .pillar-item, .contact-method-card, .education-card, .certificate-card'
  );

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(16px)';
      element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      revealObserver.observe(element);
    });
  }

  console.log("Subavishnu V Portfolio initialized successfully.");
});
