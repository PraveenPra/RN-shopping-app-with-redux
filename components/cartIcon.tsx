
import { numbOfCartItems } from '@/store/cartSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface CartIconProps {}

const CartIcon = (props: CartIconProps) => {
    const cartQuantity = useSelector(numbOfCartItems)
  return ( <Link href={'/cart'}>
    <View style={styles.container}>
    
  <FontAwesome5 name="shopping-cart"  style={{marginRight:20,}} size={20} color="blue"/>

{cartQuantity > 0 && <View style={styles.badge}>
<Text style={{color:'blue',fontSize:12,fontWeight:'bold'}}>{cartQuantity}</Text>
</View>}
    </View>
    </Link>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  container: {
    position:'relative',
  },
  badge:{
    position:'absolute',
    top:-10,
    right:10,
    backgroundColor:'yellow',
    width:20,
    height:20,
    borderRadius:50,
    borderColor:'white',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center',
    
}
});
