import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import p from '@/data/products.json'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { router } from 'expo-router';
import { setSelectedProd } from '@/store/productsSlice';



const HomeScreen = () => {
    const products = useSelector((state: RootState) => state.products.products)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
      

            <FlatList
                data={products}
                renderItem={({ item }) => (<Pressable
                    onPress={() => {
                        dispatch(setSelectedProd(item.id))
                        router.push('/item-details')}
                    }
                    style={{ flex: 1, aspectRatio: 1 ,borderWidth:1}} >
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={{ flex: 1, aspectRatio: 1 }}
                    />
                </Pressable>)}
                numColumns={2}
                columnWrapperStyle={{ gap: 10 }}
                contentContainerStyle={{ gap: 10 }}
            />

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});
