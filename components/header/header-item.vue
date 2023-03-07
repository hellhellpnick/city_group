<template lang="pug">
nuxt-link.header-item(
    :to="link.link"
) {{ link.name }}

</template>
<script>
export default {
    name: 'header-item',
    props: ['link']
}
</script>
<style lang="scss" scoped>
.header-item {
    padding: desktop-vw(30);
    color: $color-text-main;
    font-family: $font-family-main;
    font-weight: $font-weight-medium;
    text-decoration: none;
    border-bottom: desktop-vw(2) solid transparent;
    @include transition;

    &:hover {
        color: $color-text-secondary;
    }

    &.nuxt-link-active {
        color: $color-text-secondary;
        border-color: $color-border-primary;;
    }
}
</style>