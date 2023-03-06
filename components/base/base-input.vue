<template lang="pug">
.base-input(
    :class="[variant && `base-input_${variant}`, error && 'base-input_error', focusInput && 'base-input_focus']"
)
    .base-input__input
        input(
            @focus="focusChange"
            @blur = "blurChange"
            v-model="value"
            :id="id"
            :type="typeInp"
        )
        eye-svg.base-input__eye(
            v-if="typeInput == 'password' && typeInp == 'password'"
            @click="changeType"
        )
        eye-slash-svg.base-input__eye(
            v-else-if="typeInput == 'password' && typeInp != 'password'"
            @click="changeType"
        )
        label.base-input__label(
            :for="id"
        ) {{ text }}
    .base-input__error(
        v-if="error"
    ) {{ errorInput }}
</template>
<script>
import eyeSvg from "~/assets/svg/inputs/eye.svg?inline";
import eyeSlashSvg from "~/assets/svg/inputs/eye-slash.svg?inline";

export default {
    name: "base-input",
    props: [
        "variant",
        "id",
        "typeInput",
        "rules",
        "text",
        "modelValue",
        "rules",
        "formError",
    ],
    components: {
        eyeSvg,
        eyeSlashSvg,
    },

    data() {
        return {
            error: false,
            errorInput: "",
            focusInput: false,
            typeInp: "text",
            value: "",
        };
    },

    mounted() {
        this.typeInp = this.typeInput;

        if (this.modelValue) {
            this.value = this.modelValue;
            this.focusInput = true;
        }
    },

    watch: {
        value(newValue) {
            this.error = false;
            this.errorInput = "";

            if (this.formError) {
                this.$emit("formError");
            }

            this.$emit("update:modelValue", newValue);
        },

        formError() {
            if (this.rules) {
                this.rules.forEach((item) => {
                    const result = item(this.value);

                    if (result != true) {
                        this.error = true;
                        this.errorInput = result;
                    }
                });
            }
        },
    },

    methods: {
        changeType() {
            this.typeInp = this.typeInp == "password" ? "text" : "password";
        },

        focusChange() {
            this.focusInput = true;
        },

        blurChange() {
            if (this.value == "") {
                this.focusInput = false;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.base-input {
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    &_fill {
        .base-input__input {
            background-color: $color-bg-primary;

            input {
                background-color: $color-bg-primary;
            }
        }

        &.base-input_focus {
            .base-input__label {
                transform: translate(0, desktop-vw(-28)) scale(0.85);
            }
        }
    }

    &_light {
        &.base-input_focus {
            .base-input__label {
                padding: 0 desktop-vw(4);
                margin: 0 desktop-vw(-4);
                background-color: $color-bg-main;
                transform: translate(0, desktop-vw(-37)) scale(0.8);
            }
        }

        .base-input__input {
            border-color: $color-border-main;
        }
    }

    &_error {
        .base-input__input {
            border-color: $color-border-error;

            input {
                color: $color-text-error;
            }
        }

        .base-input__label {
            color: $color-text-error;
        }
    }

    &__eye {
        width: desktop-vw(20);
        height: desktop-vw(20);
        position: absolute;
        right: desktop-vw(20);
        top: 50%;
        transform: translateY(-50%);
        @include transition;

        fill: $color-icon-main;
    }

    &__input {
        cursor: pointer;
        position: relative;
        width: 100%;
        height: desktop-vw(60);
        border-radius: desktop-vw($border-radius-main);
        border: desktop-vw(2) solid transparent;
        outline: none;
        @include transition;
        z-index: 1;

        input {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: desktop-vw(20);
            border-radius: desktop-vw($border-radius-main);
            font-size: desktop-vw(16);
            font-family: $font-family-main;
            font-weight: $font-weight-regular;
            color: $color-text-main;
            border: none;
            outline: none;
        }
    }

    &__label {
        cursor: pointer;
        max-width: calc(100% - desktop-vw(24));
        position: absolute;
        left: desktop-vw(20);
        top: 50%;
        padding: 0px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: desktop-vw(16);
        font-family: $font-family-main;
        font-weight: $font-weight-regular;
        color: $color-text-main;
        transform: translateY(-50%);
        transform-origin: left top;
        @include transition;
        z-index: 2;
    }

    &__error {
        margin-top: desktop-vw(14);
        font-size: desktop-vw(16);
        font-family: $font-family-main;
        font-weight: $font-weight-regular;
        color: $color-text-error;
        @include transition;
    }
}

@include media-tablet-max {
    .base-input {
        &_fill {
            &.base-input_focus {
                .base-input__label {
                    transform: translate(0, tablet-vw(-28)) scale(0.85);
                }
            }
        }

        &_light {
            &.base-input_focus {
                .base-input__label {
                    padding: 0 tablet-vw(4);
                    margin: 0 tablet-vw(-4);
                    transform: translate(0, tablet-vw(-37)) scale(0.8);
                }
            }
        }

        &__eye {
            width: tablet-vw(20);
            height: tablet-vw(20);
            right: tablet-vw(20);
        }

        &__input {
            height: tablet-vw(60);
            border-radius: tablet-vw($border-radius-main);
            border: tablet-vw(2) solid transparent;

            input {
                padding: tablet-vw(20);
                border-radius: tablet-vw($border-radius-main);
                font-size: tablet-vw(16);
            }
        }

        &__label {
            max-width: calc(100% - desktop-vw(24));
            left: tablet-vw(20);
            font-size: tablet-vw(16);
        }

        &__error {
            margin-top: tablet-vw(14);
            font-size: tablet-vw(16);
        }
    }
}

@include media-mobile-max {
    .base-input {
        &_fill {
            &.base-input_focus {
                .base-input__label {
                    transform: translate(0, mobile-vw(-28)) scale(0.85);
                }
            }
        }

        &_light {
            &.base-input_focus {
                .base-input__label {
                    padding: 0 mobile-vw(4);
                    margin: 0 mobile-vw(-4);
                    transform: translate(0, mobile-vw(-37)) scale(0.8);
                }
            }
        }

        &__eye {
            width: mobile-vw(20);
            height: mobile-vw(20);
            right: mobile-vw(20);
        }

        &__input {
            height: mobile-vw(60);
            border-radius: mobile-vw($border-radius-main);
            border: mobile-vw(2) solid transparent;

            input {
                padding: mobile-vw(20);
                border-radius: mobile-vw($border-radius-main);
                font-size: mobile-vw(16);
            }
        }

        &__label {
            max-width: calc(100% - mobile-vw(24));
            left: mobile-vw(20);
            font-size: mobile-vw(16);
        }

        &__error {
            margin-top: mobile-vw(14);
            font-size: mobile-vw(16);
        }
    }
}
</style>
