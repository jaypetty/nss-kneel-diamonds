import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
const metals = getMetals()
const sizes = getSizes()
const jewelry = getStyles()
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId})

const foundSize= sizes.find(
    (size) => {
        return size.id === order.sizeId})

const foundStyle = jewelry.find(
    (style) => {
        return style.id === order.styleId});
        
  const totalCost = foundMetal.price + foundSize.price + foundStyle.price;
    return `<li>
    Order #${order.id} costs $${totalCost.toFixed(2)}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map((order) => (buildOrderListItem)(order))

    html += listItems.join("")
    html += "</ul>"

    return html
}

