class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Jazmine's
          <img src="/Assets/Jazmines-Journey-Logo.PNG" height="45" alt="Jazmine's Journey logo">
          Journey
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li>
              <button style="border-radius: 32px; background-color: white; border-color: orange;">
                <a
                  class="dropdown-item pulse"
                  style="padding: 10px; font-weight: 600;"
                  href="https://www.zeffy.com/en-US/donation-form/2026-jazmines-journey-donations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate
                </a>
              </button>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Events
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/pages/upcomingEvents.html">Upcoming Events</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/familySupport.html">Family Support Events</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/pickleball.html">2026 Pickleball Tournament</a></li>
         
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Fundraisers
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/pages/onlinefundraiser.html">Online & Ongoing Fundraisers</a></li>
                <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="/pages/butterflycircle.html">Butterfly Circle</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/adoptafamily.html">Adopt a Family</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/SponsorStuffed.html">Sponsor a Stuffed Animal</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/researchdonations.html">Pediatric Cancer Research</a></li>
                <li><hr class="dropdown-divider"></li>
                 <li><a class="dropdown-item" href="/pages/milesforjazmine.html">Miles for Jazmine</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/agentsvscancer.html">Agents Vs. Cancer</a></li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.zeffy.com/en-US/donation-form/2026-jazmines-journey-donations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to General Donation
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Families
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/pages/familySupport.html">Family Support Events</a></li>
                <li><hr class="dropdown-divider"></li>
                   <li><a class="dropdown-item" href="/pages/birthdayclub.html">Birthday Club</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/feedtubeport.html">Feeding Tube & Port Cover</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/resources.html">Resources</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Impact
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/pages/giving.html">Your Impact</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" aria-current="page" href="/pages/thankyou.html">Thank You</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="/pages/volunteer.html">Volunteer</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Jazmine's Journey
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/pages/JazminesStory.html">Jazmine's Story</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" aria-current="page" href="/pages/NewsAndUpdates.html">News</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" aria-current="page" href="/pages/Contact.html">About Us</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" aria-current="page" href="/pages/Contact.html">Contact & Subscribe</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" aria-current="page" href="/pages/support.html">Support</a></li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a
                    class="dropdown-item"
                    aria-current="page"
                    href="https://us21.list-manage.com/survey?u=b84b865ea6ed9e8e3894bb424&id=79aa480cff&attribution=false"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Jazmine's Journey
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a
                    class="dropdown-item"
                    aria-current="page"
                    href="https://jazminesjourneyblog.wordpress.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="nav-link active"
                href="https://forms.gle/dabA8PKHs66oHFxe8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Family Application</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
    this.initPWA();
  }

  initPWA() {
    if (window.__JJ_PWA_INIT__) return;
    window.__JJ_PWA_INIT__ = true;

    if (!document.querySelector('link[rel="manifest"]')) {
      const l = document.createElement("link");
      l.rel = "manifest";
      l.href = "/manifest.webmanifest";
      document.head.appendChild(l);
    }

    if (!document.querySelector('meta[name="theme-color"]')) {
      const m = document.createElement("meta");
      m.name = "theme-color";
      m.content = "#ff9507";
      document.head.appendChild(m);
    }

    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const a = document.createElement("link");
      a.rel = "apple-touch-icon";
      a.href = "/Assets/icons/apple-touch-icon.png";
      document.head.appendChild(a);
    }

    if (!document.querySelector('meta[name="apple-mobile-web-app-capable"]')) {
      const cap = document.createElement("meta");
      cap.name = "apple-mobile-web-app-capable";
      cap.content = "yes";
      document.head.appendChild(cap);
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(console.error);
      });
    }
  }
}

customElements.define('header-component', Header);