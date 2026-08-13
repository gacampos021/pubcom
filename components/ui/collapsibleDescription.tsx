import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function CollapsibleDescription({ description }: { description: string }){
  const [isOpen, setIsOpen] = useState(false)

  return(
    <Pressable onPress={() => setIsOpen(!isOpen)}>
      {isOpen ? <Text style={styles.description}>{description}</Text>
      : <Text style={styles.description} numberOfLines={5}>{description}</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 12,
    marginBottom: 8,
    fontSize: 16
  },
});
