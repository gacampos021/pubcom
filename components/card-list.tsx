import { Text } from "@react-navigation/elements";
import { Image, StyleSheet, View } from "react-native";
import { ExternalLink } from "./external-link";
import CollapsibleDescription from "./ui/collapsibleDescription";
import CollapsibleTitle from "./ui/collapsibleTitle";

 export default function CardList({ item }: { item: any }){
  console.log(`https://brasilparticipativo.presidencia.gov.br${item?.heroImage}`)
   return( 
   <View style={styles.view}>
      <Image style={styles.image} resizeMode="cover" source={{ uri: `https://brasilparticipativo.presidencia.gov.br/${item?.heroImage}`}}/>
      <CollapsibleTitle title={item.title.translation}/>
      <View style={styles.text}>
        <View style={{flexDirection: 'row', gap: 30, alignItems: 'center'}}>
          <Text>De {item.startDate} à {item.endDate}</Text>
          <ExternalLink 
            style={{color: 'black', backgroundColor: '#FFF', padding: 4, borderRadius: 20}} 
            href={`https://brasilparticipativo.presidencia.gov.br/processes/${item.slug}`}>Mais informações</ExternalLink>
        </View>
        <Text>Descrição: </Text>
        <CollapsibleDescription description={item.description.translation}></CollapsibleDescription>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginTop: 12,  
    marginHorizontal: 16,  
    backgroundColor: "darkslategrey", 
    opacity: 0.7,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '95%',
    height: 180,
    margin: 10,
    marginBottom: 0,
    alignSelf: 'center',
    borderRadius: 10
  },
  text: {
    marginLeft: 6,
    marginBottom: 4,
    fontSize: 12,
    fontWeight: 'bold'
  }
})