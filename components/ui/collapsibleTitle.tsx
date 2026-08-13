import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function CollapsibleTitle({ title }: { title: string }){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <Pressable onPress={() => setIsOpen(!isOpen)}>
      {isOpen ? <Text style={styles.title}>{title}</Text>
      : <Text style={styles.title} numberOfLines={1}>{title}</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  title: {
    margin: 8,
    borderBottomWidth: .5,
    borderBottomColor: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
});
