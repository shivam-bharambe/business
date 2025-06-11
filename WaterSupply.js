 // Mobile menu toggle
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
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
                // Close mobile menu if open
                navLinks.classList.remove('active');
            });
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const address = formData.get('address');
            const service = formData.get('service');
            const quantity = formData.get('quantity');
            const date = formData.get('date');
            const message = formData.get('message');
            
            // Create WhatsApp message
            const whatsappMessage = `Hello! I need water supply service.
            
Name: ${name}
Phone: ${phone}
Delivery Address: ${address}
Service Type: ${service}
Quantity Required: ${quantity}
Required Date: ${date}
Additional Requirements: ${message}`;
            
            // Open WhatsApp with pre-filled message
            const whatsappURL = `https://wa.me/919822506114?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');
            
            // Show success message
            alert('Thank you for your request! You will be redirected to WhatsApp to complete your order.');
            
            // Reset form
            this.reset();
        });

        // Header background change on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'linear-gradient(135deg, #2c5282, #1e3a5f)';
            } else {
                header.style.background = 'linear-gradient(135deg, #1e3a5f, #2c5282)';
            }
        });

        // Animate cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe service and feature cards
        document.querySelectorAll('.service-card, .feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Set minimum date to today for date input
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);