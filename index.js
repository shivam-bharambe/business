 // Navigation scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Counter animation for stats
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                const suffix = element.textContent.includes('+') ? '+' : '';
                // const prefix = element.textContent.includes('/') ? '24/' : '';
                element.textContent = prefix + Math.floor(current) + suffix;
            }, 20);
        }

        // Trigger counter animation when stats section is visible
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const text = stat.textContent;
                        const target = parseInt(text.replace(/\D/g, ''));
                        if (!isNaN(target)) {
                            animateCounter(stat, target);
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        });

        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

function openBusiness(service) {
  switch (service) {
    case 'tours':
      window.location.href = 'Tours_&_Travels.html';
      break;
    case 'construction':
      window.location.href = 'Construction_&_HeavyEquipment.html';
      break;
    case 'labour':
      window.location.href = 'LabourSuppliers.html';
      break;
    case 'water':
      window.location.href = 'WaterSupply.html';
      break;
    default:
      alert("Invalid service selected.");
  }
}



document.querySelector('.mobile-menu').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});


            
           
        

        // // Mobile menu toggle (basic implementation)
        // document.querySelector('.mobile-menu').addEventListener('click', function() {
        //     alert('Mobile menu functionality would be implemented here');
        // });

        // Add parallax effect to hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });



// Scroll Animation    
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
   