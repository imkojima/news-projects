<template>
  <section class="covid-opening">
    <img
      class="covid-opening__img"
      :src="`/proj-assets/covid19-disinformation/title-${locale}.png`"
      :alt="$t('COVID19_D.TITLE')"
    >
    <h1 v-text="$t('COVID19_D.TITLE')" />
    <p
      class="covid-opening__brief"
      v-html="$t('COVID19_D.DESCRIPTION')"
    />
    <ShakeArrow class="covid-opening__arrow" />
  </section>
</template>

<script>
import ShakeArrow from './ShakeArrow.vue'

export default {
  name: 'TheOpening',
  components: {
    ShakeArrow
  },
  props: {
    locale: {
      type: String,
      default: 'tw'
    }
  }
}
</script>

<style lang="stylus" scoped>
.covid-opening
  min-height calc(100vh - 40px)
  padding-top 81px
  color #ffffff
  background-color #333333
  background-image url(/proj-assets/covid19-disinformation/bg.png)
  background-size cover
  background-position center right
  background-repeat no-repeat
  @media (min-width: 768px)
    display flex
    flex-direction column
    justify-content center
    padding-top 0
  @media (min-width: 1024px)
    min-height calc(100vh - 50px)
  > *
    width 280px
    margin 0 auto
    @media (min-width: 768px)
      width 495px
  h1
    display none
  &__img
    display block
    @media (min-width: 1200px)
      width 600px
      transform translateX(-40%)
  &__brief
    margin 30px auto 0
    font-size 16px
    font-weight 500
    line-height 1.75
    text-align justify
    @media (min-width: 768px)
      margin-top 32px
    @media (min-width: 1200px)
      transform translateX(-25%)
  &__arrow
    margin 70px auto 0
    @media (min-width: 768px)
      margin-top 160px

.covid19-disinformation.en
  .covid-opening__brief
    text-align left

</style>
