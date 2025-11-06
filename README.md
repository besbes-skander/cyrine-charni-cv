# 💼 Portfolio Cyrine Charni

Portfolio professionnel moderne construit avec **Next.js 14** et **Tailwind CSS**.

## 🌟 Features

- ✨ Design minimaliste et moderne
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Animations fluides et transitions élégantes
- 🚀 Optimisé pour la performance avec Next.js
- 📊 Case studies détaillés avec métriques concrètes
- 📧 Intégration email et Calendly
- 🎯 SEO optimisé avec métadonnées
- ⚡ Export statique pour déploiement ultra-rapide

## 🛠️ Tech Stack

- **Next.js** 14 (App Router)
- **React** 18.2
- **Tailwind CSS** 3.3
- **Lucide React** (icons)
- **Vercel** (deployment recommandé)

## 📦 Installation locale

```bash
# Clone le repository
git clone https://github.com/ton-username/portfolio-cyrine-charni.git

# Installe les dépendances
cd portfolio-cyrine-charni
npm install

# Lance le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Commandes disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Crée le build de production
npm start        # Lance le serveur de production
npm run lint     # Vérifie le code avec ESLint
```

## 🚀 Déploiement

### Vercel (Recommandé ⭐)
Vercel est la plateforme optimale pour Next.js :

1. Push ton code sur GitHub
2. Va sur [Vercel](https://vercel.com)
3. Connecte ton compte GitHub
4. Importe ton repository
5. Clique sur "Deploy"

✅ **Déploiement automatique** : Chaque push sur `main` déclenche un nouveau déploiement

### Netlify
Alternative également excellente :

1. Push ton code sur GitHub
2. Va sur [Netlify](https://netlify.com)
3. Clique sur "New site from Git"
4. Sélectionne ton repository
5. Configuration de build :
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Clique sur "Deploy"

### GitHub Pages
Pour déployer sur GitHub Pages :

```bash
# Build le projet
npm run build

# Le dossier /out contient les fichiers statiques à déployer
```

## 📝 Personnalisation

### Modifier les couleurs
Édite `tailwind.config.js` pour changer les couleurs principales :

```js
colors: {
  primary: {
    500: '#ec4899', // Rose principal
    600: '#db2777', // Rose foncé
  }
}
```

### Modifier le contenu
Tous les textes sont dans `app/page.js`. C'est un composant React client.

### Modifier les métadonnées (SEO)
Édite `app/layout.js` pour changer le titre, description, etc. :

```js
export const metadata = {
  title: 'Ton Titre',
  description: 'Ta Description',
}
```

### Ajouter ta photo
Dans `app/page.js`, remplace la div emoji (ligne ~100) par une vraie image :

```jsx
<img
  src="/photo.jpg"
  alt="Cyrine Charni"
  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
/>
```

Place ta photo dans le dossier `/public/photo.jpg`.

### Configurer Calendly
Dans `app/page.js`, ligne ~484, remplace par ton vrai lien Calendly :

```jsx
href="https://calendly.com/ton-username"
```

## 📊 Métriques mises en avant

- 150+ contrats signés
- 80K€ de CA généré
- 92% de taux de rétention
- 60+ projets B2B gérés
- +600 leads qualifiés/mois

## 📧 Contact

- **Email**: cyrine.charni12@gmail.com
- **LinkedIn**: [cyrine-charni](https://linkedin.com/in/cyrine-charni)
- **Téléphone**: 07 44 19 69 09
- **Localisation**: Paris, France

## 📄 License

© 2024 Cyrine Charni. Tous droits réservés.

---

Made with ❤️ and lots of ☕