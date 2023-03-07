<template lang="pug">
.site
    header-block(
        v-if="!$route.fullPath.includes('login')"
    )
    nuxt-child
</template>
<script>
import headerBlock from '~/components/header/header-block.vue';

import { mapGetters } from 'vuex';

export default {
    name: 'main-layout',
    components: {
        headerBlock
    },

    computed: {
        ...mapGetters({
            auth: 'user/authenticated'
        })
    },

    watch: {
        $route: {
            handler(n) {
                if(!this.auth) {
                    this.$router.push('/login')
                }
            },
            deep: true
        },

        auth(newValue) {
            if(!newValue) {
                this.$router.push('/login')
            }
        }
    }
}
</script>