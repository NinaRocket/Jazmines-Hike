class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg">
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
             
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Events
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="./upcomingEvents.html">Upcoming Events</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="./familySupport.html">Family Support Events</a></li>
       
       
        </ul>
      </li>

         

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Online Fundraisers
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="./JazminesPiggies.html">Piggy Fundraiser</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="./statefortyeight.html">State Forty Eight Collab</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="https://www.zeffy.com/en-US/donation-form/b6a57cd2-dc35-4595-80bf-47d4561e4d72" target="_blank">Link to General Donation</a></li>
                </ul>
              </li>


              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Impact
                </a>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="./familySupport.html">Family Support Events</a></li>
                <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="./giving.html">Your Impact</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="./PastEvents.html">Past Events</a></li>     
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" aria-current="page" href="./thankyou.html">Thank You</a></li> 
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
                    <a class="dropdown-item" aria-current="page" href="./joinUs.html">Join Us</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item" aria-current="page" href="./Contact.html">Contact & Subscribe</a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                    <a class="dropdown-item" aria-current="page" href="./support.html">Support</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link active" href="https://us21.list-manage.com/survey?u=b84b865ea6ed9e8e3894bb424&id=13d9b44e2b&attribution=false" target="_blank">Family Application</a></li>

        </ul>

      </div>
    </div>
  </nav>
    `;
  }
}

  customElements.define('header-component', Header);

 