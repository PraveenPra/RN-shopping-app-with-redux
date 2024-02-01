import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, useWindowDimensions, ScrollView, Pressable } from 'react-native';
import p from '@/data/products.json'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addToCart } from '@/store/cartSlice';
interface ItemDetailsProps { }


const ItemDetails = (props: ItemDetailsProps) => {
    const { width } = useWindowDimensions()
    const selProd = useSelector((state: RootState) => state.products.selectedProd)
    const productsImgs = useSelector((state: RootState) => state.products.productImgs)

    const dispatch = useDispatch()

    
    return (
        <View style={styles.container}>
            <ScrollView >
                <FlatList
                    data={selProd?.images}
                    horizontal={true}
                    renderItem={({ item }) => <Image
                        source={{ uri: item }}
                        style={{ width, aspectRatio: 1 }}
                    />}
                //   numColumns={2}
                //   columnWrapperStyle={{gap:10}}
                //   contentContainerStyle={{gap:10}}

                />


                <View style={{
                    padding: 10,
                    gap:10
                }}>
                    <Text style={{
                        fontFamily: 'SpaceMono',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>{selProd?.title}</Text>
                    <Text style={{
                        // fontFamily:'SpaceMono',
                        fontSize: 20
                    }}>${selProd?.price}</Text>
                    <Text style={{fontSize:16}}>{selProd?.description}</Text>

                </View>

            </ScrollView>

            <Pressable style={{
                backgroundColor:'yellow',
                paddingVertical:10,
                width:'90%',
                alignSelf:'center',
                borderRadius:20,
                position:'absolute',
                bottom:30,
                
            }}
            onPress={()=>dispatch(addToCart(selProd))}>
                <Text style={{fontWeight:600,textAlign:'center'}}>Add to Cart</Text>
            </Pressable>
        </View>
    );
};

export default ItemDetails;

const styles = StyleSheet.create({
    container: {
        //    padding:10
        position:'relative',
        flex:1
    }

});
