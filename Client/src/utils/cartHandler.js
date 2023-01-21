export const cartHandler = async(values) => {
    const response = await fetch(`http://localhost:4000/cart`)
    const data = await response.json()
    return data
}