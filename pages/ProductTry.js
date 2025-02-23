// import React, { useState, useEffect } from 'react';
// import ProductService from '../services/ProductService';


// const ProductTry = () => {
//     const [selectedCategoryId, setSelectedCategoryId] = useState('');
//     const [products, setProducts] = useState([]);
  
//     useEffect(() => {
//       if (selectedCategoryId) {
//         // Fetch products based on selected category ID
//         // useEffect(() => {
//             ProductService.getByCategory(selectedCategoryId).then((res) => {
//                 console.log(res.data);
//                 setProducts(res.data)
    
//             }).catch((error) => {
//                 console.log(error);
//             });
    
//         // },[]);
//      }
//     },[selectedCategoryId]);
  
//     const handleCategoryChange = (event) => {
//       setSelectedCategoryId(event.target.value);
//     };
  
//     return (
//       <div>
//         <h2>Product List</h2>
//         <label htmlFor="category">Select a category:</label>
//         <select id="category" value={selectedCategoryId} onChange={handleCategoryChange}>
//           <option value="">-- Select a category --</option>
//           <option value="1">Category 1</option>
//           <option value="2">Category 2</option>
//           <option value="3">Category 3</option>
//           {/* Add more options as needed */}
//         </select>
//         {products.length > 0 ? (
//           <ul>
//             {products.map((product) => (
//               <li key={product.id}>{product.name}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No products found for the selected category.</p>
//         )}
//       </div>
//     );
// };

// export default ProductTry;



//----------------------------------------------------------------------------------------------------
{/* <div>
      <div>
        <h2>Product List</h2>
        <label htmlFor="category">Select a category:</label>
        <select id="category" value={selectedCategoryId} onChange={handleCategoryChange}>
          <option value="">-- Select a category --</option>
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option> */}
          {/* Add more options as needed */}
        // </select>
        // {products.length > 0 ? (
        //   <ul>
        //     {products.map((product) => (
        //       <li key={product.id}>{product.name}</li>
        //     ))}
        //   </ul>
        // ) : (
        //   <p>No products found for the selected category.</p>
        // )}
    //   </div>
    //   </div>
      