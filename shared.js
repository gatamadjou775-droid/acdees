// ACDEES Shared Components
const ACDEES = {
  phone1: '+225 07 11 61 54 39',
  phone2: '+225 01 71 01 61 41',
  email: 'contact@acdees.ci',
  address: 'Abidjan, Côte d\'Ivoire',

  nav(activePage = '') {
    return `
    <nav id="navbar">
      <a class="logo" href="index.html">
        <img src="logo.png" alt="ACDEES" style="height:48px;width:auto;object-fit:contain;" onerror="this.style.display='none'"/>
      </a>
      <ul class="nav-links">
        <li><a href="services.html" ${activePage==='services'?'class="active"':''}>Services</a></li>
        <li><a href="formations.html" ${activePage==='formations'?'class="active"':''}>Formations</a></li>
        <li><a href="apropos.html" ${activePage==='apropos'?'class="active"':''}>À propos</a></li>
        <li><a href="blog.html" ${activePage==='blog'?'class="active"':''}>Blog</a></li>
        <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
      </ul>
      <a class="nav-cta" href="rendez-vous.html">Diagnostic gratuit</a>
    </nav>`;
  },

  footer() {
    return `
    <footer>
      <div class="footer-top">
        <div class="footer-brand">
          <a class="logo" href="index.html">
            <img src="logo.png" alt="ACDEES" style="height:52px;width:auto;object-fit:contain;" onerror="this.style.display='none'"/>
          </a>
          <p>Agence de Conseil, Digitalisation et Externalisation de Services. Partenaire stratégique des entreprises africaines ambitieuses.</p>
          <div class="footer-slogan">"Transformons votre vision en une entreprise<br>structurée, performante et rentable."</div>
          <div class="footer-payments">
            <span class="payment-chip">Orange Money</span>
            <span class="payment-chip">MTN Money</span>
            <span class="payment-chip">Wave</span>
            <span class="payment-chip">Carte bancaire</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#conseil">Conseil & Structuration</a></li>
            <li><a href="services.html#digital">Digitalisation</a></li>
            <li><a href="services.html#ia">Intelligence Artificielle</a></li>
            <li><a href="services.html#commercial">Développement Commercial</a></li>
            <li><a href="services.html#creation">Création Digitale</a></li>
            <li><a href="services.html#externalisation">Externalisation</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Ressources</h4>
          <ul>
            <li><a href="formations.html">Formations</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="devis.html">Demander un devis</a></li>
            <li><a href="espace-client.html">Espace client</a></li>
            <li><a href="apropos.html">À propos</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">Abidjan, Côte d'Ivoire</a></li>
            <li><a href="tel:+2250711615439">+225 07 11 61 54 39</a></li>
            <li><a href="tel:+2250171016141">+225 01 71 01 61 41</a></li>
            <li><a href="mailto:contact@acdees.ci">contact@acdees.ci</a></li>
            <li><a href="rendez-vous.html">Prendre RDV</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 ACDEES. Tous droits réservés.</span>
        <span><a href="mentions-legales.html" style="color:inherit;text-decoration:none">Mentions légales</a> · <a href="confidentialite.html" style="color:inherit;text-decoration:none">Confidentialité</a></span>
      </div>
    </footer>
    <a class="chatbot-bubble" href="contact.html" title="ACDEES Assistant">
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
    </a>`;
  },

  revealInit() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e,i) => {
        if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'), i*80); obs.unobserve(e.target); }
      });
    }, {threshold:.1});
    els.forEach(el => obs.observe(el));
  }
};
