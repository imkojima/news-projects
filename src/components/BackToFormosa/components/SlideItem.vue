<template>
  <div class="slide-item" :style="{ minHeight: `${wh}px` }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SlideItem',
  computed: {
    wh () {
      return this.$store.state.viewport[ 1 ]
    } 
  }
}
</script>

<style lang="stylus">
@import '../util/global.styl'

.slide-item
  position relative
  overflow hidden
  &.paused *
    animation-play-state paused !important
  &__text
    position absolute
    width 100%
    padding-right 10px
    padding-left 10px
    left 50%
    transform translateX(-50%)
    text-align center
    animation slide-text-default 1.2s $easeOutSine both
    @media (min-width $breakpoint-md)
      animation-name slide-text-default-md
      width auto
      transform translateX(0)
    &.caption
      font-size 2.0rem
      display flex
      flex-direction column
      align-items center
      line-height 1.4
      & p
        padding 3px 14px
        & + p
          margin-top 16px
      &--light p
        background-color rgba(#fff, 0.7)
      &--dark p
        background-color rgba(#000, 0.7)
        color #fff
  &__picture
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    & img
      width 100%
      height 100%
      object-fit cover
</style>
