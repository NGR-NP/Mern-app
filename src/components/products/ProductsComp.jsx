import { useGetProductsQuery } from "../../redux/products/productApiSlice";
import Products from "../../components/products/Product";
import LoadingComp from "../../components/loading/LoadingComp";
import styled from "styled-components";
import NoResponse from "../../components/server/NoResponse";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterProduct from "../../components/filter/FilterProduct";

const Section = styled.section`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  background: linear-gradient(5deg, rgb(206 243 255) 0%, rgb(254 218 255) 100%);
  user-select: none;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
  border-radius: 8px;
  @media screen and (max-width: 490px) {
    padding: 0;
  }
  @media screen and (max-width: 750px) {
    padding: 20;
  }
  @media screen and (min-width: 1400px) {
    padding: 9vmin;
  }
`;
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
  border-radius: calc(20px + 8px);
  @media screen and (max-width: 450px) {
    padding: 0;
  }
`;
const Main = styled.div`
  max-width: 1487px;
  width: 100%;
  padding: 3vmin;
  margin: auto;
  background: #ffffff54;
  border-radius: calc(20px + 8px);
  @media screen and (max-width: 400px) {
    padding: 2rem 0;
  }
`;

const Title = styled.h3`
  width: fit-content;
  margin: 19px auto 32px;
  text-align: center;
  font-size: 41px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px 0px;
  border-radius: 20px;
  font-family: var(--font6);
  background-image: linear-gradient(90deg, rgb(0 178 255), #ff00b0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 10px 22px;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const ProductsComp = () => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterMsg, setFilterMsg] = useState("");

  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const catg = location.pathname.split("/")[2];
  const decodedString = decodeURIComponent(catg);
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery({
    catg,
  });

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    products &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    if (filters.color && filters.size) {
      setFilterMsg(
        `Sorry, the ${filters.color.toUpperCase()} color in ${filters.size.toUpperCase()} size product is currently out of Stock, but we have other great options in different colors and sizes that you might be interested in.`
      );
    } else if (filters.size) {
      setFilterMsg(
        `Sorry, the ${filters.size.toUpperCase()} size is currently out of Stock, but we hope to have it back soon!`
      );
    } else if (filters.color) {
      setFilterMsg(
        `Sorry, the ${filters.color.toUpperCase()} color product is currently out of Stock, but we have other great colors in Stock that you might like!`
      );
    }

    // const FMsg = "product is currently not available in our store. but we have other color and size"
    // if (filters.color) {
    //   setFilterMsg(
    //     `${filters.color} color ${FMsg}`
    //   );
    // } else if (filters.size) {
    //   setFilterMsg(
    //     `${filters.size} size ${FMsg}`
    //   );
    // }
  }, [products, catg, filters]);

  let displayCatg;
  if (decodedString === "undefined") {
    displayCatg = "Clothes";
  } else {
    displayCatg = decodedString;
  }

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct((prev) =>
        [...prev].sort((t, z) => new Date(z.createdAt) - new Date(t.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProduct((prev) => [...prev].sort((t, z) => t.price - z.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((t, z) => z.price - t.price));
    }
  }, [sort]);

  const message = error?.data?.message || "server s not responding";

  let content;
  if (isLoading) {
    content = (
      <Container>
        <LoadingComp />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        <Container>
          {filteredProduct.length === 0 ? (
            <p style={{ margin: "auto", padding: "10px 24px" }}>{filterMsg}</p>
          ) : (
            filteredProduct.map((product) => (
              <Products product={product} key={product?._id} />
            ))
          )}
        </Container>
      </>
    );
  } else if (isError) {
    content = <NoResponse message={message} />;
  }
  return (
    <Section>
      <Main>
        <Title>{displayCatg}</Title>
        <FilterProduct
          products={products}
          sort={sort}
          setSort={setSort}
          setFilters={setFilters}
          handleFilter={handleFilter}
        />
        {content}
      </Main>
    </Section>
  );
};

export default ProductsComp;
