<template>
  <main>
    {{#if_eq theme 'element-ui'}}
    <el-button type="primary" @click="hello">primary</el-button>
    {{else}}
    <mt-button type="primary" @click="hello">primary</mt-button>
    {{/if_eq}}
    <hello></hello>
  </main>
</template>

<script>
  import Hello from '~components/Hello';
  {{#if_eq theme 'element-ui'}}
  import { Button, Message } from 'element-ui';
  {{else}}
  import { Button, Toast } from 'mint-ui';
  export default {
    components: {
      Hello
    },
    methods: {
      hello () {
        {{#if_eq theme 'element-ui'}}
          Message('Hello Vue')；
        {{else}}
          Toast({
          message: 'Hello Vue',
          iconClass: 'icon icon-success'
        });
        {{/if_eq}}
      }
    }
  }
</script>
