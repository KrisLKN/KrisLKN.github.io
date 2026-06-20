# Portfolio - Kris LOKOUN

Portfolio personnel d'un etudiant en BUT Science des Donnees (parcours VCOD, IUT de Lille).
Site statique bilingue (FR / EN), avec mode clair/sombre, pages projet detaillees,
notebooks Jupyter integres, et une esthetique "glassmorphisme".

> Ce README documente **en detail** comment le site est construit, pour que n'importe qui
> puisse le comprendre, le modifier ou s'en inspirer pour refaire le sien.

**Demo en ligne :** https://krislkn.github.io

---

## 1. Philosophie technique

- **Zero framework, zero build.** Uniquement du **HTML + CSS + JavaScript vanilla**.
  Aucune dependance npm, aucun bundler. On ouvre les fichiers, ca marche.
- **Pourquoi ?** Un portfolio doit etre rapide, durable et hebergeable gratuitement
  (GitHub Pages sert des fichiers statiques). Pas de framework = pas de maintenance,
  pas de version qui casse dans 2 ans.
- **Theming par variables CSS** : toutes les couleurs sont des variables (`--bg`, `--text`,
  `--accent`...). Le mode sombre ne fait que redefinir ces variables. Aucune duplication de style.
- **Internationalisation par attributs** : chaque texte porte un `data-i18n="cle"`, et un
  dictionnaire JavaScript remplace le contenu selon la langue.

---

## 2. Arborescence

```
PORTFOLIO/
├── index.html                 # Page d'accueil (une seule page, plusieurs sections)
├── README.md                  # Ce fichier
├── .gitignore                 # Protege les documents personnels
├── projets/                   # Une page detaillee par projet
│   ├── data-warehouse.html
│   ├── monvoyage.html
│   └── ufc.html
└── assets/
    ├── css/
    │   └── project.css        # Styles PARTAGES par les pages projet
    ├── js/
    │   ├── i18n.js            # Systeme de langue (FR/EN) + dictionnaire
    │   ├── theme.js           # Mode clair/sombre + reveal + barre de progression
    │   └── lightbox.js        # Visionneuse d'images plein ecran
    ├── docs/
    │   └── cv.pdf
    ├── video/
    │   └── presentation.mp4
    ├── notebooks/             # Notebooks Jupyter convertis en HTML (avec outputs)
    │   ├── monvoyage.html
    │   ├── ufc-exploration.html
    │   └── ufc-machine-learning.html
    └── img/
        ├── favicon.svg
        ├── og-image.jpg       # Image d'apercu pour le partage de lien
        ├── profil/            # Photos clair (day) / sombre (night)
        ├── bg/                # Fonds clair/sombre du hero
        ├── stage/             # Fiches de stage
        └── projets/           # Images groupees par projet
            ├── data-warehouse/
            ├── monvoyage/
            └── ufc/
```

> **Note importante** : `index.html` a son CSS **en ligne** (dans une balise `<style>`),
> tandis que les pages projet partagent `assets/css/project.css`. C'est un choix : l'accueil
> a beaucoup de styles uniques, les pages projet partagent une mise en page commune.

---

## 3. Systeme de design

### 3.1 Couleurs (variables CSS)

Definies dans `:root` (mode clair) et surchargees dans `[data-theme="dark"]` :

| Variable | Clair | Sombre | Usage |
|----------|-------|--------|-------|
| `--bg` | `#ffffff` | `#0a0a0a` | Fond principal |
| `--text` | `#0a0a0a` | `#fafafa` | Texte principal |
| `--text-soft` | `#2a2a2a` | `#d8d8d8` | Texte secondaire |
| `--muted` | `#767676` | `#8a8a8a` | Texte attenue |
| `--accent` | `#0099ff` | `#2eaaff` | Bleu d'accent (liens, boutons) |
| `--border` | `rgba(0,0,0,.10)` | `rgba(255,255,255,.12)` | Bordures |
| `--glass-bg` | `rgba(255,255,255,.55)` | `rgba(22,22,26,.45)` | Fond "verre" |

### 3.2 Typographie (Google Fonts)

- **Titres** : `Bricolage Grotesque` (caractere affirme, moderne).
- **Texte** : `Hanken Grotesk` (lisible, chaleureux).
- Choix delibere pour eviter le rendu "generique" d'Inter/Roboto.

### 3.3 Glassmorphisme

Effet "verre depoli" applique aux cartes : fond semi-transparent + flou d'arriere-plan.
```css
background: var(--glass-bg);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid var(--glass-border);
```
Le flou n'est visible que s'il y a quelque chose **derriere** : c'est pour ca que le hero
a une photo de fond.

---

## 4. Fonctionnalites et comment elles marchent

### 4.1 Mode clair / sombre (`assets/js/theme.js`)

- L'attribut `data-theme="light|dark"` sur `<html>` declenche le jeu de variables.
- Le choix est memorise dans `localStorage`.
- **Defaut : clair.** Bascule via un bouton (icone lune/soleil).

```js
html.setAttribute("data-theme", t);          // applique le theme
localStorage.setItem("theme", t);            // memorise
```

### 4.2 Langue FR / EN (`assets/js/i18n.js`)

- Chaque element traduisible porte `data-i18n="cle"`.
- Le fichier contient un objet `I18N = { fr: {...}, en: {...} }`.
- Au chargement (et au clic sur FR/EN), le script parcourt tous les `[data-i18n]` et
  remplace `textContent` par la valeur du dictionnaire.
- **Defaut : anglais** (`DEFAULT_LANG = "en"`), choix memorise dans `localStorage`.
- Parite stricte : les blocs `fr` et `en` ont **exactement les memes cles** (verifie par script).

Ajouter un texte traduisible :
```html
<h2 data-i18n="ma.cle">Texte par defaut</h2>
```
```js
fr: { "ma.cle": "Bonjour" }, en: { "ma.cle": "Hello" }
```

### 4.3 Hero avec fond photo jour/nuit

- Le `#hero` a une **image de fond** differente selon le theme (`bg/day.jpg` / `bg/night.jpg`).
- Un **degrade (scrim)** est superpose pour garder le texte lisible :
```css
background-image: linear-gradient(to bottom, rgba(255,255,255,.62), ..., var(--bg)), url(...);
background-attachment: fixed;   /* effet parallaxe (desactive sur mobile) */
```
- Effet **machine a ecrire** sur le sous-titre (JS : on ajoute/retire des caracteres en boucle).

### 4.4 Bandeaux defilants (marquee)

- Deux bandeaux qui defilent en boucle : un texte, un de logos.
- Technique : on duplique le contenu, puis `transform: translateX(-50%)` en animation
  lineaire infinie. Au survol, l'animation se met en pause.

### 4.5 Compteurs animes (stats)

- Les chiffres montent de 0 a la valeur cible quand la section devient visible.
- Declencheur : `IntersectionObserver`. Animation : `requestAnimationFrame` avec easing.

### 4.6 Competences en accordeon

- Chaque competence est **cliquable** : un clic deroule une liste des **projets** ou cette
  competence est utilisee (chaque projet est un lien).
- Plus de "pourcentages" arbitraires : a la place, une phrase concrete "ce que je sais faire".
- Implementation : `.skill-row.open` declenche un `max-height` en transition + un chevron qui pivote.

### 4.7 Pages projet

Chaque projet a sa page dans `projets/`, avec une structure constante :
- **En-tete** : titre, sous-titre, role, periode, bouton GitHub.
- **Chiffres cles** (`.proj-figures`) : metriques marquantes (ex : `29 tests dbt`, `~60% accuracy`).
- **Contexte / Objectifs / Demarche / Technologies / Resultats** : le recit du projet.
- **Galerie** : captures cliquables (lightbox).
- **Notebook complet** : le notebook Jupyter integre en `<iframe>` (voir 4.9).

### 4.8 Lightbox (`assets/js/lightbox.js`)

- Clic sur une image de galerie (`.shot img`) => ouverture plein ecran.
- Navigation : fleches a l'ecran **ou** touches clavier <- ->, fermeture par Echap / clic exterieur.
- Construite dynamiquement en JS (aucun HTML a ajouter par image).

### 4.9 Notebooks Jupyter integres

- Les notebooks `.ipynb` sont convertis en HTML autonome (images incluses) :
```bash
python -m nbconvert --to html --embed-images mon_notebook.ipynb --output sortie --output-dir assets/notebooks
```
- Ils sont ensuite affiches dans un `<iframe>` sur la page projet, avec un bouton
  "Ouvrir en plein ecran". Resultat : on voit **le code ET les outputs** (graphiques, tableaux).

### 4.10 SEO / partage de lien

Dans le `<head>` de chaque page :
- `<meta name="description">` pour Google.
- Balises **Open Graph** (`og:title`, `og:description`, `og:image`) : quand on partage l'URL
  sur LinkedIn/WhatsApp, une belle carte d'apercu s'affiche (image = `og-image.jpg`).
- `<link rel="icon" href="favicon.svg">` : icone d'onglet.

### 4.11 Polish navigation (`theme.js` + index)

- **Barre de progression** de lecture en haut de page.
- **Surlignage** du lien de section active dans le menu (via `IntersectionObserver`).
- **Bouton retour-en-haut** flottant (apparait apres 500px de defilement).

---

## 5. Traitement des images (reproductible)

Tout est fait en Python avec **Pillow (PIL)**. Points cles :

### 5.1 Correction d'orientation (essentiel pour les photos de telephone)

Les photos de smartphone stockent leur orientation dans les metadonnees EXIF. Si on
redimensionne sans en tenir compte, elles apparaissent **tournees de 90 degres**.
```python
from PIL import Image, ImageOps
im = ImageOps.exif_transpose(Image.open(src))   # corrige l'orientation AVANT tout
```

### 5.2 Compression

```python
if max(im.size) > 1500:
    im = im.resize(..., Image.LANCZOS)          # reduit la taille
im.convert("RGB").save(dst, "JPEG", quality=82, optimize=True)
```
Exemple : le diagramme de classes est passe de **2,7 Mo a 160 Ko**.

### 5.3 Extraction des graphiques d'un notebook

Les graphiques d'un notebook sont stockes en base64 dans le `.ipynb`. On peut les extraire :
```python
import json, base64, io
data = json.loads(open("notebook.ipynb", encoding="utf-8").read())
for cell in data["cells"]:
    for out in cell.get("outputs", []):
        if "image/png" in out.get("data", {}):
            png = base64.b64decode("".join(out["data"]["image/png"]))
            Image.open(io.BytesIO(png)).save(...)
```

### 5.4 Masquage d'information sensible

Le salaire visible sur une fiche de stage a ete masque en dessinant un rectangle de la
couleur du fond par-dessus (PIL `ImageDraw.rectangle`).

---

## 6. Lancer le site en local

Aucune installation requise pour le site lui-meme. Pour le servir :
```bash
# depuis le dossier PORTFOLIO/
python -m http.server 8000
# puis ouvrir http://localhost:8000
```
Pour le tester depuis un telephone sur le meme WiFi :
```bash
python -m http.server 8000 --bind 0.0.0.0
# ouvrir http://<IP-locale-du-PC>:8000 sur le telephone
```

Pour retraiter les images / notebooks (optionnel) :
```bash
pip install pillow nbconvert
```

---

## 7. Publication (GitHub Pages)

Le site est un site utilisateur GitHub Pages, servi automatiquement depuis la branche `main`
du depot `KrisLKN.github.io` :
```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/KrisLKN/KrisLKN.github.io.git
git push -u origin main
```
=> disponible sous quelques minutes a l'adresse **https://krislkn.github.io**.

Le `.gitignore` garantit que les **documents personnels** (rapports `.docx`, dossier `S4/`,
photos sources `PHOTO PORTFOLIO/`, brouillons) **ne sont jamais publies**.

---

## 8. Reutiliser ce portfolio pour le tien

1. Remplace les **textes** : tout est dans `assets/js/i18n.js` (FR et EN).
2. Remplace les **images** dans `assets/img/` (garde la meme structure de dossiers).
3. Adapte les **couleurs** : change `--accent` (et au besoin les autres variables) dans
   `:root` de `index.html` et `assets/css/project.css`.
4. Adapte les **polices** : change le lien Google Fonts et les `font-family`.
5. Duplique une page de `projets/` pour chaque nouveau projet, et ajoute sa carte sur l'accueil.
6. Mets a jour les **metadonnees** (`<title>`, `description`, Open Graph) dans chaque `<head>`.
7. Publie sur GitHub Pages (section 7).

---

## 9. Stack resume

| Domaine | Outils |
|---------|--------|
| Front | HTML5, CSS3 (variables, grid, flexbox, backdrop-filter), JavaScript ES6 (vanilla) |
| Polices | Google Fonts (Bricolage Grotesque, Hanken Grotesk) |
| Traitement images | Python, Pillow |
| Notebooks | Jupyter, nbconvert |
| Hebergement | GitHub Pages |
| i18n | Systeme maison (data-i18n + dictionnaire JS) |

---

*Construit par Kris LOKOUN. Code libre de reutilisation comme base de portfolio.*
