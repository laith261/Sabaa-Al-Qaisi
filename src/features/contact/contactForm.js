/**
 * Contact & Commission Form Handler Module
 * Manages consultation inquiry validation, feedback notifications, and social shortcuts.
 */

/**
 * Initializes form submission event listener and validation.
 */
export function initContactForm() {
  try {
    const form = document.getElementById('commissionForm');
    const notification = document.getElementById('formToast');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form fields safely
      const nameInput = form.querySelector('[name="clientName"]');
      const emailInput = form.querySelector('[name="clientEmail"]');
      const serviceSelect = form.querySelector('[name="serviceType"]');
      const messageInput = form.querySelector('[name="clientMessage"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const service = serviceSelect ? serviceSelect.value : 'General Consultation';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        showToast(notification, 'Please fill in all required fields.', 'error');
        return;
      }

      // Simulate asynchronous booking request
      const submitBtn = form.querySelector('button[type="submit"]');
      const origText = submitBtn ? submitBtn.innerHTML : 'Submit Inquiry';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="animate-pulse">Sending Inquiry...</span>`;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }

        form.reset();
        showToast(notification, `Thank you, ${name}! Your consultation request for "${service}" has been received. Saba will reach out within 24 hours.`, 'success');
      }, 1000);
    });

    // Initialize WhatsApp and Instagram quick trigger links
    initSocialShortcuts();
  } catch (error) {
    console.error('Error initializing contact form:', error);
  }
}

/**
 * Displays floating toast notification.
 */
function showToast(toastEl, message, type = 'success') {
  if (!toastEl) return;

  toastEl.textContent = message;
  toastEl.className = `fixed bottom-8 right-8 z-50 px-6 py-4 rounded-xl shadow-2xl text-sm font-medium transition-all duration-500 transform translate-y-0 opacity-100 max-w-md ${
    type === 'success'
      ? 'bg-emerald-600 text-white border border-emerald-400'
      : 'bg-rose-600 text-white border border-rose-400'
  }`;

  setTimeout(() => {
    toastEl.classList.replace('translate-y-0', 'translate-y-20');
    toastEl.classList.replace('opacity-100', 'opacity-0');
  }, 6000);
}

/**
 * Binds click actions to direct WhatsApp / Instagram shortcuts.
 */
function initSocialShortcuts() {
  const waBtn = document.getElementById('shortcutWhatsapp');
  const igBtn = document.getElementById('shortcutInstagram');

  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent('Hello Saba! I visited your website and would love to discuss a custom interior art commission.');
      window.open(`https://wa.me/962790000000?text=${text}`, '_blank');
    });
  }

  if (igBtn) {
    igBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://www.instagram.com/sabaaalqaisi_art/', '_blank');
    });
  }
}
