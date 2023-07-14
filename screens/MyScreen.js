import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ApplicationScreen from './ApplicationScreen';

function MyScreen() {
  const [serverResponses, setServerResponses] = useState([]);

  const handleMyScreenResponse = (response) => {
    setServerResponses(prevResponses => [...prevResponses, response]);
  };

  return (
    <View style={styles.container}>
     <ApplicationScreen onMyScreenResponse={handleMyScreenResponse} />

      <View style={styles.tableContainer}>
        <Text style={styles.tableHeader}>-------신청 내역-------</Text>
        <FlatList
          data={serverResponses}
          renderItem={({ item }) => (
            <Text>{item.message}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  tableHeader: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MyScreen;
