# Instructions pour convertir les images ARW en JPG

Les fichiers `.ARW` (format RAW Sony) ne peuvent pas être affichés directement dans un navigateur web. Vous devez les convertir en JPG ou PNG.

## Images à convertir :

1. `marocain.ARW` → `marocain.jpg`
2. `francais.ARW` → `francais.jpg`
3. `fassi.ARW` → `fassi.jpg`
4. `tangeroise.ARW` → `tangeroise.jpg`
5. `casroleturque.ARW` → `casroleturque.jpg`
6. `alanda-1.ARW` → `alanda-1.jpg`

## Méthodes de conversion :

### Option 1 : Utiliser un logiciel de retouche photo
- Adobe Lightroom
- Adobe Photoshop
- GIMP (gratuit)
- Darktable (gratuit)

### Option 2 : Utiliser un convertisseur en ligne
- Convertio.co
- CloudConvert
- Zamzar

### Option 3 : Utiliser ImageMagick (ligne de commande)
```bash
magick convert marocain.ARW -quality 85 marocain.jpg
```

## Recommandations :
- Qualité : 80-90% pour les images de menu
- Taille : Max 1920px de largeur pour optimiser le chargement
- Format : JPG pour les photos, PNG pour les images avec transparence

Une fois converties, placez les fichiers `.jpg` dans le dossier `public/` et les images s'afficheront automatiquement dans le menu.

