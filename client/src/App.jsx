import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then(function (res) {
      setProducts(res.data.data);
    });
  }, []);

  console.log(products);

  return (
    <ul className='px-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
    {products.map(product => (
        <h1 key={product.id}>{product.title}</h1>
    ))}
    </ul>
  );
}

export default App;
