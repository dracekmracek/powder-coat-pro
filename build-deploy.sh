#!/bin/bash

# Barvy pro výpisy
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=================================================${NC}"
echo -e "${BLUE}   BETRIM - Build a nasazení na GitHub Pages     ${NC}"
echo -e "${BLUE}=================================================${NC}"
echo

# Kontrola, zda je repozitář čistý
echo -e "${YELLOW}Kontrola změn v repozitáři...${NC}"
if [ -n "$(git status --porcelain)" ]; then
  echo -e "${RED}⚠️  V repozitáři jsou neposlané změny.${NC}"
  echo -e "${YELLOW}Uložte změny pomocí git add, git commit a git push před pokračováním.${NC}"
  exit 1
else
  echo -e "${GREEN}✅ Repozitář je čistý.${NC}"
fi

# Aktualizace závislostí
echo
echo -e "${YELLOW}Aktualizace závislostí...${NC}"
npm install
echo -e "${GREEN}✅ Závislosti aktualizovány.${NC}"

# Build projektu
echo
echo -e "${YELLOW}Vytvářím produkční build...${NC}"
npm run build
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ Produkční build byl úspěšně vytvořen.${NC}"
else
  echo -e "${RED}❌ Při vytváření buildu došlo k chybě.${NC}"
  exit 1
fi

# Přesun 404.html do dist adresáře
echo
echo -e "${YELLOW}Kopíruji 404.html do dist adresáře...${NC}"
if [ -f "dist/404.html" ]; then
  echo -e "${GREEN}✅ Soubor 404.html byl již zahrnut v buildu.${NC}"
else
  cp 404.html dist/
  echo -e "${GREEN}✅ Soubor 404.html byl zkopírován do dist adresáře.${NC}"
fi

# Deploy na GitHub Pages (gh-pages větev)
echo
echo -e "${YELLOW}Příprava deploymentu na GitHub Pages...${NC}"

# Kontrola, zda existuje větev gh-pages
if git rev-parse --verify gh-pages >/dev/null 2>&1; then
  echo -e "${YELLOW}Větev gh-pages již existuje.${NC}"
else
  echo -e "${YELLOW}Vytvářím větev gh-pages...${NC}"
  git branch gh-pages
  git checkout gh-pages
  git push --set-upstream origin gh-pages
  git checkout main
  echo -e "${GREEN}✅ Větev gh-pages byla vytvořena.${NC}"
fi

# Nasazení na GitHub Pages pomocí gh-pages větve
echo -e "${YELLOW}Nasazování buildu na GitHub Pages...${NC}"
git checkout gh-pages
echo -e "${YELLOW}Čistím adresář...${NC}"
git rm -rf .
echo -e "${YELLOW}Kopíruji obsah /dist do kořenového adresáře...${NC}"
cp -r dist/* .
rm -rf dist
echo -e "${YELLOW}Přidávám nové soubory...${NC}"
git add .
git commit -m "Deploy: $(date +%Y-%m-%d_%H-%M-%S)"
git push
echo -e "${GREEN}✅ Nasazení na GitHub Pages dokončeno.${NC}"

# Návrat do hlavní větve
echo -e "${YELLOW}Přepínám zpět do hlavní větve...${NC}"
git checkout main
echo -e "${GREEN}✅ Projekt byl úspěšně nasazen na GitHub Pages.${NC}"

echo
echo -e "${BLUE}=================================================${NC}"
echo -e "${GREEN}       Nasazení bylo úspěšně dokončeno!         ${NC}"
echo -e "${BLUE}=================================================${NC}"
echo
echo -e "Web bude dostupný na adrese: ${YELLOW}https://[github-uživatel].github.io/powder-coat-pro/${NC}"
echo -e "Změny se projeví za několik minut." 