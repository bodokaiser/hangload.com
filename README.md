# hangload.com

Official Jekyll-based homepage of [Hangload](http://hangload.com).

## Local development

Clone the repo on your machine and run `npm install && npm start`.

Refer to the `scripts` section in the `package.json` for details about the build process.

### Minifying CSS

Develop locally using the unminified CSS. In `<head>`:

```html
<link rel="stylesheet" href="/css/s.css">
{% comment %} <link rel="stylesheet" href="/css/s.min.css"> {% endcomment %}
```

Run `npm run minify:css`. The script in `package.json` uses recursive globbing, so Bash 4.x with `shopt -s globstar` is required.

Switch to the minified CSS before pushing to production. In `<head>`:

```html
  {% comment %} <link rel="stylesheet" href="/css/s.css"> {% endcomment %}
  <link rel="stylesheet" href="/css/s.min.css">
```


## License

Copyright &copy; 2016 Hangload UG (haftungsbeschränkt)
