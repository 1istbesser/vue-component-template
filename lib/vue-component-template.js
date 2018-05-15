'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,

  activate() {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'vue-component-template:create': () => this.createTemplate()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  createTemplate() {
    const editor = atom.workspace.getActiveTextEditor();
    let value = editor.lineTextForScreenRow(editor.getLastScreenRow());
    let template = `<template lang="html">
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
`;
    if(editor){
        if(value=='vue-template'){
          editor.setText(template);
        }
    }
  }

};
