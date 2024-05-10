// import React, { useState } from 'react';

// const ItemsPage = ({ items }) => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = ['All', ...new Set(items.map(item => item.category))];

//   const filteredItems = items.filter(item => {
//     return (
//       (selectedCategory === 'All' || item.category === selectedCategory) &&
//       (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//   });

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Items List</h1>
//       <div>
//         <div>
//           {categories.map((category, index) => (
//             <button key={index} onClick={() => handleCategoryChange(category)}>
//               {category}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Search items..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         {filteredItems.map((item, index) => (
//           <div key={index}>
//             <h2>{item.name}</h2>
//             <p><strong>Description:</strong> {item.desc}</p>
//             <p><strong>Price:</strong> ${item.price}</p>
//             <p><strong>Category:</strong> {item.category}</p>
//             {item.recommended && <p><strong>Recommended</strong></p>}
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemsPage;


// import React, { useState } from "react";
// import "../styles/home.css";
// import Search from "../Components/Search";
// import Tabs from "../Components/Tabs";
// import { menuData } from "../data/menuData";
// import { FaPlusCircle } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import "../styles/search.css";

// const Home = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = ['All', ...new set(menuData.map(item => item.category))];

//   const MenuData = items.filter(item => {
    
//     return(
//       (selectedCategory === 'All' || item.category === selectedCategory) &&
//       (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     );
//   });


//   const handleCategoryChange = (category) =>{
//     setSelectedCategory(category)
//   }

//   const handleSearchChange = (event) =>{
//     setSearchTerm(event.target.value);
//   }

//   return (
//     <div className="home-container">
//       <div className="menu">
//         <h1>Menu</h1>
//       </div>
//     <div>
//     <Tabs  />
//     <Search/>
//     {categories.map((category, index) =>(
//       <button key={index} onClick={() => handleCategoryChange(category)}>
//       {category}
//       </button>
//     ))}
//     </div>
    
//       <div className="input-control">
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <FontAwesomeIcon icon={faSearch} className="icon" />
//       </div>


//       {
//         // <Search />
//       }
//       {/* items list*/}
//       <div className="home-content">
//         {menuData.map((item, i) => (
//           <div key={i} className="contents">
//             <div className="home-content_img">
//               <img src={item.image} alt={item.title} className="itemImg" />
//             </div>
//             <div className="home-content-desc">
//               {item.recomm && <span>Recommended </span>}
//               <h4>{item.title}</h4>
//               <p>{item.desc}</p>
//               <div className="price-btn">
//                 <p>{item.price}</p>
//                 <button>
//                   <FaPlusCircle className="icon" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
