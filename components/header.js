class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="../../index.html">Jazmine's <img src="../../Assets/Jazmines-Journey-Logo.PNG"
          height="45px;"> Journey</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        </ul>

     <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li>
          <button style="    border-radius: 32px;
    background-color: white; border-color: orange;">
            <a class="dropdown-item pulse" style="padding: 10px;
    font-weight: 600;" href="https://www.zeffy.com/en-US/donation-form/2026-jazmines-journey-donations" target="_blank">Donate</a>
          </button>
         
        </li>
        </ul>

        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
             
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Events
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="./upcomingEvents.html">Upcoming Events</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="./familySupport.html">Family Support Events</a></li> 
             <li><hr class="dropdown-divider"></li>  
             <li><a class="dropdown-item" href="./pickleball.html">2026 Pickleball Tournament</a></li>
            <li><hr class="dropdown-divider"></li>          
            <li><a class="dropdown-item" href="./toydrive.html">Toy Drive</a></li>
                    
      

       
        </ul>
      </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Fundraisers
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./onlinefundraiser.html">Online & Ongoing Fundraisers</a></li>
                  <li><hr class="dropdown-divider"></li>
                 <li><a class="dropdown-item" href="https://milesforjazmine.com">Miles for Jazmine</a></li>
                  <li><hr class="dropdown-divider"></li>
    
                    <li><a class="dropdown-item" href="https://pa.exchange/marketplace/5a7cb570-416b-11f0-8b27-7f50132c281c/storefront/5a7cb73c-416b-11f0-839c-ada1beb63e34" target="_blank">Arizona Cardinals Tickets</a></li>
                   <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="./SponsorStuffed.html" target="_blank">Sponsor a Stuffed Animal</a></li>
                         <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="./researchdonations.html" target="_blank">Pediatric Cancer Research</a></li>
                             <li><hr class="dropdown-divider"></li>
                     <li><a class="dropdown-item" href="./agentsvscancer.html" target="_blank">Agents Vs. Cancer</a></li>
                  <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="https://www.zeffy.com/en-US/donation-form/2026-jazmines-journey-donations" target="_blank">Link to General Donation</a></li>
                  
                </ul>
              </li>

           <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Families
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./familySupport.html">Family Support Events</a></li>
                 <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="./feedtubeport.html">Feeding Tube & Port Cover</a></li>
                <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="./resources.html">Resources</a></li>
                 
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Impact
                </a>
                <ul class="dropdown-menu">
        
                  <li><a class="dropdown-item" href="./giving.html">Your Impact</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" aria-current="page" href="./thankyou.html">Thank You</a></li> 
                   <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="./volunteer.html">Volunteer</a></li>
                 
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Jazmine's Journey
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="./JazminesStory.html">Jazmine's
                    Story</a></li>
                  <li><hr class="dropdown-divider"></li>
                     <li>
                    <a class="dropdown-item" aria-current="page" href="./NewsAndUpdates.html">News</a>
                  </li>
                    <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item" aria-current="page" href="./Contact.html">About Us</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item" aria-current="page" href="./Contact.html">Contact & Subscribe</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item" aria-current="page" href="./support.html">Support</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item" aria-current="page" href="https://us21.list-manage.com/survey?u=b84b865ea6ed9e8e3894bb424&id=79aa480cff&attribution=false" target="_blank">Join Jazmine's Journey</a>
                  </li>
                   <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item" aria-current="page" href="https://jazminesjourneyblog.wordpress.com/" target="_blank">Blog</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link active" href="https://us21.list-manage.com/survey?u=b84b865ea6ed9e8e3894bb424&id=e815e3eea3&attribution=false" target="_blank"><strong>Family Application</strong></a></li>

        </ul>

      </div>
    </div>
  </nav>
    `;
  }
}

  customElements.define('header-component', Header);

 