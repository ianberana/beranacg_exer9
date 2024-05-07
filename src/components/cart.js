import '../App.css';

function Cart(props) {
    return (
        <>
        <div className="cart-item flex-row">
            <div className="cart-item-text flex-row v-center">
                <p>{props.name}</p>
                <p> QTY: {props.qty}</p>
            </div>
            <div className="delete v-center">
                <button onClick={props.delete}>X</button>
            </div>
        </div>
        </>
    );
}

export default Cart;
