<template lang="pug">
.layout
    .login-form 
        .logo.login-form__title City
            span Group
        .login-form__wrapper 
            .login-form__desc {{ $t('titles.login') }}
            .login-form__text {{ $t('texts.phone_contract') }}
            base-input.login-form_margin(
                @update:modelValue = "$event => inputValue = $event"
                :modelValue = "inputValue"
                :text="$t('inputs.phone_contract')"
                :variant="'light'"
                :id="'login'"
                :typeInput="'number'"
            )
            base-input.login-form_margin(
                @formError="disabled = false"
                @update:modelValue = "$event => passwordValue = $event"
                :modelValue = "passwordValue"
                :text="$t('inputs.password')"
                :variant="'light'"
                :id="'login'"
                :formError="disabled"
                :typeInput="'password'"
                :rules="passwordRules"
            )
            base-button(
                @actionBtn="sendLoginForm"
                :text="$t('btns.next')"
                :variant="'fill'"
                :type="'button'"
                :load="loading"
                :disabled="disabled"
            )

</template>
<script>
export default {
    name: "login-page",

    data() {
        return {
            inputValue: "",
            passwordValue: "",
            loading: false,
            disabled: false,
            passwordRules: [
                (v) =>
                    (v && v.length <= 6 && v.length >= 4) ||
                    this.$t("inputs_error.password.password_length"),
            ],
        };
    },

    methods: {
        sendLoginForm() {
            try {
                this.loading = true;

                for (const rule of this.passwordRules) {
                    const result = rule(this.passwordValue);

                    if (result != true) {
                        this.disabled = true;
                        break;
                    }
                }

                this.loading = false;
            } catch (e) {}
        },
    },
};
</script>
<style lang="scss" scoped>
.layout {
    min-height: 100vh;
    @include constructor-flex(center, center, column);
}

.login-form {
    width: desktop-vw(600);

    &_margin {
        margin-bottom: desktop-vw(24);
    }

    &__title {
        margin-bottom: desktop-vw(24);
    }

    &__desc {
        margin-bottom: desktop-vw(32);
        font-size: desktop-vw(32);
        font-family: $font-family-main;
        color: $color-text-main;
        font-weight: $font-weight-medium;
    }

    &__text {
        margin-bottom: desktop-vw(24);
        font-size: desktop-vw(18);
        font-family: $font-family-main;
        color: $color-text-main;
        font-weight: $font-weight-regular;
    }

    &__wrapper {
        width: 100%;
        padding: desktop-vw(40);
        @include shadow-constructor($shadow-main);
        border: desktop-vw(1) solid $color-border-main;
        border-radius: desktop-vw($border-radius-main);
    }
}

@include media-tablet-max {
    .login-form {
        width: 100%;

        &_margin {
            margin-bottom: tablet-vw(24);
        }

        &__title {
            margin-bottom: tablet-vw(24);
        }

        &__desc {
            margin-bottom: tablet-vw(32);
            font-size: tablet-vw(32);
        }

        &__text {
            margin-bottom: tablet-vw(24);
            font-size: tablet-vw(18);
        }

        &__wrapper {
            padding: tablet-vw(40);
            border: tablet-vw(1) solid $color-border-main;
            border-radius: tablet-vw($border-radius-main);
        }
    }
}

@include media-mobile-max {
    .login-form {
        &_margin {
            margin-bottom: mobile-vw(24);
        }

        &__title {
            margin-bottom: mobile-vw(24);
        }

        &__desc {
            margin-bottom: mobile-vw(32);
            font-size: mobile-vw(32);
        }

        &__text {
            margin-bottom: mobile-vw(24);
            font-size: mobile-vw(18);
        }

        &__wrapper {
            padding: mobile-vw(20);
            border: mobile-vw(1) solid $color-border-main;
            border-radius: mobile-vw($border-radius-main);
        }
    }
}
</style>
