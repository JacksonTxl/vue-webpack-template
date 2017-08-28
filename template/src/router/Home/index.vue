<template>
  <main>
    <el-button type="primary" @click="hello">primary</el-button>
    <hello></hello>
  </main>
</template>

<script>
  import Hello from '~components/Hello';
  {{#if_eq theme 'element-ui'}}
  import { Button, Message } from 'element-ui';
  {{else}}
  import { Button, Toast } from 'mint-ui';
  {{/if_eq}}
  export default {
    components: {
      Hello,
      ElButton: Button
    },
    methods: {
      hello () {
        {{#if_eq theme 'element-ui'}}
        Message('Hello Vue')
        {{else}}
        Toast({
          message: 'Hello Vue',
          iconClass: 'icon icon-success'
        })
        {{/if_eq}}
          console.log(111);
      }
    }
  }
</script>
