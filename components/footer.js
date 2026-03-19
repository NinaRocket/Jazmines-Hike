class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (!document.getElementById('fontAwesomeStylesheet')) {
      const fontAwesomeCSS = document.createElement('link');
      fontAwesomeCSS.id = 'fontAwesomeStylesheet';
      fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      fontAwesomeCSS.rel = 'stylesheet';
      document.head.appendChild(fontAwesomeCSS);
    }

    this.innerHTML = `
      <section class="footer">
        <footer class="jj-footer text-center text-white">
          <div class="container p-4 pb-0">
            <section>
              <h5 class="footer-heading">Follow Us on Social Media</h5>

              <div class="social-icons">
                <a href="https://www.youtube.com/@_jazminesjourney_" target="_blank" rel="noopener noreferrer" aria-label="Jazmine's Journey on YouTube" class="social-link youtube">
                  <i class="fa-brands fa-youtube"></i>
                </a>

                <a href="https://www.instagram.com/_jazminesjourney_/#" target="_blank" rel="noopener noreferrer" aria-label="Jazmine's Journey on Instagram" class="social-link instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>

                <a href="https://jazminesjourneyblog.wordpress.com" target="_blank" rel="noopener noreferrer" aria-label="Jazmine's Journey on WordPress" class="social-link wordpress">
                  <i class="fa-brands fa-wordpress"></i>
                </a>

                <a href="https://www.tiktok.com/@jazminesjourney1" target="_blank" rel="noopener noreferrer" aria-label="Jazmine's Journey on TikTok" class="social-link tiktok">
                  <i class="fa-brands fa-tiktok"></i>
                </a>

                <a href="https://www.facebook.com/JazminesJourney" target="_blank" rel="noopener noreferrer" aria-label="Jazmine's Journey on Facebook" class="social-link facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>

                <a href="https://www.linkedin.com/company/jazmines-journey/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="Jazmine's Journey on LinkedIn" class="social-link linkedin">
                  <i class="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://x.com/JazJourneyAZ" target="_blank" rel="noopener noreferrer" aria-label="Jazmine's Journey on X" class="social-link x-twitter">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </div>

              <p class="footer-text">Copyright © 2026 Jazmine's Journey</p>
              <p class="footer-text">P.O. Box 38091 Phoenix, AZ 85069</p>
              <p class="footer-text">a 501(c)3 nonprofit</p>

              <p class="footer-text">
                <a href="/pages/minutes.html" class="footer-link">
                  Meeting Minutes, Tax Exempt Letter and Documents
                </a>
              </p>

              <p class="footer-text">
                <a href="/install.html" class="footer-link">
                  Install Jazmine’s Journey App (PWA)
                </a>
              </p>
            </section>
          </div>

          <div class="footer-credit">
            <span>
              Created by enRocket Dev
              <img src="../../Assets/Nina Rocket Icon Black.png" alt="enRocket Dev logo" class="footer-credit-logo">
            </span>
          </div>
        </footer>
      </section>

      <style>
        .footer {
          position: sticky;
          top: 100vh;
          margin-top: 20px;
        }

        .jj-footer {
          background-color: #ff9507;
        }

        .footer-heading {
          margin-bottom: 12px;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 16px;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 28px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .social-link:hover {
          transform: scale(1.12);
          opacity: 0.9;
        }

        .social-link.youtube {
          color: #ff0000;
        }

        .social-link.instagram {
          color: #8a3ab9;
        }

        .social-link.wordpress {
          color: #21759b;
        }

        .social-link.tiktok {
          color: #ffffff;
        }

        .social-link.facebook {
          color: #1877f2;
        }

        .social-link.linkedin {
          color: #0a66c2;
        }

        .social-link.x-twitter {
          color: #ffffff;
        }

        .footer-text {
          margin-bottom: 0.6rem;
        }

        .footer-link {
          color: #ffffff;
          text-decoration: underline;
        }

        .footer-link:hover {
          color: #fff3d6;
        }

        .footer-credit {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 1rem;
        }

        .footer-credit-logo {
          height: 30px;
          margin-left: 6px;
        }
      </style>
    `;
  }
}

customElements.define('footer-component', Footer);