export default {
  SET_BOARD_FOR_VERIF: (state, data) => {
    state.boardForVerif = data
  },
  SET_BOARDS: (state, data) => {
    state.boards = data
  },
  SET_CANDIDATES_COUNCILORS: (state, data) => {
    state.candidates.councilors = data
  },
  SET_CANDIDATES_FOR_VERIF: (state, { type, data }) => {
    state.candidatesForVerif[type] = data
  },
  SET_CANDIDATES_MAYORS: (state, data) => {
    state.candidates.mayors = data
  },
  SET_ELECTIONS: (state, data) => {
    state.elections = data
  },
  SET_USER_ID: (state, id) => {
    state.userID = id
  }
}