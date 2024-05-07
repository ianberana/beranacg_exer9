import './App.css';
import { useState } from "react";
import NavLink from './components/navlink';
import Cart from './components/cart';
import logo from "./images/logo.png"

function App() {
    const [pushcarts, setPushcarts] = useState([]);

    const menus = [
      { name: "Appliances", url: "#", id: 1},
      { name: "Groceries", url: "#", id: 2},
      { name: "Gadgets", url: "#", id: 3},
      { name: "Clothing", url: "#", id: 4},
    ];
      
    function addToCart(item) {
      setPushcarts((pushcarts) => {
        let temp;
        if (pushcarts.includes(item)) {
          temp = [...pushcarts];
          const index = temp.indexOf(item)
          temp[index+1]++;
        } else {
          temp = [...pushcarts, item, 1];
        }

        return temp;
      });
    };

    function deleteItem(item) {
      setPushcarts((pushcarts) => {
        const temp = [...pushcarts];
        const index = temp.indexOf(item)
        temp.splice(index,2)

        return temp;
      });
    }

    return (
      <div id="body">
        {/* Navbar */}
        <div id="navbar" className="flex-row">
          <div id="nav-name">
            <img src={logo} alt="logo img"></img>
            <h2>Ian Berana</h2>
          </div>
          <div id="nav-links">
            <NavLink name={menus[0].name} url={menus[0].url}/>
            <NavLink name={menus[1].name} url={menus[1].url}/>
            <NavLink name={menus[2].name} url={menus[2].url}/>
            <NavLink name={menus[3].name} url={menus[3].url}/>
          </div>
        </div>

        <div className="flex-row">

          {/* Items */}
          <div id="items">
            <h1>Items</h1>
            <div id="cards">
              <div className="card">
                <img src="https://images.samsung.com/is/image/samsung/p6pim/ph/feature/others/ph-feature-ref-sbs-rs64r5301b4-535439418?$FB_TYPE_C_JPG$" alt=""></img>
                <p className="title">Samsung Refrigerator</p>
                <p className="description">
                  Our 1st Smart Refrigerator with a built-in screen
                </p>
                <button className="button add" onClick={() => addToCart("Samsung Refrigerator")}>Add to Cart</button>
              </div>

              <div className="card">
                <img src="https://ph-test-11.slatic.net/p/075a87697e0f6b44bdc45155c09c6ee4.jpg" alt=""></img>
                <p className="title">Assorted Canned Goods</p>
                <p className="description">
                  Wholesale items for grocery sari sari store
                </p>
                <button className="button add" onClick={() => addToCart("Assorted Canned Goods")}>Add to Cart</button>
              </div>

              <div className="card">
                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y0hGc1VYcU5MZG1Wc3p5djdGRkpkOXB3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSnc2aGt6UEZqaHowVCs2N3RYMnYySnhRPT0=&traceId=1" alt=""></img>
                <p className="title">iPhone 15 Pro Max</p>
                <p className="description">
                  The ultimate iPhone.
                </p>
                <button className="button add" onClick={() => addToCart("iPhone 15 Pro Max")}>Add to Cart</button>
              </div>

              <div className="card">
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/air-jordan-1-mid-shoes-7cdjgS.png" alt=""></img>
                <p className="title">Air Jordan 1 Mid</p>
                <p className="description">
                  Never mess with a classic.
                </p>
                <button className="button add" onClick={() => addToCart("Air Jordan 1 Mid")}>Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Shopping Cart */}
          <div id="cart">
            <h1>Shopping Cart</h1>
            { pushcarts.map((name, index) => {
              if (index % 2 == 1) {
                return; // Skip even indexes
              } else {
                return <Cart key={index} name={name} qty={pushcarts[index+1]} delete={() => deleteItem(name)}/>
              }
              })
            }
          </div>
        </div>
      </div>
    );
}

export default App;
