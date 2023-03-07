<template lang="pug">
.header-block
    .header-block__wrapper
        .header-block__box
            nuxt-link.logo.header-block__title(
                to="/expense"
            ) City
                    span Group
            .header-block__links 
                header-item(
                    v-for="(item, key) in list"
                    :key="key"
                    :link="item"
                )
        .header-block__exit(
            @click="clearUser"
        ) {{ $t("texts.exit") }}
</template>
<script>
import headerItem from '~/components/header/header-item.vue';

export default {
    name: 'header-block',
    components: {
        headerItem
    },
    
    data() {
        return {
            list: [
                {
                    name: this.$t('pages.expense'),
                    link: '/expense'
                },
                {
                    name: this.$t('pages.profile'),
                    link: '/profile'
                }
            ]
        }
    },

    methods: {
        clearUser() {
            this.$store.dispatch('user/setClearUser');
        }
    }
}
</script>
<style lang="scss" scoped>
.header-block {
    width: 100%;
    height: desktop-vw(80);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    // box-shadow: $shadow-main;

    &__title {
        margin-right: desktop-vw(50);
        text-decoration: none;
    }

    &__box {
        @include constructor-flex(space-between, center, row);
    }

    &__wrapper {
        width: desktop-vw(1180);
        @include constructor-flex(space-between, center, row);
    }

    &__exit {
        cursor: pointer;
        padding: desktop-vw(30);
        color: $color-text-main;
        font-family: $font-family-main;
        font-weight: $font-weight-medium;
        text-decoration: none;
        @include transition;

        &:hover {
            color: $color-text-secondary;
        }
    }
}
</style>