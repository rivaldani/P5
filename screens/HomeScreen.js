import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
    const items = [
        {
          id: 1,
          title: 'Smartphone A1',
          description: 'High-quality smartphone with amazing features.',
          price: '$699',
          image: 'https://cdnpro.eraspace.com/media/mageplaza/blog/post/s/p/spesifikasi_redmi_a1-primary.jpg', 
        },
        {
          id: 2,
          title: 'Laptop Pro X',
          description: 'Powerful laptop for professionals and gamers.',
          price: '$1,299',
          image: 'https://www.jagatreview.com/wp-content/uploads/2022/09/Lenovo-Yoga-Slim-7i-Pro-X-2.png', 
        },
      
    {
      id: 3,
      title: 'Headphones Z',
      description: 'Noise-canceling headphones with excellent sound quality.',
      price: '$199',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {items.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Content>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Details', { item })}
            >
              View Details
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 8,
  },
});
