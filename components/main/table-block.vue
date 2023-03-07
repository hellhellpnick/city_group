<template lang="pug">
.table-block 
    .table-block__top(
        :style="{'grid-template-columns': content.provider.gridSetting}"
        :class="{'tablet-block__top-hidden': !headerHidden}"
        id=`top-items` 
    )
        .tablet-block__top-item(
            v-for="(item, index) in content.provider.tabsInfo"
            :key="`block-top-item-${index}`"
        ) {{item}}

    .tablet-block__skeleton(
        v-if="loading"
        v-for="(_, key) in show"
        :key="key"
    )
    
    .tablet-block__list(
        v-if="content.provider.listCard"
        :class="{'animate': animate}" 
    )
        .tablet-block__card( 
            v-for="(item, index) in content.provider.listCard" 
            :key="`block-card-${index}`"
            :class="{'tablet-block__card_bg': index % 2 == 1}"
            ref="card" 
        )
            //- rating-big-card(
            //-     :content="item"
            //-     :gridSetting="content.provider.gridSetting"
            //-     :mobileWidth="content.provider.mobileWidth"
            //-     :tabsInfo="content.provider.tabsInfo"
            //-     :index="index"
            //-     :noveltyPage="noveltyPage"
            //-     :multiply="multiply"
            //- )

</template>
<script>
export default {
    name: 'table-block',
    props: ['content']
}
</script>
<style lang="scss" scoped>

</style>