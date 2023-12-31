import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../../data/products";
import styles from './Products.style'
import { Header , SearchInput } from '../../components'

const Products = ({ category }) => {
  const [arrProducts, setArrProducts] = useState([]);

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      )
      const productsFiltered = products.filter(products => 
        products.title.includes(keyword)
      )
      setArrProducts(productsFiltered)
    } else {
        setArrProducts(productsFiltered)
    }
  }, [category,keyword]);

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword}/>
      <View style={styles.listContainer}>
        <FlatList 
        data={arrProducts}
        renderItem={({item})=> (
            <View>
                <Text>{item.title}</Text>
            </View>
        )}
        keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Products;

