import React from "react";
// export default function CartItem()
// {
//     
    //     
    // }
    class CartItem extends React.Component
    {
        constructor(){
                    super();
                    this.state={
                        price:999,
                        title:'mobile phone',
                        qty:1,
                        img:''
                    }
                }
                increaseQuantity=()=>
                {
                    this.setState((prevState)=>
                        {
                            return{
                            qty:prevState.qty+1
                            }
                        }
                    )
                    
                }
                decreaseQuantity=()=>
                {
                    this.setState((prevState)=>
                    {
                        return{
                            qty:prevState.qty-1
                            }
                    }
                )
                    
                }

        render()
        {
            
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
                </ div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{fontSize:25}}>{this.state.price}</div>
                    <div style={{fontSize:25}}>{this.state.qty}</div>
                    <div className="cart-item-actions">
                    <img alt="increase" onClick={this.increaseQuantity} className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>
                    <img alt="decrease" onClick={this.decreaseQuantity} className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png"/>
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"/>
                    </div>

                </div>

        </div>
    )
}
    }
    const styles={
        image:{
            height:200,width:200,borderRadius:10,backgroundColor:'skyblue'
        }
    }
    export default CartItem;
