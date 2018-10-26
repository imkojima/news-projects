<template>
  <div class="data-boards">
    <h3>{{ address }}</h3>
    <p>附近的看板</p>
    <div class="boards-container">
      <div class="boards" @scroll="handleLoadMore">
        <div v-for="board in boards" :key="`b-${board.id}`" class="boards__item" @click="openDataBoard(board.id)">
          <div class="img-container">
            <img :src="`https://www.readr.tw${board.image}`" alt="">
          </div>
          <p>{{ board.county.length < 3 ? `${board.county}市` : board.county }}{{ board.district.length < 3 ? `${board.district}區` : board.district }}{{ board.road }}</p>
          <p class="date" v-text="moment(board.uploaded_at).format('M 月 D 日上傳')"></p>
        </div>
      </div>
      <p v-if="boards.length < 1">該位置目前尚無其他看板</p>
    </div>
    <div class="action">
      <button class="btn btn--back" @click="$emit('close')"><img src="/proj-assets/election-board/images/arrow.png"></button>
      <button class="btn btn--upload" @click="goUpload">我也要上傳</button>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import moment from 'moment'

const DEFAULT_PAGE = 1

const fetchBoards = (store, {
  coordinates,
  page = DEFAULT_PAGE,
  maxResults = 12,
} = {}) => {
  return store.dispatch('ElectionBoard/FETCH_BOARDS_BY_COORDINATE', {
    coordinates,
    page,
    maxResults,
    verifiedAmount: 3,
    notBoardAmount: 2,
  })
}

export default {
  name: 'DataBoardsByCoordinate',
  props: {
    address: {
    },
    boardID: {
      required: true
    },
    coordinates: {
      required: true
    }
  },
  data () {
    return {
      count: 0,
      page: DEFAULT_PAGE,
    }
  },
  computed: {
    boards () {
      return this.$store.state.ElectionBoard.boardsByCoordinate.filter(board => board.id !== this.boardID)
    },
  },
  beforeMount () {
    fetchBoards(this.$store, { coordinates: this.coordinates })
    .then(res => {
      this.count = res.count
    })
  },
  methods: {
    goUpload () {
      this.$router.push(`/project/election-board/upload`)
      window.ga('send', 'event', 'projects', 'click', `go upload from coordinate`, { nonInteraction: false })
    },
    handleLoadMore () {
      if (this.boards.length < this.count) {
        const boardsContainer = document.querySelector('.boards')
        const boards = document.querySelectorAll('.boards__item')
        const board = boards[boards.length - 3]
        if (board.getBoundingClientRect().top < boardsContainer.getBoundingClientRect().bottom) {
          fetchBoards(this.$store, { coordinates: this.coordinates, page: this.page + 1 })
          .then(res => {
            this.page = this.page + 1
          })
        }
      }
    },
    moment,
    openDataBoard (id) {
      this.$emit('openDataBoard', this.boards.find(board => board.id === id))
      window.ga('send', 'event', 'projects', 'click', `go board ${id} from coordinate`, { nonInteraction: false })
    }
  }
}
</script>
<style lang="stylus" scoped>
theme-color = #4897db

.data-boards
  display flex
  flex-direction column
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 10
  width 100%
  padding 60px 25px 90px
  background-color #000
  h3
    color #fff
    font-size 1.25rem
    font-weight 500
    > span
      margin-left .5em
      font-size .875rem
      font-weight 300
  p
    color #4897db
    font-size .875rem
  button
    cursor pointer
  .boards-container
    flex 1
    position relative
    margin-top 25px
    > p
      color #a0a0a0
      font-size 1.25rem
    .boards
      display flex
      justify-content space-between
      align-items flex-start
      flex-wrap wrap
      position absolute
      top 0
      right 0
      left 0
      bottom 0
      width 100%
      height 100%
      padding-bottom 10px
      overflow-y auto
      &__item
        width calc((100% - 15px) / 2)
        margin-top 10px
        cursor pointer
        &:nth-of-type(1), &:nth-of-type(2)
          margin-top 0
        > p
          color #fff
          text-align justify
          &.date
            color #a0a0a0 
        .img-container
          position relative
          display block
          width 100%
          padding-top 100%
          margin-bottom .5em
          background-color #a0a0a0
          img
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            width 100%
            height 100%
            object-fit cover
            object-position center center
  .action
    display flex
    justify-content space-between
    position absolute
    bottom 0
    left 0
    right 0
    width 100%
    padding 25px
    background-color #000
    .btn
      height 50px
      font-size 1.25rem
      font-weight 700
      border none
      border-radius 2px
      &--back
        width 55px
        padding 11px
        background-color #a0a0a0
        > img 
          width 34px
      &--upload
        flex 1
        margin-left 15px
        background-color theme-color

@media (min-width: 768px)
  .data-boards
    padding 60px calc((100% - 600px) / 2) 170px
    h3
      font-size 2.25rem
      > span
        font-size 1.25rem
    p
      font-size 1.25rem
    .boards-container
      left -15px
      width calc(100% + 30px)
      margin-top 20px
      .boards
        justify-content flex-start
        &__item
          width calc((100% - 120px) / 4)
          margin 15px
          &:nth-of-type(1), &:nth-of-type(2)
            margin-top 15px
    .action
      bottom 65px
      width 450px
      margin 0 auto
      padding 0
      .btn
        &--back
          width 95px

</style>