<template v-slot:default="slotProps" lang="pug">
slot(
    :loading="loading"
    :loadingBtn="loadingBtn"
    :settings="settings"
)
</template>
<script>
export default {
    name: 'provider-client-deal',
    data() {
        return {
            loading: false,
            loadingBtn: false,
            settings: {
                title: "Top Loosers",
                gridSettings: "1.1fr 5fr 2fr 2fr 2.5fr",
                tabsInfo: [
                    "#",
                    "Name",
                    "Transactions",
                    "24h%",
                    "Last 7 Days",
                ],
            },
            settingsApi: {
                limit: 15,
                page: Number(this.$route.query.page) || 1,
                sortBy: "By Activity",
                period: "1d",
                add: false,
            }
        }
    },

    async created() {

    }
}
</script>