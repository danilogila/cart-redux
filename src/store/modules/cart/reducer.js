import { produce } from 'immer'

function cart(state = [], action){
    switch(action.type){
        case "@cart/ADD":
            return produce(state, draft => {
                const productIndex = draft.findIndex( product => product.id === action.product.id)
                if(productIndex >= 0){
                    draft[productIndex].amount++
                }else{
                    draft.push({
                        ...action.product,
                        amount: 1
                    })
                }
            })
        case "@cart/REMOVE":
            return produce(state, draft => {
                const productIndex = draft.findIndex( product => product.id === action.id)
                if(productIndex >= 0){
                    draft.splice(productIndex, 1)
                }
            })
        case "@cart/UPDATE_AMOUNT": {
            const amount = Number(action.amount)
            if (amount <= 0){
                return state
            }

            return produce(state, draft => {
                const productIndex = draft.findIndex( product => product.id === action.id)
                if(productIndex >= 0) {
                    draft[productIndex].amount = amount
                }
            })
        }
        default:
            return state
    }
}

export default cart
