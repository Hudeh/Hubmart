import {createSelector} from 'reselect'



const authSelect = (state) => state.authReducer;

export const currentUserSelector = createSelector([authSelect], (authUser) => authUser.currentUser)

export const authUserSelector = createSelector([authSelect], (authUser )=> authUser.isAuthenticated)
export const tokenSelector = createSelector([authSelect], (authUser )=> authUser.token)
export const alertMessageSelector = createSelector([authSelect], (authUser )=> authUser.alertMessage)
export const showMessageSelector = createSelector([authSelect], (authUser )=> authUser.showMessage)