<template>
  <div class="slide" :data-anchor="`slide-easteregg`" :ref="`section-promise-survey-easteregg`">
    <div class="easteregg">
      <img class="easteregg__president" src="/proj-assets/president-promise/easteregg.png" alt="easteregg__president">
      <h1 class="easteregg__h1">恭喜你</h1>
      <h2 class="easteregg__h2">你已經看完小英全部的政策<br>（共 {{ promisesTotal }} 則）</h2>
      <p class="easteregg__description"><span>{{ remainingTimeToNextSection }} 秒後</span>將自動跳轉到你關心的政策，看看哪些政策大家最關心吧！</p>
      <a class="easteregg__share-button" :href="`https://www.facebook.com/share.php?u=${READR_SITE_URL}president-promise`" target="_blank" @click="sendGAFB">分享給朋友</a>
    </div>
  </div>
</template>

<script>
import fullPageMixin from '../../_vue-fullpage/fullPageMixin'
import { READR_SITE_URL } from '../../../../constants'

export default {
  mixins: [ fullPageMixin ],
  watch: {
    // '$store.state.PresidentPromise.currentSlideIndex' (value) {
    //   if (value === 10) {
    //     setTimeout(() => { this.moveSectionDown() }, 3000)
    //     this.startCountDown()
    //   }
    // },
    '$store.state.PresidentPromise.showNextRoundButton' (value) {
      if (!value) {
        setTimeout(() => { this.moveSectionDown() }, 3000)
        this.startCountDown()
      }
    },
    '$store.state.PresidentPromise.currentSection' () {
      if (this.countDownInterval) this.resetCountDown()
    }
  },
  data () {
    return {
      remainingTimeToNextSection: 3,
      countDownInterval: undefined,
      READR_SITE_URL,
    }
  },
  computed: {
    promisesTotal () {
      return this.$store.state.PresidentPromise.promiseData.length
    }
  },
  methods: {
    startCountDown () {
      this.countDownInterval = setInterval(() => {
        this.remainingTimeToNextSection -= 1
      }, 1000)
    },
    resetCountDown () {
      clearInterval(this.countDownInterval)
      this.countDownInterval = undefined
      this.remainingTimeToNextSection = 3
    },
    sendGAFB () {
      window.ga('send', 'event', 'projects', 'click', 'share to fb', { nonInteraction: false })
    }
  }
}
</script>

<style lang="stylus" scoped>
.slide
  background-color #1f464f
.easteregg
  max-width 1366px
  max-height 768px
  height 100%
  margin auto
  display flex
  flex-direction column
  justify-content center
  align-items center
  &__president
    width 570px
  &__h1
    font-size 100px
    color transparent
    -webkit-text-stroke 2px white
    margin 32px 0 29px 0
  &__h2
    font-size 32px
    font-weight 900
    line-height 1.31
    text-align center
    color #ffffff
    margin 0
  &__description
    font-size 18px
    line-height 1.44
    text-align justify
    color #c9c9c9
    margin 27px 0 35px 0
    span
      color #fa8d62
  &__share-button
    width 364px
    height 44px
    border-radius 5px
    background-color transparent
    border solid 2px #ffffff
    color white
    cursor pointer
    display flex
    justify-content center
    align-items center
    text-decoration none

@media (max-width 425px)
  .easteregg
    max-width 300px
    max-height 468px
    &__president
      width auto
      height 30vh
      max-height 207px
    &__h1
      font-size 60px
      margin 13px 0 10px 0
    &__h2
      font-size 22px
    &__description
      font-size 16px
      margin 17px 0 15px 
    &__share-button
      width 264px
      height 36px
</style>

