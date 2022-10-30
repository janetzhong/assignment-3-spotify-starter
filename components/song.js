import { StyleSheet, View, Text , Pressable, Image} from "react-native";
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";

const Song = ({item, index}) => {
    console.log(item.album.images[2])
    return(
        <View style={styles.listContainer}> 
        {/* index */}
        <Text style={styles.indexText} numberOfLines={1}>{index} </Text>
        {/* Album Image */}
        <Image style={styles.albumPic} source={{ uri: item.album.images[0].url }} />
        <View style={styles.nameContainer}> 
        {/* Song name */}
        <Text style={styles.songnameText} numberOfLines={1}>{item.name}</Text>
        {/* Artist name */}
        <Text style={styles.artistnameText} numberOfLines={1}>{item.artists[0].name}</Text>
        </View>
        {/* Album name */}
        <Text style={styles.albumnameText} numberOfLines={1}>{item.album.name}</Text>
        {/* Duration */}
        <Text style={styles.durationText} numberOfLines={1}>{millisToMinutesAndSeconds(item.duration_ms)}</Text>
        </View>
    )
}

export default Song

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: Themes.colors.background,
        flex: 1,
        flexDirection:'row',
      },
      albumPic: {
        height: 55,
        width: 55,
        margin: 8,
    },
      indexText: {
        color: "gray",
        margin: 5,
        width: 25
      },
      nameContainer: {
        backgroundColor: Themes.colors.background,
        flexDirection:'column',
        width: 140
      },
      songnameText: {
        color: "white",
        margin: 5,
      },
      artistnameText: {
        color: "gray",
        margin: 5,
      },
      albumnameText: {
        color: "white",
        margin: 5,
        width: 70
      },

    durationText: {
        color: "white",
        margin: 5,
        width: 30
      },
  });
  
