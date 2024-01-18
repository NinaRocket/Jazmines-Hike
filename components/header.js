class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="../../index.html">Jazmine's <img src="../../Assets/Jazmines-Journey-Logo.PNG" height="45px;"> Journey</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
                </ul>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">


            <li class="nav-item"><a class="nav-link active" href="./bloodDrive.html">Blood Drive</a></li>
            
              <li class="nav-item"><a class="nav-link active" href="./JazminesStory.html">Jazmine's Story</a></li>

              <li class="nav-item"><a class="nav-link active" href="./NewsAndUpdates.html">News & Updates</a></li>
            
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./support.html">Support</a>
              </li>

              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./joinUs.html">Join Us</a>
            </li>

              <li class="nav-item"><a class="nav-link active" href="./PastEvents.html">Past Events</a></li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./Contact.html">Contact</a>
              </li>
            </ul>
           
          </div> 
        </div>
      </nav>
    `;
  }
}

  customElements.define('header-component', Header);

 