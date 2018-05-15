# Atom package: vue-component-template
<hr/>
<p>A lightweight atom package which makes it easy to create vue components.</p>
# Usage:
<p> Type vue-template and hit <b>ctrl + alt + o</b> or <b>cmd + alt + o</b> on MAC.</p>
# Vue template:
<hr/>
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
