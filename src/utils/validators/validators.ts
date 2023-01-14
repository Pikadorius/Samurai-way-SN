// will be passed to forms validate property


export const required = (value:string) => {
    if (value) return undefined
    else return 'Field is required'
}

// max length creator
export const maxLength = (length:number) => (value:string) => {
    if (value && value.length > length) return `Max length is ${length} symbols`
    else return undefined
}

// min length creator
export const minLength = (length:number) => (value:string) => {
    if (value && value.length < length) return `Min length is ${length} symbols`
    else return undefined
}