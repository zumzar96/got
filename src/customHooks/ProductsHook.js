import { useEffect, useState } from "react";

const useProduct = (productData) => {
  const [products, setProducs] = useState([]);

  useEffect(() => {
    const loadedProducts = [];

    for (const key in productData) {
      loadedProducts.push({
        id: key,
        price: productData[key].cena,
        image: productData[key].image,
      });
    }

    setProducs(loadedProducts);
  },[productData]);
  return [products];
};

export default useProduct;
