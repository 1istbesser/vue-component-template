# Atom package: vue-template
<p>A lightweight atom package which makes it easy to create vue components either by autocompleting or creating a new file ready for you to work on.</p>

# Usage
<p> Type vue-template and hit <b>Tab</b> or <b>ctrl + alt + o</b> or <b>cmd + alt + o</b> on MAC.</p>
<p> If you wish to create a new file with the vue template, hit <b>CTRL + ALT + V</b></p>
<p> For HTML5 structured template, type html5-template and hit <b>Tab</b></p>
<p> If you want to deactivate the package, hit <b>CTRL+ALT+0</b></p>
# Vue template

```
<template lang="html">
  <div class="component-wrapper">
    <p>I'm a new vue component.</p>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('New component mounted.')
        }
    }
</script>

<style lang="css">
</style>
```

# HTML5 template

```
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="css/main.css">
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

  <header>
    <nav>
    </nav>
  </header>

  <main>
    <section>
      <p>HTML5 boilerplate structured page.</p>
    </section>
  </main>

  <footer>
    <p> Name &#169; 2018. All rights reserved. </p>
  </footer>

  <script src="js/main.js"></script>
  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async defer></script>
</body>

</html>
```
# Package information
<ul>
 <li>Name: vue-template</li>
 <li>Version: 0.5.0</li>
 <li>Last updated: 23.05.2018</li>
</ul>

# License

MIT © [Tamer Altintop](https://github.com/1istbesser)
