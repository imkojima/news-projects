<template>
  <nav class="app-nav-sidebar">
    <a class="app-nav-sidebar__nav-item nav-item" @click="navigateRoute('dashboard')">
      <div class="nav-item__icon" :style="{ maskImage: `url(/proj-assets/political-contribution/chart-g.png)` }"></div>
      <p class="nav-item__hint">
        {{ $t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.CHARTS') }}
      </p>
    </a>
    <a class="app-nav-sidebar__nav-item nav-item" @click="navigateRoute('explore')">
      <div class="nav-item__icon" :style="{ maskImage: `url(/proj-assets/political-contribution/tool-g.png)` }"></div>
      <p class="nav-item__hint">
        {{ $t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.EXPLORE') }}
      </p>
    </a>
    <a class="app-nav-sidebar__nav-item nav-item" @click="navigateRoute('story1')">
      <div class="nav-item__icon" :style="{ maskImage: `url(/proj-assets/political-contribution/article-g.png)` }"></div>
      <p class="nav-item__hint">
        {{ $t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.ANALYSIS') }}
      </p>
    </a>
    <a class="app-nav-sidebar__nav-item app-nav-sidebar__nav-item--dimmed-border nav-item" @click="navigateRoute('story1')">
      <div class="nav-item__icon-circle"></div>
      <p class="nav-item__hint nav-item__hint--story" v-html="$t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.ANALYSIS_STORY1')"></p>
    </a>
    <a class="app-nav-sidebar__nav-item app-nav-sidebar__nav-item--dimmed-border nav-item" @click="navigateRoute('story2')">
      <div class="nav-item__icon-circle"></div>
      <p class="nav-item__hint nav-item__hint--story" v-html="$t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.ANALYSIS_STORY2')"></p>
    </a>
    <a class="app-nav-sidebar__nav-item app-nav-sidebar__nav-item--dimmed-border nav-item" @click="navigateRoute('story3')">
      <div class="nav-item__icon-circle"></div>
      <p class="nav-item__hint nav-item__hint--story" v-html="$t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.ANALYSIS_STORY3')"></p>
    </a>
    <a class="app-nav-sidebar__nav-item app-nav-sidebar__nav-item--dimmed-border nav-item" @click="navigateRoute('story4')">
      <div class="nav-item__icon-circle"></div>
      <p class="nav-item__hint nav-item__hint--story" v-html="$t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.ANALYSIS_STORY4')"></p>
    </a>
    <a class="app-nav-sidebar__nav-item app-nav-sidebar__nav-item--dimmed-border nav-item" @click="navigateRoute('story5')">
      <div class="nav-item__icon-new">NEW</div>
      <p class="nav-item__hint nav-item__hint--story" v-html="$t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.ANALYSIS_STORY5')"></p>
    </a>
    <a class="app-nav-sidebar__nav-item nav-item" @click="navigateRoute('story6')">
      <div class="nav-item__icon-new">NEW</div>
      <p class="nav-item__hint nav-item__hint--story" v-html="$t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.ANALYSIS_STORY6')"></p>
    </a>
    <a class="app-nav-sidebar__nav-item nav-item" @click="newTab('http://www.readr.tw/series/political-contribution')">
      <div class="nav-item__icon" :style="{ maskImage: `url(/proj-assets/political-contribution/star.png)` }"></div>
      <p class="nav-item__hint">{{ $t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.FOLLOW') }}</p>
    </a>
    <a class="app-nav-sidebar__nav-item nav-item" @click="newTab('https://github.com/mirror-media/politicalcontribution')">
      <div class="nav-item__icon" :style="{ maskImage: `url(/proj-assets/political-contribution/paper-g.png)` }"></div>
      <p class="nav-item__hint">{{ $t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.DATA') }}</p>
    </a>
    <a class="app-nav-sidebar__nav-item nav-item" @click="toogleRelatedLightbox">
      <div class="nav-item__icon" :style="{ maskImage: `url(/proj-assets/political-contribution/text-g.png)` }"></div>
      <p class="nav-item__hint">{{ $t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.RELATED') }}</p>
    </a>
    <a class="app-nav-sidebar__nav-item app-nav-sidebar__nav-item--disable-border nav-item" @click="newTab('https://www.readr.tw/series/political-contribution/donate')">
      <div class="nav-item__icon nav-item__icon--donate" :style="{ maskImage: `url(/proj-assets/political-contribution/donate-white.png)` }"></div>
      <p class="nav-item__hint">{{ $t('POLITICAL_CONTRIBUTION.NAVS_SIDEBAR.DONATE') }}</p>
    </a>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateRoute (path) {
      this.$router.push(path)
      this.$emit('closeNavSidebar')
      this.$scrollTo('.section-content')
    },
    newTab (url) {
      window.open(url)
      this.$emit('closeNavSidebar')
    },
    toogleRelatedLightbox () {
      this.$emit('toogleRelatedLightbox')
      this.$emit('closeNavSidebar')
    }
  }  
}
</script>

<style lang="stylus" scoped>
.app-nav-sidebar
  background-color #152438
  &__nav-item
    display inline-block
    width 100%
    height 150px
    border-bottom 3px solid white
    &--dimmed-border
      border-bottom 1px solid gray
    &--disable-border
      border-bottom none

.nav-item
  display flex
  justify-content flex-start
  align-items center
  text-decoration none
  padding 0 30px 0 calc((100% - 182px) / 2)
  line-height 1.25
  &__icon
    min-width 40px
    width 40px
    min-height 40px
    height 40px
    mask-position center center
    mask-size 100% auto
    mask-repeat no-repeat
    background-color white
    margin 0 10px 0 0
    &--donate
      mask-size auto 100%
  &__icon-circle
    min-width 30px
    width 30px
    min-height 30px
    height 30px
    border-radius 30px
    background-color transparent
    margin 0 20px 0 0
  &__icon-new
    min-width 40px
    width 40px
    min-height 30px
    height 30px
    border-radius 50%
    border 1px solid white
    color white
    display flex
    justify-content center
    align-items center
    margin 0 10px 0 0
    font-size 12px
  &__hint
    color white
    font-size 22px
    &--story
      font-size 18px
      font-weight 300
</style>

