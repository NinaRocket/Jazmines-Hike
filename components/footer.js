class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <section class="footer">
    <!-- Footer -->
    <footer class="text-center text-white" style="background-color: #ff9507;">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: CTA -->
        <section class="">
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3">Copyright © 2024 Jazmine's Journey</span>
            
          </p>
          <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">P.O. Box 38091 Phoenix, AZ 85069</span>

        </p>
          <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">   <span class="me-3">a 501(c)3 nonprofit </span>
          
        </p>
          <p class="d-flex justify-content-center align-items-center">
          <span class="me-3"><a href="/components/Pages/minutes.html">Meeting Minutes, Tax Exempt Letter and Budget</a></span>
          
        </p>
        </section>
        <!-- Section: CTA -->
      </div>
      <!-- Grid container -->
  
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        <span class="me-3">Created by enRocket Dev <img src="../../Assets/Nina Rocket Icon Black.png" style="height:30px;"></span>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </section>
  <style>
  .footer {
    position: sticky;
    top: 100vh;
    margin-top:20px;
  }
  </style>
   `;
  }
}

  customElements.define('footer-component', Footer);

 