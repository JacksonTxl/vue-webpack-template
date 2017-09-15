<template>
  <main>
    <el-button type="primary" @click="hello">primary</el-button>
    <hello></hello>
  </main>
</template>

<script>
  import Hello from '~packages/Hello';
  import { Button, Message } from 'element-ui';
  export default {
    components: {
      Hello,
      ElButton: Button
    },
    methods: {
      hello () {
        Message('Hello Vue')
      }
    }
  }
</script>
