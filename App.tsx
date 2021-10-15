/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';


const App = () => {
  
  const URL = `https://trips.yakko.io/`
  const API_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUUklQX1NFUlZFUiIsImF1ZCI6IlRIRV9BVURJRU5DRSIsImlhdCI6MTYzMjQ3MTg4NiwibmJmIjoxNjMyNDcxODk2LCJleHAiOjE2NjQwMDc4ODYsImRhdGEiOnsiYXBpX25hbWUiOiJtb2JpIGhvdGVsIGFwaSIsImFwaV9yZWFtcmsiOm51bGwsImFwaV9jcmVhdGVfZGF0ZSI6IjIwMjEtMDktMjQgMTU6MjQ6NDYiLCJhcGlfZXhwaXJlX2RhdGUiOiIyMDIyLTA5LTI0IiwiY29tcGFueV9pZCI6IjMiLCJjb21wYW55IjoiRmlzaGVybWFuIGhvdGVsIHBodWtldCJ9fQ.4qQoG63oA98818rsqqAbWkhIca2WiDXGyqvRi5tXyxQ"
  const fetchData = async ()=>{
    let test = new FormData()
    test.append("page", "productlist")
      axios({
        method: 'POST',
        url: URL,
        data: test,
        headers:{
            Authorization: `Bearer ${API_key}`,
            "Content-Type": "application/x-www-form-urlencoded"

        }
      })
      .then((response)=> console.log(response.data))
      .catch(error => console.log(error))
  }

  return (
    <View style={{flex: 1, justifyContent: 'center',
     alignItems: 'center'}}>
       {console.log('Test')}
       <TouchableOpacity
        onPress={()=> fetchData() }
       >
          <Text>
            Fetch
          </Text>

        </TouchableOpacity>

    </View>
  );
};


export default App;
