import { RootState } from '@/store';
import { changeAmt } from '@/store/cartSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



const Cart = () => {
    const products = useSelector((state: RootState) => state.cart.products)
    const total = useSelector((state: RootState) => state.cart.total)

    const dispatch = useDispatch()
    console.log(products);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                contentContainerStyle={{padding:10,gap:10}}
                renderItem={({ item }) => (<View style={{backgroundColor:'#ffffee',
                paddingHorizontal:10,
                paddingVertical:5,
                gap:14,
                alignItems:'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row'
                }}>
                    <Image
                        source={{ uri: item?.product?.thumbnail }}
                        style={{ width: 50, height: 50,borderWidth:1 }}
                    />
                    <View style={{
                        flex: 1,
                        gap:10
                    }}>
                        <Text style={{fontWeight:500,fontSize:18}}>{item?.product.title}</Text>

                        <Text style={{fontWeight:400,fontSize:16}}>${item?.product.price}</Text>

                        <View style={{flexDirection:'row',gap:6,alignItems:'center'}}>
                        

                        <Pressable 
                        onPress={()=>dispatch(changeAmt({pid:item?.product.id,amt:-1}))}
                        style={{aspectRatio:1,alignItems: 'center',justifyContent:'center',
                        // borderWidth:1,
                        borderRadius:50,
                        backgroundColor:'red',
                        
                        width:20}}>
                            <FontAwesome5 name="minus" color="white" size={10}/>
                        </Pressable>
                        <Text style={{fontSize:18}}>{item?.quantity}</Text>
                        
                        <Pressable
                         onPress={()=>dispatch(changeAmt({pid:item?.product.id,amt:1}))}  style={{height:20,alignItems: 'center',justifyContent:'center',
                         // borderWidth:1,
                         borderRadius:50,
                         backgroundColor:'green',
                         
                         width:20}}>
                            <FontAwesome5 name="plus" size={10} color='white'/>
                        </Pressable>
                        <Text>Quantity</Text>
                        </View>
                    </View>

                    <Text>${item?.product.price * item?.quantity}</Text>
                    
                </View>)}
            />

            <View style={{borderTopWidth:1,margin:10,flexDirection:'row',justifyContent:'space-around',
        paddingVertical:10}}>
            <Text style={{fontSize:20,fontWeight:600}}>Total</Text>
            <Text style={{fontSize:20,fontWeight:600}}>${total}</Text>
            </View>
          

        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {}
});
