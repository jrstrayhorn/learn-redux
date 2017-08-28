import store from './store'
import { removeColor, rateColor, addColor } from './actions'


store.subscribe(() =>
    console.log('color count:', store.getState().colors.length)
)

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})

//console.log( "Length of colors array before ADD_COLOR", store.getState().colors.length )
//console.log( store.getState().sort )

store.dispatch( addColor("Radical Red", "#432321") )

store.dispatch( addColor("Mystical Blue", "#231234") )

store.dispatch( rateColor("3315e1p5-3abl-0p523-30e4-8001l8yf3036", 4))
/*
store.dispatch({
    type: "REMOVE_COLOR",
    id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412"
})*/

//console.log( "Length of colors array after ADD_COLOR", store.getState().colors.length )



console.log('Go ahead, dispatch some actions...')
