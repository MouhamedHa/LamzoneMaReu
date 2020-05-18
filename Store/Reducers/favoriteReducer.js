const initialState = { marquedMeeting: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const marquedMeetingIndex = state.marquedMeeting.findIndex(item => item.id === action.value.id)
      if (marquedMeetingIndex !== -1) {
        // On le supprime de la liste
        nextState = {
          ...state,
          marquedMeeting: state.marquedMeeting.filter( (item, index) => index !== marquedMeetingIndex)
        }
      }
      else {
        // On l'ajoute à la liste
        nextState = {
          ...state,
          marquedMeeting: [...state.marquedMeeting, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite