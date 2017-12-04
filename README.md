# Gulp Config Files by Leszek
Gotowe do wykorzystania pliki konfikuracyjne do Gulpa.
## Funkcjie

## Instalacja gulpa
Należy pobrać projekt i przekopiować pliku do swojego projektu (oczywiście oprucz plików .json) oraz zainstalować pakiety wpisując w katalogu twojego projektu:  
```
npm i -D  gulp gulp-load-plugins run-sequence gulp-load-subtasks gulp-clean  autoprefixer cssnano gulp-sass-glob gulp-sass gulp-postcss gulp-rename gulp-sourcemaps gulp-babel babel-core babel-preset-es2015 babel-preset-es2016 babel-preset-es2017 gulp-dedupe gulp-concat gulp-uglify gulp-html-replace gulp-eslint gulp-htmllint gulp-sass-lint eslint-plugin-css-modules 
```
### Konfiguacjia do twojego projektu
Przejdz do katalogu tasks i otwóż plik config.js

#### Katalogi weściowe projektu
W tej sekcji należy w odpowiednie pola wpisać katalgi gdzie znajdują się twoje pliki projektu w sposób podany w tym przykładzie:
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
#### Konfiguracjia pliku weściowego sass
w sekcji entryPoint wpisujemy jesdynie plik startowy sass w sposób podany w tym przykładzie:
```
entryPoint: {
        scss: './src/scss/style.scss'
    },
```

#### Konfiguracjia plików wyściowych 
W sekcji path wpisujemy katalogi wyjściowe projektu  w sposób podany w tym przykładzie:

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

#### Konfiguracjia konkatenacji
W tej sekcji wpisujemy pliki javascriptu które mają zostać poddane Konkatenacji w sposób podany w tym przykładzie:
```
  concatOrder: {
        js: './src/**/*.js',
        jsLib: [
            "node_modules/jquery/dist/jquery.min.js",
           "node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js",
      ]
    },
```

#### Konfiguracjia nazw plików wyjsciowych 
W tej sekcji należy podać nazwy plików wyjściowych  w sposób podany w tym przykładzie:
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

## To Do
1. Eslint zapisywany do pliku 
2. Html lint 
