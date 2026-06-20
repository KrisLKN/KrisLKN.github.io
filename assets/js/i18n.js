/* =========================================================================
   i18n - Systeme de langue partage (FR / EN)
   Utilisation : ajouter data-i18n="cle" sur un element.
   Le contenu textuel sera remplace selon la langue choisie.
   Pour traduire un attribut : data-i18n-attr="placeholder:cle,aria-label:cle"
   ========================================================================= */

const I18N = {
  fr: {
    /* --- NAV --- */
    "nav.about": "A propos",
    "nav.skills": "Competences",
    "nav.projects": "Projets",
    "nav.experience": "Parcours",
    "nav.contact": "Contact",
    "nav.video": "Presentation",
    "nav.back": "Retour a l'accueil",

    /* --- HERO --- */
    "hero.tag": "Disponible pour alternance / stage",
    "hero.desc": "Salut ! Je suis Kris, etudiant en BUT Science des Donnees (parcours VCOD) a l'IUT de Lille. Je transforme les donnees brutes en insights actionnables, de la collecte au scraping jusqu'a la visualisation decisionnelle.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.cv": "Telecharger CV",
    "hero.cta.video": "Ma presentation",
    "hero.photo.badge": "Ouvert aux opportunites",

    /* --- VIDEO --- */
    "video.label": "Presentation",
    "video.title": "Ma video de presentation",
    "video.desc": "Une courte video pour me presenter, parler de mon parcours et de ma passion pour la donnee.",

    /* --- ABOUT --- */
    "about.label": "A propos",
    "about.title": "Qui suis-je",
    "about.p1": "Etudiant en 2eme annee de BUT Science des Donnees (parcours VCOD - Visualisation et Conception d'Outils Decisionnels) a l'IUT de Lille, je me specialise dans la chaine complete de la donnee : collecte, integration, analyse et restitution.",
    "about.p2": "Mes projets academiques m'ont permis de travailler sur des sujets varies : scraping web et API Python, Data Warehousing avec SSIS, series temporelles, et conformite reglementaire des donnees.",
    "about.p3": "J'ai egalement realise deux stages de Data Analyst : chez All In One Technologie au Luxembourg, puis a la Ville de Lille, ou j'ai mis en pratique mes competences data dans des contextes professionnels reels.",
    "about.stat1": "Projets academiques",
    "about.stat2": "Annees de formation",
    "about.stat3": "Stages professionnels",
    "about.stat4": "Science des donnees",

    /* --- SKILLS --- */
    "skills.label": "Competences",
    "skills.title": "Stack technique",
    "skills.seenIn": "Vu dans ces projets",
    "skills.s1.name": "Python Data",
    "skills.s1.do": "Collecter des donnees via API et scraping, les nettoyer et les analyser avec pandas, et produire des visualisations.",
    "skills.s2.name": "Bases de donnees & SQL",
    "skills.s2.do": "Modeliser et interroger des bases relationnelles, construire des flux ETL/ELT et alimenter un entrepot de donnees.",
    "skills.s3.name": "Business Intelligence",
    "skills.s3.do": "Concevoir des tableaux de bord Power BI, ecrire des mesures DAX et restituer des indicateurs clairs pour les metiers.",
    "skills.s4.name": "Statistiques & prevision",
    "skills.s4.do": "Decomposer des series temporelles, ajuster des modeles ARIMA et mener des tests statistiques.",
    "skills.s5.name": "Architecture data & gouvernance",
    "skills.s5.do": "Concevoir un modele en etoile, gerer l'historisation des dimensions (SCD2) et appliquer les regles RGPD.",
    "extra.title": "Langues & atouts",
    "extra.label": "Profil",
    "extra.langTitle": "Langues",
    "extra.lang1": "Francais - Langue maternelle",
    "extra.lang2": "Anglais - Professionnel",
    "extra.softTitle": "Soft-skills",
    "extra.soft1": "Adaptabilite",
    "extra.soft2": "Autonomie & rigueur",
    "extra.soft3": "Communication metiers",

    /* --- PROJECTS (index) --- */
    "projects.label": "Projets",
    "projects.title": "Mes realisations",
    "projects.viewProject": "Voir le projet",
    "projects.viewGithub": "Voir sur GitHub",
    "projects.repos.label": "Depots GitHub",
    "projects.repos.title": "Mes repositories publics",

    "proj.dwh.tag": "Projet phare - SAE S4 - Binome avec Abel THYS",
    "proj.dwh.title": "Data Warehouse Chinook",
    "proj.dwh.short": "Conception et alimentation d'un entrepot de donnees complet a partir de la base transactionnelle Chinook (11 tables, ~15 000 lignes). Architecture decisionnelle en 3 couches DSA -> ODS -> DWH, modele en etoile, dimensions a evolution lente (SCD2) et restitution sous Power BI.",
    "proj.monvoyage.tag": "Projet Python - SAE S3",
    "proj.monvoyage.title": "MonVoyage",
    "proj.monvoyage.short": "Application Python orientee objet de planification de voyages personnalises. Collecte automatisee via APIs et scraping BeautifulSoup (meteo, hotels, restaurants, attractions), puis generation d'un programme journalier avec budget estime et carte interactive Folium.",
    "proj.ufc.tag": "Projet personnel - Data Engineering & Machine Learning",
    "proj.ufc.title": "UFC Fight Predictor",
    "proj.ufc.short": "Pipeline data de bout en bout (DuckDB + dbt + scikit-learn + Streamlit) qui predit l'issue des combats UFC. L'accent est mis sur la methodologie : qualite des donnees (29 tests), variables sans fuite temporelle et evaluation honnete face a une baseline.",

    /* --- EXPERIENCE --- */
    "exp.label": "Parcours",
    "exp.title": "Experience & formation",
    "exp.s_vdl.period": "Stage 2",
    "exp.s_vdl.title": "Stagiaire Data Analyst",
    "exp.s_vdl.org": "Ville de Lille - Direction de la Proprete Publique",
    "exp.s_vdl.desc": "Cartographies decisionnelles des zones d'incivilites (QGIS, PyQGIS), developpement d'une application mobile Power Apps connectee a SharePoint, dashboards Power BI (DAX) et automatisation VBA Excel.",
    "exp.s_aio.period": "Stage 1",
    "exp.s_aio.title": "Stagiaire Data Analyst",
    "exp.s_aio.org": "All In One Technologie - Luxembourg",
    "exp.s_aio.desc": "Automatisation de l'extraction de rapports financiers en Python, centralisation de plus d'un million d'enregistrements dans une base PostgreSQL, et dashboards Power BI de suivi des performances financieres.",
    "exp.formation.period": "2023 - Aujourd'hui",
    "exp.formation.title": "Etudiant BUT Science des Donnees",
    "exp.formation.org": "IUT de Lille - Parcours VCOD",
    "exp.formation.desc": "Formation en 3 ans axee sur la collecte, l'analyse et la valorisation des donnees. Projets academiques en Python, SQL, Power BI, SSIS, statistiques et machine learning.",

    /* --- CTA --- */
    "cta.title": "Travaillons ensemble",
    "cta.desc": "Disponible pour alternance, stage ou collaboration. Telechargez mon CV pour plus de details.",
    "cta.cv": "Telecharger CV",
    "cta.mail": "M'ecrire",

    /* --- CONTACT --- */
    "contact.label": "Contact",
    "contact.title": "Me contacter",
    "contact.cv.value": "Telecharger PDF",

    /* --- FOOTER --- */
    "footer.by": "Fait par",

    /* --- PROJECT PAGES : commun --- */
    "pp.context": "Contexte",
    "pp.objectives": "Objectifs",
    "pp.approach": "Demarche",
    "pp.stack": "Technologies",
    "pp.results": "Resultats",
    "pp.gallery": "Galerie",
    "pp.skills": "Competences mobilisees",
    "pp.repo": "Code source sur GitHub",
    "pp.backProjects": "Tous les projets",
    "pp.summary": "Resume",
    "pp.detailed": "Version detaillee",
    "pp.notebook": "Notebook complet",
    "pp.notebookDesc": "Le notebook Jupyter integral, avec tout le code, les analyses et les resultats affiches.",
    "pp.openNotebook": "Ouvrir en plein ecran",
    "pp.nbExploration": "Notebook : exploration des donnees",
    "pp.nbMl": "Notebook : machine learning",
    "pp.figures": "Chiffres cles",
    "fig.dwh.1": "Tables sources",
    "fig.dwh.2": "Lignes traitees",
    "fig.dwh.3": "Couches ELT",
    "fig.dwh.4": "Dashboards Power BI",
    "fig.mv.1": "Classes POO",
    "fig.mv.2": "Sources de donnees",
    "fig.mv.3": "Carte interactive",
    "fig.ufc.1": "Tests dbt",
    "fig.ufc.2": "Accuracy (test)",
    "fig.ufc.3": "Features finales",

    /* --- PAGE : Data Warehouse --- */
    "dwh.subtitle": "Entrepot de donnees decisionnel - SAE S4",
    "dwh.meta.role": "Role : conception & developpement (binome avec Abel THYS)",
    "dwh.meta.period": "Periode : septembre 2025 - janvier 2026",
    "dwh.context.text": "Dans le cadre de la SAE 4 du BUT Science des Donnees, l'objectif etait de batir une solution decisionnelle complete a partir de la base de donnees transactionnelle Chinook (un magasin de musique en ligne : 11 tables, environ 15 000 lignes). Le defi : transformer une base operationnelle, pensee pour les transactions du quotidien, en un entrepot de donnees optimise pour l'analyse strategique.",
    "dwh.obj.1": "Analyser la base source Chinook et identifier les axes d'analyse pertinents.",
    "dwh.obj.2": "Concevoir un modele decisionnel en etoile (table de faits + dimensions).",
    "dwh.obj.3": "Mettre en place une architecture ELT en 3 couches (DSA, ODS, DWH).",
    "dwh.obj.4": "Automatiser les flux de chargement avec SSIS.",
    "dwh.obj.5": "Restituer les indicateurs cles dans des tableaux de bord Power BI.",
    "dwh.approach.text": "Les donnees suivent un parcours en trois couches. La DSA (Data Staging Area) recopie brutalement la source. L'ODS (Operational Data Store) historise les donnees en ajoutant une date de chargement. Enfin le DWH (Data Warehouse) restructure le tout en modele en etoile, avec une gestion des dimensions a evolution lente (SCD2) pour conserver l'historique des changements. Les flux sont orchestres par des packages SSIS sous SQL Server.",
    "dwh.approach.flow": "Source Chinook -> DSA (copie brute) -> ODS (historisation) -> DWH (modele en etoile) -> Power BI",
    "dwh.results.text": "L'entrepot alimente un rapport Power BI multi-pages qui couvre la synthese globale, l'analyse des ventes, le profil client, le catalogue musical et la performance des employes. Les flux SSIS s'executent de bout en bout de maniere fiable et reproductible.",
    "dwh.cap.synthese": "Tableau de bord de synthese",
    "dwh.cap.ventes": "Analyse des ventes",
    "dwh.cap.client": "Analyse client",
    "dwh.cap.catalogue": "Catalogue musical",
    "dwh.cap.employes": "Performance des employes",
    "dwh.cap.etoile": "Modele en etoile",
    "dwh.cap.ssis": "Chargement SSIS du DWH",
    "dwh.cap.etl": "Execution complete de l'ETL",
    "dwh.cap.scd2": "Historisation SCD2",
    "dwh.cap.fact": "Table de faits alimentee",
    "dwh.cap.rundsa": "Chargement de la couche DSA",
    "dwh.cap.runods": "Chargement de la couche ODS",
    "dwh.cap.scd2details": "SCD2 - lignes historisees",

    /* --- PAGE : MonVoyage --- */
    "mv.subtitle": "Planificateur de voyages en Python - SAE S3",
    "mv.meta.role": "Role : conception & developpement (individuel)",
    "mv.meta.period": "Periode : semestre 3 (2025-2026)",
    "mv.context.text": "Ce projet de la SAE 3 visait a concevoir une application Python capable de planifier un voyage de A a Z. L'utilisateur indique une ville, un nombre de jours et un nombre de personnes ; l'application collecte automatiquement toutes les informations utiles sur le web et genere un programme de voyage complet.",
    "mv.obj.1": "Collecter des donnees web via des APIs et du scraping (BeautifulSoup).",
    "mv.obj.2": "Structurer l'application avec une vraie architecture orientee objet.",
    "mv.obj.3": "Calculer un budget estime par categorie de depense.",
    "mv.obj.4": "Generer un programme jour par jour.",
    "mv.obj.5": "Afficher les lieux sur une carte interactive (Folium).",
    "mv.approach.text": "L'application est structuree autour de six classes (Voyage, Ville, Hotel, Restaurant, Attraction, Transport). Chaque source de donnees (meteo, hebergement, restauration, activites) est collectee via une API ou par scraping, puis nettoyee avec pandas. Le resultat est un itineraire detaille accompagne d'une carte interactive et d'une estimation budgetaire.",
    "mv.classes.text": "Le diagramme de classes ci-dessous illustre l'architecture orientee objet de l'application.",
    "mv.results.text": "MonVoyage produit un itineraire jour par jour, une carte interactive des points d'interet et un budget previsionnel detaille, le tout a partir d'une simple saisie utilisateur. Le projet est documente par un notebook Jupyter de demonstration sur la ville de Paris.",
    "mv.cap.classes": "Diagramme de classes UML",
    "mv.cap.meteo": "Previsions meteo collectees",
    "mv.cap.hotels": "Analyse des hotels (prix & categories)",
    "mv.cap.restaurants": "Restaurants & cafes",
    "mv.cap.budget": "Repartition du budget par categorie",
    "mv.cap.comparaison": "Comparaison de destinations (Paris / Lyon)",

    /* --- PAGE : UFC --- */
    "ufc.subtitle": "Pipeline data & ML de prediction de combats UFC",
    "ufc.meta.role": "Role : conception & developpement (personnel)",
    "ufc.meta.period": "Projet portfolio",
    "ufc.context.text": "L'objectif : construire un pipeline data complet, de style production, qui predit le vainqueur d'un combat UFC, des CSV bruts jusqu'a un dashboard interactif. Le vrai sujet n'est pas le score brut mais la methodologie : tester la qualite des donnees, construire des variables sans fuite temporelle, et evaluer le modele honnetement face a une baseline.",
    "ufc.obj.1": "Stocker et interroger les donnees dans DuckDB (base analytique OLAP).",
    "ufc.obj.2": "Transformer et documenter les donnees avec dbt (couches staging puis marts).",
    "ufc.obj.3": "Garantir l'integrite avec 29 tests automatises (not_null, unique, accepted_values).",
    "ufc.obj.4": "Construire des features sans fuite : cumuls sur les combats passes uniquement, split train/test temporel.",
    "ufc.obj.5": "Entrainer et comparer plusieurs modeles, puis exposer les predictions dans un dashboard Streamlit.",
    "ufc.approach.text": "Les CSV bruts sont charges dans DuckDB, puis transformes avec dbt : les modeles de staging (stg_*) nettoient la source, les modeles marts (fct_*, ml_fight_dataset) construisent la table d'apprentissage. Une cle primaire fight_id (extraite des URLs) gere les cas limites (deux combattants se rencontrant deux fois le meme soir). Toutes les variables cumulees n'utilisent que les combats passes (fenetre se terminant a 1 PRECEDING) et le decoupage train/test est temporel - entrainement sur les anciens combats, test sur les recents - pour imiter une vraie prediction. Le modele final est une regression logistique a 16 variables, volontairement simple : elle generalise mieux que Random Forest ou XGBoost, qui sur-apprennent.",
    "ufc.approach.flow": "CSV bruts -> DuckDB -> dbt (staging -> marts) -> scikit-learn (split temporel) -> dashboard Streamlit",
    "ufc.results.text": "Le modele atteint ~0,60 d'accuracy en test, contre ~0,51 pour une baseline (classe majoritaire) - solide pour le MMA, ou meme les modeles professionnels plafonnent autour de 0,60-0,65. Les variables sont combinees en differences (A moins B) : palmares (combats, victoires, taux de victoire), forme (victoire precedente, jours depuis le dernier combat) et profil (age, allonge). Plusieurs features ont ete testees puis abandonnees faute de signal mesurable : un choix data-driven assume.",
    "ufc.cap.predictions": "Predictions du modele pour un evenement",
    "ufc.cap.dbt": "29 tests de qualite dbt valides",
  },

  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Background",
    "nav.contact": "Contact",
    "nav.video": "Intro",
    "nav.back": "Back to home",

    "hero.tag": "Available for apprenticeship / internship",
    "hero.desc": "Hi! I'm Kris, a Data Science student (BI track) at IUT de Lille. I turn raw data into actionable insights, from collection and scraping all the way to decision-making dashboards.",
    "hero.cta.projects": "View my projects",
    "hero.cta.cv": "Download CV",
    "hero.cta.video": "Watch my intro",
    "hero.photo.badge": "Open to opportunities",

    "video.label": "Introduction",
    "video.title": "My presentation video",
    "video.desc": "A short video to introduce myself, my background and my passion for data.",

    "about.label": "About",
    "about.title": "Who I am",
    "about.p1": "Second-year Data Science student (BI track - Visualisation and Design of Decision-Support Tools) at IUT de Lille, I specialise in the full data lifecycle: collection, integration, analysis and reporting.",
    "about.p2": "My academic projects covered varied topics: web scraping and Python APIs, Data Warehousing with SSIS, time series, and data regulatory compliance.",
    "about.p3": "I also completed two Data Analyst internships: at All In One Technologie in Luxembourg, then at the City of Lille, applying my data skills in real professional environments.",
    "about.stat1": "Academic projects",
    "about.stat2": "Years of training",
    "about.stat3": "Professional internships",
    "about.stat4": "Data Science degree",

    "skills.label": "Skills",
    "skills.title": "Tech stack",
    "skills.seenIn": "Seen in these projects",
    "skills.s1.name": "Python Data",
    "skills.s1.do": "Collect data via APIs and scraping, clean and analyse it with pandas, and build visualisations.",
    "skills.s2.name": "Databases & SQL",
    "skills.s2.do": "Model and query relational databases, build ETL/ELT flows and load a data warehouse.",
    "skills.s3.name": "Business Intelligence",
    "skills.s3.do": "Design Power BI dashboards, write DAX measures and deliver clear KPIs for business teams.",
    "skills.s4.name": "Statistics & forecasting",
    "skills.s4.do": "Decompose time series, fit ARIMA models and run statistical tests.",
    "skills.s5.name": "Data architecture & governance",
    "skills.s5.do": "Design a star schema, manage slowly changing dimensions (SCD2) and apply GDPR rules.",
    "extra.title": "Languages & strengths",
    "extra.label": "Profile",
    "extra.langTitle": "Languages",
    "extra.lang1": "French - Native",
    "extra.lang2": "English - Professional",
    "extra.softTitle": "Soft skills",
    "extra.soft1": "Adaptability",
    "extra.soft2": "Autonomy & rigour",
    "extra.soft3": "Business communication",

    "projects.label": "Projects",
    "projects.title": "My work",
    "projects.viewProject": "View project",
    "projects.viewGithub": "View on GitHub",
    "projects.repos.label": "GitHub repositories",
    "projects.repos.title": "My public repositories",

    "proj.dwh.tag": "Flagship project - Year 2 - Pair work with Abel THYS",
    "proj.dwh.title": "Chinook Data Warehouse",
    "proj.dwh.short": "Design and loading of a complete data warehouse from the Chinook transactional database (11 tables, ~15,000 rows). A 3-layer decision architecture DSA -> ODS -> DWH, star schema, slowly changing dimensions (SCD2) and Power BI reporting.",
    "proj.monvoyage.tag": "Python project - Year 2",
    "proj.monvoyage.title": "MonVoyage",
    "proj.monvoyage.short": "Object-oriented Python app for planning personalised trips. Automated data collection via APIs and BeautifulSoup scraping (weather, hotels, restaurants, attractions), then generation of a day-by-day plan with estimated budget and an interactive Folium map.",
    "proj.ufc.tag": "Personal project - Data Engineering & Machine Learning",
    "proj.ufc.title": "UFC Fight Predictor",
    "proj.ufc.short": "End-to-end data pipeline (DuckDB + dbt + scikit-learn + Streamlit) that predicts the outcome of UFC fights. The focus is on methodology: data quality (29 tests), leakage-free features and honest evaluation against a baseline.",

    "exp.label": "Background",
    "exp.title": "Experience & education",
    "exp.s_vdl.period": "Internship 2",
    "exp.s_vdl.title": "Data Analyst Intern",
    "exp.s_vdl.org": "City of Lille - Public Cleanliness Department",
    "exp.s_vdl.desc": "Decision-support mapping of incivility zones (QGIS, PyQGIS), development of a Power Apps mobile app connected to SharePoint, Power BI dashboards (DAX) and Excel VBA automation.",
    "exp.s_aio.period": "Internship 1",
    "exp.s_aio.title": "Data Analyst Intern",
    "exp.s_aio.org": "All In One Technologie - Luxembourg",
    "exp.s_aio.desc": "Automation of financial report extraction in Python, centralisation of over a million records in a PostgreSQL database, and Power BI dashboards tracking financial performance.",
    "exp.formation.period": "2023 - Present",
    "exp.formation.title": "Data Science student",
    "exp.formation.org": "IUT de Lille - BI track",
    "exp.formation.desc": "3-year programme focused on data collection, analysis and value creation. Academic projects in Python, SQL, Power BI, SSIS, statistics and machine learning.",

    "cta.title": "Let's work together",
    "cta.desc": "Available for apprenticeship, internship or collaboration. Download my CV for more details.",
    "cta.cv": "Download CV",
    "cta.mail": "Email me",

    "contact.label": "Contact",
    "contact.title": "Get in touch",
    "contact.cv.value": "Download PDF",

    "footer.by": "Made by",

    "pp.context": "Context",
    "pp.objectives": "Objectives",
    "pp.approach": "Approach",
    "pp.stack": "Technologies",
    "pp.results": "Results",
    "pp.gallery": "Gallery",
    "pp.skills": "Skills used",
    "pp.repo": "Source code on GitHub",
    "pp.backProjects": "All projects",
    "pp.summary": "Summary",
    "pp.detailed": "Detailed version",
    "pp.notebook": "Full notebook",
    "pp.notebookDesc": "The complete Jupyter notebook, with all the code, analysis and rendered outputs.",
    "pp.openNotebook": "Open full screen",
    "pp.nbExploration": "Notebook: data exploration",
    "pp.nbMl": "Notebook: machine learning",
    "pp.figures": "Key figures",
    "fig.dwh.1": "Source tables",
    "fig.dwh.2": "Rows processed",
    "fig.dwh.3": "ELT layers",
    "fig.dwh.4": "Power BI dashboards",
    "fig.mv.1": "OOP classes",
    "fig.mv.2": "Data sources",
    "fig.mv.3": "Interactive map",
    "fig.ufc.1": "dbt tests",
    "fig.ufc.2": "Test accuracy",
    "fig.ufc.3": "Final features",

    "dwh.subtitle": "Decision-support data warehouse - Year 2 project",
    "dwh.meta.role": "Role: design & development (pair with Abel THYS)",
    "dwh.meta.period": "Period: September 2025 - January 2026",
    "dwh.context.text": "As part of the second-year Data Science project, the goal was to build a complete decision-support solution from the Chinook transactional database (an online music store: 11 tables, around 15,000 rows). The challenge: turn an operational database, designed for daily transactions, into a data warehouse optimised for strategic analysis.",
    "dwh.obj.1": "Analyse the Chinook source database and identify relevant analysis axes.",
    "dwh.obj.2": "Design a star-schema decision model (fact table + dimensions).",
    "dwh.obj.3": "Set up a 3-layer ELT architecture (DSA, ODS, DWH).",
    "dwh.obj.4": "Automate the loading flows with SSIS.",
    "dwh.obj.5": "Deliver key indicators in Power BI dashboards.",
    "dwh.approach.text": "Data flows through three layers. The DSA (Data Staging Area) makes a raw copy of the source. The ODS (Operational Data Store) historises the data by adding a load date. Finally the DWH (Data Warehouse) restructures everything into a star schema, with slowly changing dimensions (SCD2) to keep the history of changes. The flows are orchestrated by SSIS packages on SQL Server.",
    "dwh.approach.flow": "Chinook source -> DSA (raw copy) -> ODS (historisation) -> DWH (star schema) -> Power BI",
    "dwh.results.text": "The warehouse powers a multi-page Power BI report covering the global overview, sales analysis, customer profile, music catalogue and employee performance. The SSIS flows run end-to-end in a reliable and reproducible way.",
    "dwh.cap.synthese": "Overview dashboard",
    "dwh.cap.ventes": "Sales analysis",
    "dwh.cap.client": "Customer analysis",
    "dwh.cap.catalogue": "Music catalogue",
    "dwh.cap.employes": "Employee performance",
    "dwh.cap.etoile": "Star schema",
    "dwh.cap.ssis": "SSIS warehouse loading",
    "dwh.cap.etl": "Full ETL run",
    "dwh.cap.scd2": "SCD2 historisation",
    "dwh.cap.fact": "Loaded fact table",
    "dwh.cap.rundsa": "DSA layer loading",
    "dwh.cap.runods": "ODS layer loading",
    "dwh.cap.scd2details": "SCD2 - historised rows",

    "mv.subtitle": "Python trip planner - Year 2 project",
    "mv.meta.role": "Role: design & development (individual)",
    "mv.meta.period": "Period: semester 3 (2025-2026)",
    "mv.context.text": "This project aimed to build a Python application able to plan a trip from start to finish. The user enters a city, a number of days and a number of people; the app automatically collects all the useful information from the web and generates a complete travel plan.",
    "mv.obj.1": "Collect web data through APIs and scraping (BeautifulSoup).",
    "mv.obj.2": "Structure the app with a real object-oriented architecture.",
    "mv.obj.3": "Compute an estimated budget per spending category.",
    "mv.obj.4": "Generate a day-by-day itinerary.",
    "mv.obj.5": "Display locations on an interactive map (Folium).",
    "mv.approach.text": "The app is built around six classes (Trip, City, Hotel, Restaurant, Attraction, Transport). Each data source (weather, accommodation, dining, activities) is collected via an API or scraping, then cleaned with pandas. The output is a detailed itinerary with an interactive map and a budget estimate.",
    "mv.classes.text": "The class diagram below illustrates the object-oriented architecture of the application.",
    "mv.results.text": "MonVoyage produces a day-by-day itinerary, an interactive map of points of interest and a detailed budget forecast, all from a simple user input. The project is documented with a demonstration Jupyter notebook for the city of Paris.",
    "mv.cap.classes": "UML class diagram",
    "mv.cap.meteo": "Collected weather forecast",
    "mv.cap.hotels": "Hotel analysis (price & categories)",
    "mv.cap.restaurants": "Restaurants & cafes",
    "mv.cap.budget": "Budget breakdown by category",
    "mv.cap.comparaison": "Destination comparison (Paris / Lyon)",

    "ufc.subtitle": "UFC fight prediction - data & ML pipeline",
    "ufc.meta.role": "Role: design & development (personal)",
    "ufc.meta.period": "Portfolio project",
    "ufc.context.text": "The goal: build a complete, production-style data pipeline that predicts the winner of a UFC fight, from raw CSVs to an interactive dashboard. The real subject is not the raw score but the methodology: testing data quality, engineering leakage-free features, and evaluating the model honestly against a baseline.",
    "ufc.obj.1": "Store and query the data in DuckDB (OLAP analytical database).",
    "ufc.obj.2": "Transform and document the data with dbt (staging then marts layers).",
    "ufc.obj.3": "Guarantee integrity with 29 automated tests (not_null, unique, accepted_values).",
    "ufc.obj.4": "Engineer leakage-free features: cumulative stats on past fights only, time-based train/test split.",
    "ufc.obj.5": "Train and compare several models, then expose the predictions in a Streamlit dashboard.",
    "ufc.approach.text": "Raw CSVs are loaded into DuckDB, then transformed with dbt: staging models (stg_*) clean the source, mart models (fct_*, ml_fight_dataset) build the training table. A fight_id primary key (extracted from source URLs) handles edge cases (two fighters meeting twice on the same night). All cumulative features use only past fights (window frame ending at 1 PRECEDING) and the train/test split is time-based - training on old fights, testing on recent ones - to mimic real prediction. The final model is a 16-feature logistic regression, deliberately simple: it generalises better than Random Forest or XGBoost, which overfit.",
    "ufc.approach.flow": "Raw CSVs -> DuckDB -> dbt (staging -> marts) -> scikit-learn (time split) -> Streamlit dashboard",
    "ufc.results.text": "The model reaches ~0.60 test accuracy, against ~0.51 for a baseline (majority class) - solid for MMA, where even professional models cap around 0.60-0.65. Features are combined as differences (A minus B): record (fights, wins, win rate), form (won previous fight, days since last fight) and profile (age, reach). Several features were tested then dropped for lack of measurable signal: a deliberate, data-driven choice.",
    "ufc.cap.predictions": "Model predictions for an event",
    "ufc.cap.dbt": "29 dbt data quality tests passing",
  }
};

(function () {
  const LANGS = ["fr", "en"];
  const DEFAULT_LANG = "en";
  const saved = localStorage.getItem("lang");
  let current = LANGS.includes(saved) ? saved : DEFAULT_LANG;

  function apply(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    current = lang;
    const dict = I18N[lang];
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      el.getAttribute("data-i18n-attr").split(",").forEach(pair => {
        const [attr, key] = pair.split(":").map(s => s.trim());
        if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });

    document.querySelectorAll(".lang-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    localStorage.setItem("lang", lang);
  }

  // Expose for inline scripts (e.g. dynamically injected GitHub cards)
  window.i18nApply = apply;
  window.i18nGet = (key) => (I18N[current] && I18N[current][key]) || (I18N.fr[key] || key);
  window.i18nCurrent = () => current;

  document.addEventListener("click", e => {
    const btn = e.target.closest(".lang-btn");
    if (btn) apply(btn.dataset.lang);
  });

  document.addEventListener("DOMContentLoaded", () => apply(current));
})();
