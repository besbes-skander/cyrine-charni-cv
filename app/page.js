'use client';

import { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, MapPin, Download, Calendar, TrendingUp, Users, Target, Heart, Sparkles, Book, Plane, Music } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Cyrine Charni
            </h1>
            <div className="hidden md:flex gap-6">
              {['À propos', 'Compétences', 'Réalisations', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('é', 'e').replace(' ', '-'))}
                  className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
                Disponible pour nouvelles opportunités
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                👋 Bienvenue sur mon portfolio
              </h2>
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Customer Success & Business Growth
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Profil hybride : Marketing × Sales × Gestion de Projet<br />
                <span className="font-semibold">+4 ans d'expérience</span> en B2B SaaS & Scale-ups
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={20} className="text-pink-500" />
                  <span>Paris</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={20} className="text-pink-500" />
                  <a href="mailto:cyrine.charni12@gmail.com" className="hover:text-pink-500">
                    cyrine.charni12@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={20} className="text-pink-500" />
                  <span>07 44 19 69 09</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/cyrine-charni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-300 hover:border-pink-500 hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  <Calendar size={20} />
                  Prendre RDV
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-6xl shadow-2xl">
                👩‍💼
              </div>
              {/* Stats floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-pink-500">150+</div>
                <div className="text-sm text-gray-600">Contrats signés</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-purple-500">80K€</div>
                <div className="text-sm text-gray-600">CA généré</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="a-propos" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            🌟 Qui suis-je au-delà du CV ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mon parcours</h3>
              <p className="text-gray-700 leading-relaxed">
                Je suis Cyrine, 30 ans, Tunisienne installée à Paris depuis 2 ans. Mon parcours ?
                Un mélange de <span className="font-semibold text-pink-600">marketing digital</span>,
                de <span className="font-semibold text-purple-600">vente terrain</span> et
                de <span className="font-semibold text-blue-600">gestion de projets</span>.<br /><br />
                En 2022, j'ai quitté la Tunisie pour me challenger en France. J'ai repris les études
                en alternance (Mastère Business Development) tout en bossant chez For Me Lab.
                Aujourd'hui, je cherche ma prochaine aventure dans une scale-up où je pourrai
                combiner ce que j'aime : la relation client, l'autonomie et les résultats concrets.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">💡 Ce qui me fait vibrer</h3>
              {[
                { icon: '✨', title: 'Autonomie & liberté', desc: "Je m'épanouis quand on me fait confiance et qu'on me laisse piloter mes projets" },
                { icon: '📊', title: 'Impact mesurable', desc: "J'adore voir le fruit de mon travail : un contrat signé, un CA qui augmente" },
                { icon: '🤝', title: 'Relation client forte', desc: "Mon moteur, c'est la satisfaction client et les voir réussir" },
                { icon: '🚀', title: 'Esprit d\'équipe', desc: "J'aime les équipes où on se soutient et célèbre les victoires ensemble" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valeurs */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">🎯 Mes valeurs professionnelles</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Authenticité', desc: 'Je dis ce que je pense, je fais ce que je dis' },
                { title: 'Résilience', desc: "J'ai quitté mon pays, changé de carrière, rebondi plusieurs fois" },
                { title: 'Curiosité', desc: "J'apprends constamment (AI tools, CRM, certifications...)" },
                { title: 'Impact', desc: 'Je ne veux pas juste "faire mon job", je veux créer de la valeur réelle' }
              ].map((val, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl font-bold mb-2">{val.title}</div>
                  <div className="text-sm opacity-90">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            🛠️ Mes compétences & outils
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Compétences principales */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Compétences clés</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Customer Success & Account Management',
                    skills: ['Gestion de portefeuille B2B', 'Onboarding & adoption', 'Upsell/Cross-sell', 'Rétention (NPS, CSAT)']
                  },
                  {
                    title: 'Business Development',
                    skills: ['Prospection multicanale', 'Qualification & closing', 'Pipeline management', 'Négociation']
                  },
                  {
                    title: 'Gestion de projet',
                    skills: ['Cadrage des besoins', 'Coordination multi-parties', 'Suivi budgétaire', 'Livraison délais']
                  },
                  {
                    title: 'Data & Performance',
                    skills: ['Analyse KPI', 'Reporting', 'A/B testing', 'Optimisation conversion']
                  }
                ].map((category, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-gray-900 mb-3">{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack technique */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Stack d'outils</h3>
              <div className="space-y-6">
                {[
                  {
                    category: 'CRM & Sales',
                    tools: ['Salesforce ⭐⭐⭐⭐⭐', 'HubSpot ⭐⭐⭐⭐⭐', 'Sellsy ⭐⭐⭐⭐', 'LinkedIn Sales Navigator']
                  },
                  {
                    category: 'Gestion de projet',
                    tools: ['Notion ⭐⭐⭐⭐⭐', 'Trello, Monday, Asana', 'ClickUp', 'Jira']
                  },
                  {
                    category: 'AI & Productivité',
                    tools: ['ChatGPT, Claude, Gemini', 'Notion AI']
                  },
                  {
                    category: 'Suite Office & Analytics',
                    tools: ['Excel, PowerPoint, Word', 'Google Analytics', 'Meta Business']
                  }
                ].map((stack, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-gray-900 mb-3">{stack.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="realisations" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            📊 Mes réalisations concrètes
          </h2>

          <div className="space-y-12">
            {/* Case Study 1: Mylerz */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-pink-500 p-3 rounded-xl">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    🚀 Comment j'ai généré 80K€ de CA en 1 an chez Mylerz
                  </h3>
                  <p className="text-gray-600">Account Manager - Sales Executive | Sept 2022 - Sept 2023</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">🎯 Le défi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Marché ultra-compétitif (logistique e-commerce Tunisie)</li>
                    <li>• Démarrage de zéro (pas de portefeuille existant)</li>
                    <li>• Premier rôle commercial terrain</li>
                    <li>• Objectifs ambitieux de CA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">💡 Ma stratégie</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <span className="font-semibold">Prospection multicanale</span> : 50+ appels/jour, terrain, LinkedIn</li>
                    <li>• <span className="font-semibold">Écoute avant vente</span> : 1h découverte par lead</li>
                    <li>• <span className="font-semibold">Suivi rigoureux</span> : Onboarding personnalisé + check-in hebdo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">📈 Les résultats</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Contrats signés', value: '150', color: 'pink' },
                    { label: 'CA généré', value: '80K€', color: 'purple' },
                    { label: 'Taux rétention', value: '92%', color: 'blue' },
                    { label: 'Taux conversion', value: '40%', color: 'green' }
                  ].map((stat, idx) => (
                    <div key={idx} className={`text-center p-4 bg-${stat.color}-50 rounded-lg`}>
                      <div className={`text-3xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study 2: For Me Lab */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-500 p-3 rounded-xl">
                  <Target className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    🎨 Gestion de 60+ projets B2B chez For Me Lab
                  </h3>
                  <p className="text-gray-600">Cheffe de Projet Sales & Marketing | Sept 2024 - Sept 2025</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">🎯 Le défi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Gérer 5-10 projets simultanés/mois</li>
                    <li>• Coordonner clients + artisans + équipes internes</li>
                    <li>• Respecter délais serrés (événements)</li>
                    <li>• Jongler entre sales et ops</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">💡 Ma stratégie</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <span className="font-semibold">Cadrage précis</span> : Brief validé avant lancement</li>
                    <li>• <span className="font-semibold">Coordination Notion</span> : Kanban + Slack channels dédiés</li>
                    <li>• <span className="font-semibold">Sourcing smart</span> : Négociation -12% coûts matières</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">📈 Les résultats</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Projets gérés', value: '60+', color: 'purple' },
                    { label: 'Livraison délais', value: '100%', color: 'green' },
                    { label: 'Satisfaction', value: '4.8/5', color: 'blue' },
                    { label: 'Économies', value: '-12%', color: 'pink' }
                  ].map((stat, idx) => (
                    <div key={idx} className={`text-center p-4 bg-${stat.color}-50 rounded-lg`}>
                      <div className={`text-3xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study 3: HUNTEED */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-500 p-3 rounded-xl">
                  <Users className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    🎯 +600 leads qualifiés/mois chez HUNTEED
                  </h3>
                  <p className="text-gray-600">Business Developer | Janv 2024 - Juillet 2024</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">💡 Ma mission</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Prospection multicanale (Salesforce, LinkedIn)</li>
                    <li>• Conversion & qualification via HubSpot</li>
                    <li>• Prise de RDV commerciaux</li>
                    <li>• Gestion du closing</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">📈 Impact</h4>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">+600</div>
                    <div className="text-gray-600">Leads qualifiés par mois</div>
                    <div className="mt-4 text-sm text-gray-500">
                      Via optimisation du pipeline Salesforce + LinkedIn Sales Navigator
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que je cherche */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">🎯 Ce que je cherche</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { label: 'Poste', value: 'Customer Success Manager / Account Manager' },
              { label: 'Secteur', value: 'SaaS, Tech, E-commerce, Fintech' },
              { label: 'Taille', value: 'Scale-up (20-300 personnes) en croissance' },
              { label: 'Culture', value: 'Autonomie, impact, esprit d\'équipe' },
              { label: 'Mode de travail', value: 'Remote ou Hybride (2-3j/semaine)' },
              { label: 'Salaire', value: '40-50K€ (fixe + variable)' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-sm opacity-90 mb-1">{item.label}</div>
                <div className="font-bold text-lg">{item.value}</div>
              </div>
            ))}
          </div>
          <p className="text-xl opacity-90">
            Je cherche une scale-up où combiner ce que j'aime :<br />
            <span className="font-bold">relation client</span>, <span className="font-bold">autonomie</span> et <span className="font-bold">résultats concrets</span>
          </p>
        </div>
      </section>

      {/* Au-delà du travail */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            🌈 Au-delà du travail
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Heart size={40} />, title: 'Yoga matinal', desc: 'Mon rituel sacré pour démarrer la journée', color: 'pink' },
              { icon: <Music size={40} />, title: 'Bachata', desc: 'Ma passion depuis 3 ans', color: 'purple' },
              { icon: <Plane size={40} />, title: 'Voyages & randonnées', desc: 'Besoin de bouger, découvrir, m\'évader', color: 'blue' },
              { icon: <Book size={40} />, title: 'Lecture', desc: 'Développement perso, business, romans', color: 'green' },
              { icon: <Sparkles size={40} />, title: 'Spiritualité', desc: 'Méditation, journaling, quête de sens', color: 'yellow' }
            ].map((hobby, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${hobby.color}-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}>
                <div className={`text-${hobby.color}-500 mb-4`}>{hobby.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{hobby.title}</h3>
                <p className="text-gray-600">{hobby.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900">
              Mon équilibre : <span className="text-pink-500">bosser dur</span>, <span className="text-purple-500">vivre pleinement</span> ✨
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            📞 On travaille ensemble ?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Si tu cherches quelqu'un qui combine marketing, sales et gestion de projet,<br />
            qui a prouvé qu'elle sait créer des résultats et qui s'épanouit dans les scale-ups...
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:cyrine.charni12@gmail.com"
              className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
            >
              <Mail size={24} />
              M'envoyer un email
            </a>
            <a
              href="https://calendly.com/cyrine-charni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-white text-gray-900 rounded-2xl font-bold text-lg border-2 border-gray-300 hover:border-pink-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all"
            >
              <Calendar size={24} />
              Prendre RDV (Calendly)
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://linkedin.com/in/cyrine-charni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
            >
              <Linkedin size={24} />
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              href="tel:0744196909"
              className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
            >
              <Phone size={24} />
              <span className="font-semibold">07 44 19 69 09</span>
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-4">Dispo pour :</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                'Un café virtuel (ou réel si tu es à Paris ☕)',
                'Échanger sur le Customer Success',
                'Discuter d\'une opportunité dans ta boîte',
                'Partager des tips sales/CS'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-pink-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="mb-2">Ce portfolio a été créé avec ❤️ (et beaucoup de React + Tailwind)</p>
        <p className="text-sm text-gray-400">Dernière mise à jour : Novembre 2024</p>
      </footer>
    </div>
  );
}
