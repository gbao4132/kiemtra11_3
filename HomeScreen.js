import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/profile_pic.png')} 
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Hello</Text>
          <Text style={styles.headerSubtitle}>Christie Doe</Text>
        </View>
      </View>

      {/* Insights Section */}
      <View style={styles.insightsContainer}>
        <Text style={styles.sectionTitle}>Your Insights</Text>

        {/* Insight Cards */}
        <View style={styles.insightRow}>
          <View style={styles.insightCardWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
              <InsightCard icon="scan" title="Scan new" value="Scanned 483" />
            </TouchableOpacity>
          </View>
          <View style={styles.insightCardWrapper}>
            <InsightCard icon="alert-circle" title="Counterfeits" value="Counterfeited 32" />
          </View>
        </View>
        <View style={styles.insightRow}>
          <View style={styles.insightCardWrapper}>
            <InsightCard icon="checkmark-circle" title="Success" value="Checkouts 8" />
          </View>
          <View style={styles.insightCardWrapper}>
            <InsightCard icon="time" title="Directory" value="History 26" />
          </View>
        </View>
      </View>

      {/* Explore More Section */}
      <View style={styles.exploreContainer}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Scan')}
        >
          <Text style={styles.exploreButtonText}>Go to Scan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Reusable Insight Card Component
const InsightCard = ({ icon, title, value }) => {
  return (
    <View style={styles.insightCard}>
      <Icon name={icon} size={24} color="#000" />
      <Text style={styles.insightTitle}>{title}</Text>
      <Text style={styles.insightValue}>{value}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row', // Hiển thị ảnh và văn bản trên cùng một hàng
    alignItems: 'center', // Căn giữa theo chiều dọc
    marginBottom: 24,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Bo tròn ảnh
    marginRight: 16, // Khoảng cách giữa ảnh và văn bản
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#666',
  },
  insightsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  insightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  insightCardWrapper: {
    width: '48%',
  },
  insightCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
  },
  insightValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  exploreContainer: {
    marginBottom: 24,
  },
  exploreButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default HomeScreen;