import { RootState } from '@/store';
import { changeAmt, deliveryFee, subTotal } from '@/store/cartSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';



const Cart = () => {
    const products = useSelector((state: RootState) => state.cart.products)
    const subtotal = useSelector(subTotal)
    const deliveryfee = useSelector(deliveryFee)

    const dispatch = useDispatch()

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

            <View style={{borderTopWidth:1,marginHorizontal:10,flexDirection:'row',justifyContent:'space-between',
      }}>
            <Text style={{fontSize:20,fontWeight:600}}>Total</Text>
            <Text style={{fontSize:20,fontWeight:600}}>${subtotal}</Text>
            </View>

            <View style={{margin:10,flexDirection:'row',justifyContent:'space-between',
   }}>
            <Text style={{fontSize:16,fontWeight:500}}>Delivery charges</Text>
            <Text style={{fontSize:16,fontWeight:500}}>${deliveryfee}</Text>
            </View>

            <View style={{margin:4,flexDirection:'row',justifyContent:'space-between',
       }}>
            <Text style={{fontSize:20,fontWeight:900}}>Grand Total</Text>
            <Text style={{fontSize:24,fontWeight:900}}>${subtotal + deliveryfee}</Text>
            </View>
          

        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {}
});
