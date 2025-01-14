import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import NotFound from "../components/NotFound";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetctProducts, products } = useProductStore();
  useEffect(() => {
    fetctProducts();
  }, [fetctProducts]);
  console.log("productssss", products);
  

  return (
    <Container maxW={"container.lg"} py={10}>
      {products.length === 0 && <NotFound />}

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} w={"full"} spacing={10}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default HomePage;
