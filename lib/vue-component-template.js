'use babel';

import { CompositeDisposable } from 'atom';

export default {
  subscriptions: null,
  template : `<template lang="html">
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
</style>`,
  activate() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'vue-template:autoCompleteTemplate': () => this.autoCompleteTemplate(),
        'vue-template:createNewComponent': () => this.createNewComponent(),
        'vue-template:disable': () => this.disableThisPackage()
      })
    );
  },
  deactivate() {
    this.subscriptions.dispose();
  },
  disableThisPackage(){
    var packageStatus = atom.packages.isPackageActive('vue-template');
    if(packageStatus){
      atom.packages.disablePackage('vue-template');
    }
  },
  autoCompleteTemplate() {
    const editor = atom.workspace.getActiveTextEditor();
    let value = editor.lineTextForScreenRow(editor.getLastScreenRow());
    let subs = this.subscriptions;
     if(editor){
         if(value=='vue-template'){
            editor.setText(this.template);
          }
      }
  },
  createNewComponent(){
    var result = atom.workspace.open();
    var globalThis = this;
    result.then(function(value){
      let editor = atom.workspace.getActiveTextEditor();
      editor.setText(globalThis.template);

    });
  }
};
