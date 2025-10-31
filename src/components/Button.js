
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Button = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF984F',
    width: width * 0.9,
    alignSelf: 'center',
    paddingVertical: width * 0.030,
    borderRadius: width * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.05,
        marginBottom: width * 0.02,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    // fontSize: width * 0.045,
  },
  disabledButton: {
    backgroundColor: '#FF984F',
  },
});

export default Button;
