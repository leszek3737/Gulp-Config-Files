# Gulp Config Files by Leszek
Gotowe do wykorzystania pliki konfiguracyjne do Gulpa.
## Funkcje
1.Budowanie wersji dev i produkcyjnej 
- Autoprefixer  
- Kopilacja sass 
- Transpilacja babel
- Konkatenacja plików
- Minifikacja plików 
- Sourcemaps JS i css(sass)
2. Lint
- JS - eslint 
- Sass lint
3. Browser-sync
##  Polecenia 

#### Budowa wersji dev
```
gulp build
```
#### Budowa wersji produkcyjnej
```
gulp build::prod
```
Opcjonalnie uruchomienie optymalizacji:
```
gulp build::optimized
```

#### Uruchomienie linta 
```
gulp lint
```
## Instalacja gulpa
Należy pobrać projekt i przekopiować pliki do swojego projektuoraz zainstalować pakiety wpisując w konsoli w katalogu twojego projektu:
```
npm i
```
### Konfiguracja do twojego projektu
Przejdź do katalogu tasks i otwórz plik config.js

#### Katalogi wejściowe projektu
W tej sekcji należy w odpowiednie pola wpisać katalogi gdzie znajdują się twoje pliki projektu w sposób podany w tym przykładzie:
```
 glob: {
        src: "./src/**/*",
        scss: './src/**/*.scss',
        js: './src/**/*.js',
        html: './src/**/*.html',
        fonts: './src/fonts/**/*',
        img: './src/img/**/*',
    },
```
#### Konfiguracja pliku wejściowego sass
w sekcji entryPoint wpisujemy jedynie plik startowy sass w sposób podany w tym przykładzie:
```
entryPoint: {
        scss: './src/scss/style.scss'
    },
```

#### Konfiguracja plików wyjściowych 
W sekcji path wpisujemy katalogi wyjściowe projektu w sposób podany w tym przykładzie:

```
path: {
        css: './dist/css/',
        js: './dist/js/',
        dist: './dist/',
        fonts: './dist/fonts/',
        vector: './dist/img/',
        img: './dist/img/',
    },
```

#### Konfiguracja konkatenacji
W tej sekcji wpisujemy pliki javascriptowe, które mają zostać połączone w jeden w sposób podany w tym przykładzie:
```
  concatOrder: {
        js: './src/**/*.js',
        jsLib: [
            "node_modules/jquery/dist/jquery.min.js",
           "node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js",
      ]
    },
```

#### Konfiguracja nazw plików wyjściowych
W tej sekcji należy podać nazwy plików wyjściowych w sposób podany w tym przykładzie:
```
   name: {
        js: "app.js",
        jsMin: "app.min.js",
        jsMinLib: "assets.min.js",
        css: "app.css",
        cssMin: "app.min.css",
    }
};
```
#### Konfiguracja Wyjątków dla unCss
W tej sekcji należy podać tablice w sposób podany w tym przykładzie:
```
unCssIgnore: [/\.affix/,
    /\.alert/,
    /\.close/,
    /\.collaps/,
    /\.fade/,
    /\.has/,
    /\.help/,
    /\.in/,
    /\.modal/,
    /\.open/,
    /\.popover/,
    /\.tooltip/],
```
