import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Entypo , MaterialIcons,Ionicons} from '@expo/vector-icons';
import { removefavmovie } from '../Redux/Slices/fav_slice';
const Fav_screen = () => {
    const favlist = useSelector((state)=>state.fav_slice.favmovielist)
    const dispatch = useDispatch()
    function removefav(id){
        const i = favlist.findIndex((x) => x.id === id)
        dispatch(removefavmovie(i))
    }
  return (
    <View>
        <FlatList
            numColumns={2}
            data={favlist}
            keyExtractor={(item,index)=>index}
            renderItem={({item})=><View style={styles.card}>
        <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={{width:150,height:200,}}/>
        <Text style={{marginTop:10,}}>{item.title}</Text>
            <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:10}}>
                <Text>Rate: {item.vote_average}</Text>
                <TouchableOpacity onPress={()=>removefav(item.id)}><Ionicons name="ios-trash-bin" size={24} color="red" /></TouchableOpacity>
            </View>
        </View>}
            />
    </View>
  )
}

export default Fav_screen

const styles = StyleSheet.create({
    card:
    { 
      width:175,
      height:300,
      backgroundColor:'white',
      margin:5,
      marginVertical:10,
      borderRadius:30,
      padding:10,
    },
})