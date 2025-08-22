import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Air-Purifying Plants",
      plants: [
        {
          name: "Spider Plant",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
          img: "https://cdn.pixabay.com/photo/2020/03/21/21/29/plant-4955230_1280.jpg",
        },
        {
          name: "Peace Lily",
          description: "Removes mold spores and purifies the air.",
          cost: "$18",
          img: "https://cdn.pixabay.com/photo/2020/08/27/13/27/flower-5522053_1280.jpg",
        },
        {
          name: "Boston Fern",
          description: "Adds humidity and removes toxins from the air.",
          cost: "$20",
          img: "https://cdn.pixabay.com/photo/2022/03/03/14/10/nature-7045451_1280.jpg",
        },
        {
          name: "Rubber Plant",
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17",
          img: "https://cdn.pixabay.com/photo/2021/02/03/03/45/three-5976503_640.jpg",
        },
      ],
    },
    {
      category: "Aromatic and Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          description: "Relaxing aroma, used in aromatherapy.",
          cost: "$20",
          img: "https://cdn.pixabay.com/photo/2021/07/09/06/57/lavender-6398425_640.jpg",
        },
        {
          name: "Jasmine",
          description: "Sweet fragrance that promotes relaxation.",
          cost: "$18",
          img: "https://cdn.pixabay.com/photo/2020/06/06/15/48/scent-of-jasmine-5267072_640.jpg",
        },
        {
          name: "Rosemary",
          description: "Invigorating aroma, also used in cooking.",
          cost: "$15",
          img: "https://cdn.pixabay.com/photo/2020/05/01/13/24/herbs-5117039_640.jpg",
        },
        {
          name: "Mint",
          description: "Refreshing aroma, used in teas and cooking.",
          cost: "$12",
          img: "https://cdn.pixabay.com/photo/2017/06/12/19/23/moroccan-mint-2396530_640.jpg",
        },
        {
          name: "Lemon Balm",
          description: "Citrusy aroma that relieves stress and aids sleep.",
          cost: "$14",
          img: "https://cdn.pixabay.com/photo/2015/11/26/01/32/mellisa-1063171_1280.jpg",
        },
        {
          name: "Hyacinth",
          description: "A beautiful flowering plant known for its fragrance.",
          cost: "$22",
          img: "https://cdn.pixabay.com/photo/2018/04/02/18/11/muscari-3284637_640.jpg",
        },
      ],
    },
    {
      category: "Insect-Repelling Plants",
      plants: [
        {
          name: "Oregano",
          description: "Contains compounds that may repel certain insects.",
          cost: "$10",
          img: "https://cdn.pixabay.com/photo/2014/04/10/15/37/oregano-321033_640.jpg",
        },
        {
          name: "Marigold",
          description: "Natural insect repellent that also adds garden color.",
          cost: "$8",
          img: "https://cdn.pixabay.com/photo/2018/06/02/18/51/calendula-3448949_640.jpg",
        },
        {
          name: "Geraniums",
          description: "Repels insects while providing a pleasant aroma.",
          cost: "$20",
          img: "https://cdn.pixabay.com/photo/2017/09/26/18/07/geraniums-2789597_640.jpg",
        },
        {
          name: "Basil",
          description: "Repels flies and mosquitoes, also used in cooking.",
          cost: "$9",
          img: "https://cdn.pixabay.com/photo/2014/12/30/11/12/basil-583816_640.jpg",
        },
        {
          name: "Catnip",
          description: "Repels mosquitoes but attracts cats.",
          cost: "$13",
          img: "https://cdn.pixabay.com/photo/2021/11/16/13/46/grape-catnip-6801005_640.jpg",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          description: "Soothing gel used for skin conditions.",
          cost: "$14",
          img: "https://cdn.pixabay.com/photo/2021/08/13/22/35/plant-6544088_1280.jpg",
        },
        {
          name: "Echinacea",
          description: "Boosts the immune system and helps fight colds.",
          cost: "$16",
          img: "https://cdn.pixabay.com/photo/2023/07/23/13/04/flower-8145077_640.jpg",
        },
        {
          name: "Peppermint",
          description: "Relieves digestive issues and headaches.",
          cost: "$13",
          img: "https://cdn.pixabay.com/photo/2018/04/28/22/57/spice-3358557_1280.jpg",
        },
        {
          name: "Chamomile",
          description: "Eases anxiety and promotes better sleep.",
          cost: "$15",
          img: "https://cdn.pixabay.com/photo/2023/07/11/13/03/mayweed-8120555_640.jpg",
        },
      ],
    },
    {
      category: "Low-Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          description: "Thrives in low light and needs minimal watering.",
          cost: "$25",
          img: "https://cdn.pixabay.com/photo/2015/10/08/23/59/fortune-spring-978602_640.jpg",
        },
        {
          name: "Pothos",
          description: "Tolerates neglect and grows in various conditions.",
          cost: "$10",
          img: "https://cdn.pixabay.com/photo/2017/09/14/17/10/money-plant-2749714_640.jpg",
        },
        {
          name: "Snake Plant",
          description: "Needs infrequent watering and resists most pests.",
          cost: "$15",
          img: "https://cdn.pixabay.com/photo/2022/08/14/12/12/sansevieria-7385720_640.jpg",
        },
        {
          name: "Cast Iron Plant",
          description: "Tough plant that tolerates low light and neglect.",
          cost: "$20",
          img: "https://cdn.pixabay.com/photo/2013/02/13/14/39/etlingera-wyniosa-81281_640.jpg",
        },
        {
          name: "Succulents",
          description: "Drought-tolerant plants with unique shapes and colors.",
          cost: "$18",
          img: "https://cdn.pixabay.com/photo/2017/02/07/09/05/succulent-plants-2045388_640.jpg",
        },
        {
          name: "Aglaonema",
          description: "Low-maintenance plant that adds indoor color.",
          cost: "$22",
          img: "https://cdn.pixabay.com/photo/2022/01/14/17/32/leaves-6937875_640.jpg",
        },
      ],
    },
  ];

  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff!important",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignIems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const addToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const inCart = (plant) => {
    return cartItems.items.some((i) => i.name === plant.name);
  };

  const getTotalItems = () =>
    cartItems.items.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2022/11/08/14/42/monstera-7578722_1280.png"
              alt="Paradise Nursery logo"
            />
            <a href="/" onClick={(e) => handleHomeClick(e)}>
              <div style={{ marginLeft: "10px" }}>
                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                <i style={{ color: "white" }}>The best plants for you</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
              Plants
            </a>
          </div>
          <div>
            <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>

                {getTotalItems() > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "10px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "4px 8px",
                      fontSize: "16px",
                    }}
                  >
                    {getTotalItems()}
                  </span>
                )}
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        plantsArray.map((category, index) => (
          <div className="product-grid">
            <h1 style={{ marginTop: 40, marginBottom: 20 }}>
              {category.category}
            </h1>
            <div key={index} className="product-list">
              {plantsArray[index].plants.map((plant, indexPlant) => (
                <div key={index + indexPlant} className="product-card">
                  <div className="product-title">{plant.name}</div>
                  <div className="product-image">
                    <img src={plant.img} alt={plant.name} />
                  </div>
                  <div className="product-price">{plant.cost}</div>
                  <div style={{ margin: 10 }}>
                    <i>{plant.description}</i>
                  </div>
                  <button
                    className={`product-button ${
                      inCart(plant) ? "added-to-cart" : ""
                    }`}
                    disabled={inCart(plant)}
                    onClick={() => addToCart(plant)}
                  >
                    {inCart(plant) ? (
                      <p>Added to Cart</p>
                    ) : (
                      <p>Add to Cart</p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
