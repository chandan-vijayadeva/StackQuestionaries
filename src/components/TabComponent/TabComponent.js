import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './TabStyles';
import {STRING_CONSTANTS} from '../../constants/StringConstants';

const TabComponent = ({onClik}) => {
  return (
    <>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={() => onClik('react')}>
          <Text style={styles.buttonText}>{STRING_CONSTANTS.REACT}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onClik('react-native')}>
          <Text style={styles.buttonText}>{STRING_CONSTANTS.REACTNATIVE}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onClik('node');
          }}>
          <Text style={styles.buttonText}>{STRING_CONSTANTS.REACT}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TabComponent;
