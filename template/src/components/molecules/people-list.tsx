import React from 'react';

import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Query} from '@lib/react-query/query-hooks';
import {IStarWars} from '@models/API';
import {NavigationRoot} from '@router/navigation-helper';
import {Route} from '@router/route-name';

interface PeopleListProps {}

const PeopleList: React.FC<PeopleListProps> = () => {
  const {data} = Query.starWars.usePeopleList();

  const renderItem: ListRenderItem<IStarWars.People.Item> = React.useCallback(
    ({item}) => (
      <TouchableOpacity onPress={() => NavigationRoot.navigate(Route.DETAIL, {name: item.name})}>
        <View key={item.url} style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList data={data?.results} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  text: {color: 'black'},
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export {PeopleList};
