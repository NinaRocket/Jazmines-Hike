class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {

    if (!document.getElementById('fontAwesomeStylesheet')) {
      const fontAwesomeCSS = document.createElement('link');
      fontAwesomeCSS.id = 'fontAwesomeStylesheet';  // Prevent duplicates
      fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      fontAwesomeCSS.rel = 'stylesheet';
      document.head.appendChild(fontAwesomeCSS);
    }

    this.innerHTML = `
    <section class="footer">
    <!-- Footer -->
    <footer class="text-center text-white" style="background-color: #ff9507;">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: CTA -->
        <section class="">
         Follow Us on Social Media
          <div style="padding: 5px;">
          <a href="https://www.youtube.com/@_jazminesjourney_" target="_blank"><i class="fa-brands fa-youtube" style="color:red;font-size:25px;padding: 5px;"></i></a>
          <a href="https://www.instagram.com/_jazminesjourney_/#" target="_blank"><i class="fa-brands fa-instagram" style="color:purple;font-size:25px;padding: 5px;"></i></a>
          <a href="https://jazminesjourneyblog.wordpress.com" target="_blank"><i class="fa-brands fa-wordpress" style="color:darkblue;font-size:25px;padding: 5px;"></i></a>
          <a href="https://www.tiktok.com/@jazminesjourney" target="_blank"><i class="fa-brands fa-tiktok" style="color:white;font-size:25px;padding: 5px;"></i></a>
          <a href="https://www.facebook.com/JazminesJourney" target="_blank"><i class="fa-brands fa-facebook" style="color:blue;font-size:25px;padding: 5px;"></i></a>
     
        </div>
        
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3">Copyright © 2025 Jazmine's Journey</span>
            
          </p>
          <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">P.O. Box 38091 Phoenix, AZ 85069</span>

        </p>
          <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">   <span class="me-3">a 501(c)3 nonprofit </span>
          
        </p>
          <p class="d-flex justify-content-center align-items-center">
          <span class="me-3"><a href="/Pages/minutes.html">Meeting Minutes, Tax Exempt Letter and Documents</a></span>
          
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

 