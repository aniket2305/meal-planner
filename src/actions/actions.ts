

export const addItem = (item: string) => {
    return {
        type: 'ADD_ITEM',
        value: item
    }
}

export const removeItem = (id: string) => {
    return {
        type: 'REMOVE_ITEM',
        value: id
    }
}

export const completeItem = (id: string) => {
    return {
        type: 'COMPLETE_ITEM',
        value: id
    }
}

export const unCompleteItem = (id: string) => {
    return {
        type: 'UNCOMPLETE_ITEM',
        value: id
    }
}