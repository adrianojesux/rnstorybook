import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

/**
 * BUTTON PROPS
 */
interface ButtonProps {
  /**
   * Titulo do botão
   */
  title: string;
  /**
   * Callback para evento de tap no botão
   */
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'darkorange',
    width: '90%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
  },
});

export default Button;
