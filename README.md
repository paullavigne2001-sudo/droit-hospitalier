# Référentiel Droit Hospitalier

Première ébauche de l'application de révision du droit hospitalier.

## Périmètre V0.1

- FIN-001 à FIN-045
- données issues du classeur maître Excel
- affichage des notions
- recherche
- consultation d'une fiche de notion

## Lancer localement

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse indiquée par Vite.

## Architecture

- `src/data/finances.json` : contenu financier issu d'Excel
- `src/App.jsx` : première interface
- `src/styles.css` : styles
- `src/main.jsx` : point d'entrée

## Principe

Le contenu juridique reste séparé du code de l'application.

À terme :
- `notions.json`
- `fiches.json`
- `qcm.json`
- `flashcards.json`
- `cas.json`
- `sources.json`
- `jurisprudence.json`

La progression de l'utilisateur sera stockée localement, d'abord dans IndexedDB, sans serveur.
