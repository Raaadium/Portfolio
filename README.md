# Portfolio Community Manager Web3.0

Ce portfolio est une page web simple et moderne conçue pour présenter vos services de Community Management dans l'univers Web3.0.

## Structure du site

Le site est composé d'une seule page avec plusieurs sections :
- Hero section avec présentation
- À propos
- Compétences
- Projets
- Formulaire de contact (intégration Calendly)

## Comment personnaliser le site

### 1. Modifier le contenu textuel
Ouvrez le fichier `index.html` avec un éditeur de texte et modifiez :
- Le titre dans la balise `<title>`
- Les textes dans les différentes sections
- Les liens sociaux dans le footer

### 2. Modifier les projets
Ouvrez le fichier `script.js` et modifiez le tableau `projects` avec vos propres projets :
```javascript
const projects = [
    {
        title: "Votre Projet",
        description: "Description du projet",
        metrics: "Vos métriques",
        image: "lien_vers_image"
    },
    // Ajoutez d'autres projets...
];
```

### 3. Intégrer Calendly
1. Créez un compte sur Calendly (https://calendly.com)
2. Configurez vos disponibilités et créez un lien de réservation
3. Dans `index.html`, remplacez `VOTRE_LIEN_CALENDLY` par votre lien Calendly

### 4. Personnaliser les couleurs
Ouvrez `styles.css` et modifiez les variables de couleur en haut du fichier :
```css
:root {
    --primary-color: #00ff9d;
    --secondary-color: #6c00ff;
    --background-color: #0a0a0a;
    --text-color: #ffffff;
}
```

## Hébergement
Pour mettre le site en ligne, vous pouvez utiliser des services d'hébergement gratuits comme :
- GitHub Pages
- Netlify
- Vercel

## Support
Pour toute question ou assistance, n'hésitez pas à contacter un développeur web.
a