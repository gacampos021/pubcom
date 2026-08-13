import { Text } from "@react-navigation/elements";
import { View } from "react-native";

export default function TabTwoScreen() {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ textAlign: 'center' }}> - modo dark </Text>
    <Text style={{ textAlign: 'center' }}> - filtros </Text>
    <Text style={{ textAlign: 'center' }}> - filtros do lado da api</Text>
    <Text style={{ textAlign: 'center' }}> - limpar description no banco </Text>
    <Text style={{ textAlign: 'center', fontSize:20 }}> - design !!! </Text>
  </View>
  );
}
