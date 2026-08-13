import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import { ExternalLink } from "./external-link";
import { Collapsible } from "./ui/collapsible";
import CollapsibleTitle from "./ui/collapsibleTitle";

 export default function CardList({ item }: { item: any }){
   return( 
   <View style={{ 
      marginTop: 12,  
      marginHorizontal: 16,  
      backgroundColor: "darkslategrey", 
      opacity: 0.7
      
    }}>
      <CollapsibleTitle title={item.title.translation}/>
      <Text>De {item.startDate} à {item.endDate}</Text>
      <Collapsible title='Veja mais'>
        <Text>{item.description.translation}</Text>
        <ExternalLink style={{color: 'white'}} href={`https://brasilparticipativo.presidencia.gov.br/processes/${item.slug}`}>Ver no site</ExternalLink>
      </Collapsible>
    </View>
  )
}