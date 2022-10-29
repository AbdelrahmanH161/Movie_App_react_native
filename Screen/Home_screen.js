import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getmovies } from '../Redux/Slices/moive_slice'
import { Entypo , MaterialIcons} from '@expo/vector-icons';
import { addfavmovie } from '../Redux/Slices/fav_slice'

const Home_screen = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getmovies())
    },[])
    const movielist = useSelector((state)=>state.moive_slice.movielist);
    // console.log(movielist);
    const favlist = useSelector((state)=>state.fav_slice.favmovielist)
    function isfav (id){
        const i = favlist.findIndex((x) => x.id === id)
        if(i < 0){
            return true
        }else{
            return false
        }
    }
    function add(item){
        dispatch(addfavmovie(item));
    };
    return (
        <View>
            <FlatList
            numColumns={2}
            data={movielist}
            keyExtractor={(item,index)=>index}
            renderItem={({item})=><View style={styles.card}>
        <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={{width:150,height:200,}}/>
        <Text style={{marginTop:10,}}>{item.title}</Text>
            <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:10}}>
                <Text>Rate: {item.vote_average}</Text>
                {isfav(item.id)? <TouchableOpacity onPress={()=>add(item)}><MaterialIcons name="favorite-border" size={24} color="red" /></TouchableOpacity> : <MaterialIcons name="favorite" size={24} color="red" />}
            </View>
        </View>}
            />
        </View>
    )
}

export default Home_screen

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