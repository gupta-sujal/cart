import React from "react";
export default function CartItem()
{
    const styles={
        image:{
            height:100,width:200,borderRadius:10,backgroundColor:'skyblue'
        }
    }
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image}/>
                </ div>
                <div className="right-block">
                    <div style={{fontSize:25}}>item</div>
                    <div style={{fontSize:25}}>price</div>
                    <div style={{fontSize:25}}>rating</div>
                    <div className="cart-item-actions">

                    </div>

                </div>

        </div>
    )
}
