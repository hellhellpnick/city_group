<template lang="pug">
.site
    nuxt-child
</template>
<script>
export default {
    name: 'main-layout'
}
</script>
<style lang="scss" scoped>
.a {
    color: black;
    z-index: 1000;
    position: fixed;
}
</style>