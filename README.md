# hangload.com

Official, Jekyll-based homepage of [Hangload](http://hangload.com).

## Local development

Clone the repo on your machine and run `npm install && npm start`.

Refer to the `scripts` section in the `package.json` for details about the build process.

### Minifying CSS

Develop locally using the unminified CSS. In `<head>`:

```html
<link rel="stylesheet" href="/css/s.css">
{% comment %} <link rel="stylesheet" href="/css/s.min.css"> {% endcomment %}
```

To minify the CSS, run `npm run minify:css`. This will run the following command:

    uncss --htmlroot _site _site/**/*.html | cssnano > css/s.min.css

This script will:

- pipe `s.css` to [uncss](https://github.com/giakki/uncss) to get rid of all unused rules
- pipe the resulting, stripped-down css to [cssnano](http://cssnano.co/) for minification and compression
- put the final CSS into `s.min.css`

**Important note**: The script above uses recursive globbing, so Bash >4.x with `shopt -s globstar` is required to run it.

Switch to the minified CSS and make sure that everything is working properly before pushing to production. In `<head>`:

```html
  {% comment %} <link rel="stylesheet" href="/css/s.css"> {% endcomment %}
  <link rel="stylesheet" href="/css/s.min.css">
```

In any case, never use `s.css` in production, because that file is pretty heavy.

## License

Copyright &copy; 2016 Hangload UG (Haftungsbeschränkt)
