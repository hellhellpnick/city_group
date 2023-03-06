export default function ({ $axios, i18n }, inject) {

    let lang = i18n.locale
    if (lang === 'ua') {
        lang = 'uk-UA'
    } else if (lang === 'en') {
        lang = 'en-US'
    } else {
        lang = 'en-US'
    }

    const api = {
        collections: {
            async cards() {
                return await $axios.$get(`/items/cards?fields=*,translations.*,poster.title&deep[translations][_filter][languages_id][_eq]=${lang}`)
            }
        },
        one: {
            async card(slug) {
                return await $axios.$get(`/items/cards?fields=*,translations.*,poster.title&filter[slug][_eq]=${slug}&deep[translations][_filter][languages_id][_eq]=${lang}`)
            }
        }
    }

    inject('api', api)
}
