import React, { useState } from 'react';
import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles';


const UnlockPremiumFeatures = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');


  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Unlock Premium{'\n'}Features</Text>
      <Text style={styles.subtitle}>
        More posters. No ads. Endless inspiration!{'\n'}Your creative upgrade starts here! 🚀
      </Text>


      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            selectedPlan === 'monthly' && styles.activeBtn,
          ]}
          onPress={() => setSelectedPlan('monthly')}>


  <Text
            style={[
              styles.toggleText,
              selectedPlan === 'monthly' && styles.activeText,
            ]}>
            Monthly Plans
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleBtn,
            selectedPlan === 'yearly' && styles.activeBtn,
          ]}
          onPress={() => setSelectedPlan('yearly')}>
          <Text
            style={[
              styles.toggleText,
              selectedPlan === 'yearly' && styles.activeText,
            ]}>
            Yearly Plans
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.planTitle}>⚡ Basic Plan</Text>
        <Text style={styles.planPrice}>$10<Text style={styles.planUnit}>/mth</Text></Text>
        <Text style={styles.planSub}>Billed Monthly</Text>

        <View style={styles.features}>
          <Text style={styles.feature}>✅ Unlimited downloads</Text>
          <Text style={styles.feature}>❌ Premium-only designs</Text>
          <Text style={styles.feature}>✅ No ads</Text>
          <Text style={styles.feature}>❌ Early access to new content</Text>
          <Text style={styles.feature}>✅ Faster experience</Text>
          <Text style={styles.feature}>❌ Exclusive perks & rewards</Text>
        </View>

        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UnlockPremiumFeatures;
