<template>
  <section class="the-info">
    <div class="the-info__container">
      <UserState ref="userState" />
      <div class="the-info__wrapper">
        <img class="the-info__cancel" src="/proj-assets/food-delivery/img/icon/info-close.svg" alt="" @click="toggleInfo(false)" loading="lazy">
      </div>
      <div class="the-info__slides" :style="{ transform: `translateX(-${81.25 * (currentPage - 1)}vw)` }">
      <div class="the-info__slide">
        <img src="/proj-assets/food-delivery/img/icon/readr.svg" alt="" loading="lazy">
        <p>文字採訪／李又如</p>
        <p>設計／陳怡蒨</p>
        <p>插畫／許玲瑋</p>
        <p>工程／林昱帆</p>
        <p>攝影／李昭妟、簡信昌</p>
      </div>
      <div class="the-info__slide">
        <OtherReports />
      </div>
      </div>
      <div class="the-info__pages">
        <div class="the-info__page" :class="{ active: currentPage === 1 }" @click="showPage(1)"></div>
        <div class="the-info__page" :class="{ active: currentPage === 2 }" @click="showPage(2)"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('FoodDelivery')

import UserState from './UserState.vue'
import OtherReports from './OtherReports.vue'

export default {
  name: 'TheInfo',
  components: {
    UserState,
    OtherReports
  },
  data () {
    return {
      currentPage: 1
    }
  },
  mounted () {
    this.$refs.userState.setState()
  },
  methods: {
    ...mapMutations([
      'toggleInfo'
    ]),
    showPage (page) {
      this.currentPage = page
    }
  }
}
</script>

<style lang="stylus">
@import '../util/global.styl'

.the-info
  position fixed
  top 0
  left 0
  width 100%
  z-index 999
  line-height normal
  overflow hidden
  background-color rgba(#000, 0.3)
  &__container
    min-height 100vh
    max-width 800px
    position relative
    margin-right auto
    margin-left auto
  &__wrapper
    position absolute
    height 84px
    display flex
    align-items center
    top 0
    right 20px
    @media (min-width $mobile)
      height 120px
      right 40px
  &__cancel
    width 20px
    display block
    cursor pointer
    user-select none
    @media (min-width $mobile)
      width 40px
  &__slides
    display flex
    padding-left 12.5vw
    transition transform 0.32s
    @media (min-width $mobile)
      padding-left 0
      padding-top 50px
      justify-content center
  &__slide
    background-color #ffdc03
    display flex
    align-items center
    justify-content center
    flex-direction column
    font-weight 300
    font-size 1.5rem
    flex 0 0 75vw
    height 75vw
    border-radius 24px
    padding-right 30px
    padding-left 30px
    @media (min-width $mobile)
      padding-right 0
      padding-left 0
      flex-basis 240px
      height 240px
    & .other-reports
      @media (min-width $mobile)
        max-width 180px
    & + .the-info__slide
      margin-left 6.25vw
      @media (min-width $mobile)
        margin-left 20px
    & img
      width 50px
      margin-bottom 10px
  &__pages
    display flex
    justify-content center
    margin-top 15px
    @media (min-width $mobile)
      display none
  &__page
    border-radius 50%
    width 15px
    height 15px
    box-sizing border-box
    border 2px solid #fff
    cursor pointer
    &.active
      background-color #ffdc03
    & + .the-info__page
      margin-left 15px
</style>