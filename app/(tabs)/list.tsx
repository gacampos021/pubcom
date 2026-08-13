import getAllPubComAPI from '@/api/public-cosultations';
import CardList from '@/components/card-list';
import { Text } from '@react-navigation/elements';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function ListPage() {
  const [data, setData] = useState<LocalResponseType | null>(null);

  interface LocalResponseType {
    total: number;
    results: any[];
  }

  useEffect(() => {
    getAllPubComAPI()
      .then(res => {
        setData(res?.data);
        console.log('data', data)
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  }, []);

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>Consultas Publicas</Text>
      </View>
      <FlatList
        data={data?.results ?? []}
        renderItem={({ item }) => <CardList item={item} />}        
        keyExtractor={item => item._id}
        ListEmptyComponent={<Text>Carregando...</Text>}
        style={{backgroundColor: '#5B5B5B'}}
        />
    </>
  );
} 

const styles = StyleSheet.create({
  view: {
    height: 100,
    overflow: 'hidden',
    backgroundColor: 'gray', 
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  text: {
    color: '#333',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold'
  }
})
