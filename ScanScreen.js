import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.organicText}>100% ORGANIC</Text>
        <Text style={styles.productName}>GOLD PRESSED JUICE</Text>
        <Text style={styles.productOrigin}>NORTHERN BURNS LATINAL EACH</Text>

        {/* Product Image */}
        <Image
          source={require('../assets/juice.png')} 
          style={styles.productImage}
        />

        {/* Product Details */}
        <Text style={styles.productDetails}>Laurens</Text>
        <Text style={styles.productDetails}>Orange Juice</Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  organicText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  productOrigin: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  productDetails: {
    fontSize: 18,
    color: '#000',
    marginBottom: 8,
  },
});

export default ScanScreen;
