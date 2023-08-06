class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="../../index.html"><img src="../../Assets/cancer-ribbon-clip-art-24.png" height="45px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Links
                </a>
                <ul class="dropdown-menu">
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/JazminesStory.html">Jazmine's Story</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/hikingevents.html">Hiking Events</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/support.html">Support</a></li>
                 
                </ul>
              </li>
            </ul>
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../Pages/JazminesStory.html">About</a>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
    `;
  }
}

  customElements.define('header-component', Header);

 