<template lang="pug">
.paginate
    client-only
    Paginate(
        v-model="page",
        :page-count="pagesCount",
        :page-range="wW >= 768 ? 3 : 1",
        :margin-pages="1",
        :click-handler="clickHandler"
        container-class="paginate__pagination",
        page-class="paginate__number",
        prev-text="",
        next-text="",
        prev-class="paginate__arrow",
        next-class="paginate__arrow",
        prev-link-class="paginate__arrow_prev",
        next-link-class="paginate__arrow_next",
    )
</template>

<script>
export default {
    name: "base-paginate",
    props: [
        "customClass",
        "current-page",
        "pages-count",
        "page-name",
        "pageNumber",
    ],

    data() {
        return {
            page: 1,
            wW: null,
        };
    },

    mounted() {
        if (this.currentPage > 1) {
            this.page = this.currentPage;
        }

        this.wW = window.innerWidth;
    },

    watch: {
        pageNumber: {
            handler(pageNumber) {
                this.page = Number(pageNumber);
            },
        },
    },

    methods: {
        clickHandler() {
            this.$emit("on-page-change", this.page);
        },
    },
};
</script>

<style scoped lang="scss">
.paginate {
    margin: 0 auto;
    margin-top: desktop-vw(47);
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &__pagination {
        display: flex;
        list-style-type: none;
        gap: desktop-vw(8);
    }

    & ::v-deep {
        .paginate__number {
            display: flex;
            align-items: center;
            justify-content: center;

            a {
                font-family: "Mont";
                font-style: normal;
                font-weight: 800;
                font-size: desktop-vw(14);
                line-height: 160%;
                letter-spacing: 0.01em;
                color: #2571ff;
                background: rgba(37, 113, 255, 0.1);
                border-radius: desktop-vw(10);
                transition: color 0.3s ease, background-color 0.3s ease;
                text-align: center;
                width: desktop-vw(64);
                padding: desktop-vw(9) 0;

                @media (any-hover: hover) {
                    &:hover {
                        background: #0036f3;
                        color: #fff;
                    }
                }
            }
        }

        .paginate__number.active {
            a {
                background: linear-gradient(
                    301.15deg,
                    #0007d5 0.98%,
                    #734de1 101.45%
                );
                color: #fff;
                font-size: desktop-vw(16);
                padding: desktop-vw(10) 0;
                border-radius: desktop-vw(12);
            }
        }

        .paginate__arrow {
            cursor: pointer;
            display: flex;
            align-items: center;
        }

        .paginate__arrow_prev {
            padding-right: desktop-vw(20);

            &::before {
                content: "";
                display: block;
                width: desktop-vw(13);
                height: desktop-vw(8);
                background: url("~/assets/svg/filter-arrow-blue.svg") center
                    center/cover no-repeat;
                transform: rotate(90deg);
            }
        }

        .paginate__arrow_next {
            padding-left: desktop-vw(20);
            &::before {
                content: "";
                display: block;
                width: desktop-vw(13);
                height: desktop-vw(8);
                background: url("~/assets/svg/filter-arrow-blue.svg") center
                    center/cover no-repeat;
                transform: rotate(-90deg);
            }
        }

        .disabled {
            .paginate__arrow_prev {
                &::before {
                    background: url("~/assets/svg/filter-arrow-dark.svg") center
                        center/cover no-repeat;
                }
            }

            .paginate__arrow_next {
                &::before {
                    background: url("~/assets/svg/filter-arrow-dark.svg") center
                        center/cover no-repeat;
                }
            }
        }
    }
}

@media screen and (max-width: $tablet) {
    .paginate {
        margin-top: tablet-vw(44);

        &__pagination {
            gap: tablet-vw(8);
        }

        & ::v-deep {
            .paginate__number {
                a {
                    font-size: tablet-vw(14);
                    border-radius: tablet-vw(10);
                    width: tablet-vw(64);
                    padding: tablet-vw(9) 0;
                }
            }

            .paginate__number.active {
                a {
                    font-size: tablet-vw(16);
                    padding: tablet-vw(10) 0;
                    border-radius: tablet-vw(12);
                }
            }

            .paginate__arrow_prev {
                padding-right: tablet-vw(20);

                &::before {
                    width: tablet-vw(13);
                    height: tablet-vw(8);
                }
            }

            .paginate__arrow_next {
                padding-left: tablet-vw(20);
                &::before {
                    width: tablet-vw(13);
                    height: tablet-vw(8);
                }
            }
        }
    }
}

@media screen and (max-width: $mobile) {
    .paginate {
        margin-top: mobile-vw(10);

        &__pagination {
            gap: mobile-vw(6);
        }

        & ::v-deep {
            .paginate__number {
                a {
                    font-size: mobile-vw(12);
                    border-radius: mobile-vw(8);
                    width: mobile-vw(46);
                    padding: mobile-vw(7.5) 0;
                }
            }

            .paginate__number.active {
                a {
                    font-size: mobile-vw(12);
                    padding: mobile-vw(10) 0;
                    border-radius: mobile-vw(10);
                }
            }

            .paginate__arrow_prev {
                padding-right: mobile-vw(16);

                &::before {
                    width: mobile-vw(13);
                    height: mobile-vw(8);
                }
            }

            .paginate__arrow_next {
                padding-left: mobile-vw(16);
                &::before {
                    width: mobile-vw(13);
                    height: mobile-vw(8);
                }
            }
        }
    }
}
</style>
