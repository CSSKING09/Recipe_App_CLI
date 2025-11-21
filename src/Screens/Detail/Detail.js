import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  StatusBar,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RecipeDetailScreen = ({ navigation, route }) => {
  const { recipe } = route.params || {};

  if (!recipe) {
    return (
      <View style={styles.loadingContainer}>
        {' '}
        <Text>Loading recipe...</Text>{' '}
      </View>
    );
  }

  const {
    title,
    image,
    readyInMinutes,
    servings,
    healthScore,
    extendedIngredients = [],
    instructions,
    analyzedInstructions = [],
  } = recipe;

  // Flatten steps
  let steps = [];
  if (analyzedInstructions.length > 0) {
    steps = analyzedInstructions[0].steps.map(step => step.step);
  } else if (instructions) {
    steps = instructions.split('. ').filter(Boolean);
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Tap anywhere to dismiss keyboard */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {' '}
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Top Image */}{' '}
              <View>
                <Image source={{ uri: image }} style={styles.image} />
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => navigation.goBack()}
                >
                  {' '}
                  <Text style={styles.backText}>←</Text>{' '}
                </TouchableOpacity>{' '}
              </View>
              ```
              {/* Title and Info */}
              <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoEmoji}>⏱</Text>
                    <Text style={styles.infoText}>{readyInMinutes} min</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoEmoji}>👥</Text>
                    <Text style={styles.infoText}>{servings} servings</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoEmoji}>❤️</Text>
                    <Text style={styles.infoText}>Health {healthScore}</Text>
                  </View>
                </View>

                {/* Ingredients Section */}
                <Text style={styles.sectionTitle}>Ingredients</Text>
                <FlatList
                  data={extendedIngredients}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <View style={styles.ingredientCard}>
                      <Text style={styles.ingredientText}>{item.original}</Text>
                    </View>
                  )}
                />

                {/* Steps Section */}
                <Text style={styles.sectionTitle}>Steps</Text>
                {steps.map((step, index) => (
                  <View key={index} style={styles.stepCard}>
                    <View style={styles.stepNumberContainer}>
                      <Text style={styles.stepNumber}>{index + 1}</Text>
                    </View>
                    <Text style={styles.stepText}>{step}</Text>
                  </View>
                ))}

                <View style={{ height: 40 }} />
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefefe' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: {
    width: '100%',
    height: 260,
    borderRadius: 25,
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 15,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 2,
    borderRadius: 30,
  },
  backText: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 7,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoEmoji: {
    fontSize: 18,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 15,
  },
  ingredientCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2, // for Android shadow
  },
  ingredientText: {
    fontSize: 16,
    color: '#333',
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  stepNumberContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  stepNumber: {
    color: '#fff',
    fontWeight: '700',
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default RecipeDetailScreen;
