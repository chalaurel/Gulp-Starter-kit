# gulp-starter-kit

## Usage

```
git clone https://github.com/chalaurel/gulp-starter-kit.git
```

### go inside the repo 

```
cd gulp-starter-kit
```

###  Install all dependencies (make sure nodejs with npm is installed on your machine)

``` 
npm install
```

### Run gulp default to build 
```
gulp
```

### File Structure

```
	src/		---		source file
	src/img/	---		raw image location
	src/js/		---		unminify js file location
	src/sass/	---		scss file location
```

```
	dist/		---		Production assets folder
	dist/images	---		compressed images location
	dist/js		---		uglify js file location
	dist/css 	---		minify css location
```

### List of npm used

```
gulp
gulp-imagemin
gulp-sass
gulp-concat
gulp-concat-css
gulp-uglify
gulp-clean-css
gulp-livereload
```

### Future updates

```
1. Open browser with live reload.
2. default size of compressed images.
```