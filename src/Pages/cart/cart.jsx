import React, { useContext } from 'react'
import '../cart/car.css'
import { StoreContext } from '../../Context/StoreContext'

const cart = () => {
  const {cartitems, food_list, removefromcart} = useContext(StoreContext)
  
  // Find the food item details based on cart items
  const getFoodItem = (itemId) => {
    return food_list.find(item => item._id === itemId)
  }
  function checkout (){
    alert("This is just a simple project and not a actully food website so I guess the wbesite ends here. Thanks")
  }
  
  // Calculate total price for an item
  const getItemTotal = (itemId) => {
    const item = getFoodItem(itemId)
    return item ? item.price * cartitems[itemId] : 0
  }
  
  // Calculate grand total
  const getGrandTotal = () => {
    let total = 0
    for (const itemId in cartitems) {
      if (cartitems[itemId] > 0) {
        total += getItemTotal(itemId)
      }
    }
    return total
  }
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Object.keys(cartitems).map((itemId) => {
          if (cartitems[itemId] > 0) {
            const item = getFoodItem(itemId)
            if (item) {
              return (
                <div key={itemId} className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[itemId]}</p>
                  <p>${getItemTotal(itemId)}</p>
                  <p onClick={() => removefromcart(itemId)} className='cross'>x</p>
                </div>
              )
            }
          }
          return null
        })}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getGrandTotal()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getGrandTotal() > 0 ? 2 : 0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getGrandTotal() > 0 ? getGrandTotal() + 2 : 0}</b>
              </div>
            </div>
            <button onClick={checkout}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default cart
