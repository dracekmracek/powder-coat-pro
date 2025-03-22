# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a0ec66ef-2cce-48a8-a04a-76bcb0cd9ab9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a0ec66ef-2cce-48a8-a04a-76bcb0cd9ab9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a0ec66ef-2cce-48a8-a04a-76bcb0cd9ab9) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Betrim - Práškové lakování

### Řešení problému s "bílou obrazovkou" na GitHub Pages

Pokud se po nasazení na GitHub Pages zobrazuje pouze bílá obrazovka, problém byl pravděpodobně způsoben nesprávnou konfigurací cest v aplikaci. Tento problém byl vyřešen následujícím způsobem:

1. **Správná konfigurace `base` v `vite.config.ts`**:
   - Pro GitHub Pages je nutné nastavit správnou základní cestu: `/powder-coat-pro/`
   - Tím zajistíme, že všechny relativní cesty v aplikaci budou směřovat na správné umístění

2. **Přidání souboru `404.html` pro správné routování:**
   - GitHub Pages standardně nepodporuje routování SPA aplikací
   - Soubor `404.html` zajišťuje přesměrování na hlavní stránku a zachování původní URL v session storage
   - Skript v `index.html` pak tuto URL použije pro správné zobrazení požadované stránky

3. **Proces nasazení na GitHub Pages:**
   - Použijte připravený skript `build-deploy.sh`, který:
     - Vytvoří produkční build
     - Připraví větev `gh-pages`
     - Nasadí aplikaci na GitHub Pages
   - Alternativně můžete použít npm skript: `npm run deploy`

### Generování obrázků

Pro generování zástupných obrázků pro web můžete použít:

1. **Lokální generátor** - otevřete soubor `public/generate-direct.html` v prohlížeči
   - Vygenerujte obrázky přímo v prohlížeči
   - Stáhněte je jako ZIP soubor
   - Extrahujte do složky `public`

### Základní struktura projektu

```
├── public/
│   ├── images/              # Obrázky pro web
│   │   ├── technology/      # Obrázky technologií
│   │   ├── process/         # Obrázky procesů
│   │   ├── surfaces/        # Obrázky povrchů
│   │   ├── facility/        # Obrázky zařízení
│   │   └── quality/         # Obrázky kvality
│   └── generate-direct.html # Nástroj pro generování obrázků
├── src/
│   ├── components/          # Komponenty aplikace
│   ├── app/                 # Stránky aplikace
│   └── ...                  # Další soubory a složky
├── vite.config.ts           # Konfigurace Vite
├── index.html               # Hlavní HTML soubor
├── 404.html                 # Soubor pro přesměrování (GitHub Pages)
└── build-deploy.sh          # Skript pro build a nasazení
```

### Příkazy

```bash
# Vývojový server
npm run dev

# Vytvoření produkčního buildu
npm run build

# Nasazení na GitHub Pages
npm run deploy
```
