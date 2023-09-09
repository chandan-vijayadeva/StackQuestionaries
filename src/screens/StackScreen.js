/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, Linking} from 'react-native';
import styles from './StackStyle';
import {getStackDetails} from '../services/stackDetailsService';
import {STRING_CONSTANTS} from '../constants/StringConstants';
import TabComponent from '../components/TabComponent/TabComponent';

const Item = ({title, link}) => (
  <TouchableOpacity style={styles.item} onPress={() => openWeb(link)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const openWeb = url => {
  Linking.openURL(url);
};

const StackScreen = () => {
  const [questionList, setQuestionList] = useState([]);
  const [pageSize, setPageSize] = useState(30);
  const [selectedTab, setSelectedTab] = useState('react');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const {data} = await getStackDetails(pageSize, selectedTab);
    setQuestionList(data?.items);
  };

  const getQuestionsbasedOnTag = (tag = 'react') => {
    setSelectedTab(tag);
    setPageSize(30);
    getData();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{STRING_CONSTANTS.HEADER_TEXT}</Text>
      <FlatList
        data={questionList}
        renderItem={({item}) => <Item title={item.title} link={item.link} />}
        keyExtractor={item => item.question_id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setPageSize(pageSize + 20);
          getData();
        }}
      />
      <TabComponent onClik={tag => getQuestionsbasedOnTag(tag)} />
    </View>
  );
};

export default StackScreen;
