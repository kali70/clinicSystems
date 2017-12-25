import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'مرحبا بكم في عيادة النرجس للخدمات الطبية',
    text: 'الدكتورة دجى بن عامر اخصائية العيون و انف و حنجرة'
  },
  template: `<div id='app'>
                <div>{{hello}}</div>
                <div>{{text}}</div>
             </div>`
})

export { app }
