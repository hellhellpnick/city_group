<template lang="pug">
.base-button(
    v-if="type != 'link'"
    @click="$emit('actionBtn')"
    :class="[variant && `base-button_${variant}`, load && 'base-button_load', disabled && 'base-button_disabled']"
) {{ load ? '' : text }}
    spinner-svg.base-button__spinner(
        v-if="load"
    )
nuxt-link.base-button(
    v-else
    @click.native="$emit('actionBtn')"
    :to="localePath(link)"
    :class="[variant && `base-button_${variant}`, load && 'base-button_load', disabled && 'base-button_disabled']"
) {{ load ? '' : text }}
    spinner-svg.base-button__spinner(
        v-if="load"
    )
</template>
<script>
/*
Универсальная кнопка
Имеет 4 основных пропса
text - текст, который выводим
variant - вариант кнопки
link - ссылка на другую страницу
type - тип кнопки/ссылки
emit - события вызова клика actionBtn

Прошу всех, кто будет добавлять свой вариант кнопки, чтобы сразу его писал
На данный момент варианта нету
*/
import spinnerSvg from "~/assets/svg/spinner.svg?inline";

export default {
    name: "base-button",
    props: ["text", "variant", "link", "type", "load", "disabled"],
    components: {
        spinnerSvg,
    },
};
</script>
<style lang="scss" scoped>
.base-button {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: desktop-vw(20);
    font-family: $font-family-main;
    font-size: desktop-vw(18);
    font-weight: $font-weight-medium;
    border-radius: desktop-vw($border-radius-main);
    @include transition;
    text-align: center;

    &_fill {
        background-color: $color-btn-main-static;
        color: $color-text-primary;

        &:hover {
            background-color: $color-btn-main-hover;
        }

        &:active {
            background-color: $color-btn-main-active;
        }
    }

    &_disabled {
        cursor: none;
        pointer-events: none;
        background-color: $color-btn-disabled;
    }

    &_load {
        cursor: none;
        pointer-events: none;
        opacity: 0.9;
    }

    &__spinner {
        width: desktop-vw(30);
        height: desktop-vw(30);
        fill: $color-icon-primary;
        animation: rotate-spinner infinite linear 2s;
    }
}

@keyframes rotate-spinner {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

@include media-tablet-max {
    .base-button {
        padding: tablet-vw(20);
        font-size: tablet-vw(18);
        border-radius: tablet-vw($border-radius-main);

        &__spinner {
            width: tablet-vw(30);
            height: tablet-vw(30);
        }
    }
}

@include media-mobile-max {
    .base-button {
        padding: mobile-vw(20);
        font-size: mobile-vw(18);
        border-radius: mobile-vw($border-radius-main);

        &__spinner {
            width: mobile-vw(30);
            height: mobile-vw(30);
        }
    }
}
</style>
