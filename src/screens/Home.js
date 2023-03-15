import { StyleSheet, Text, TextInput, View, FlatList, SafeAreaView, Modal, TouchableOpacity, VirtualizedList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Home = ({ navigation }) => {

  const [data, setData] = useState()
  const [isRender, setIsRender] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputText, setInputText] = useState()
  const [id, setId] = useState()
  const [address, setAddress] = useState()
  const [date, setDate] = useState()
  const [course, setCourse] = useState()

  
  const [editItem, setEditItem] = useState()
 

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const loadData = () => {
    fetch('http://192.168.70.232:3000/api/v1/student')
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    loadData();
  }, []);


  const deleteData = () => {
    fetch('http://192.168.70.232:3000/api/v1/student/:id', {
      method: 'DELETE',
    });
  }


  const onPressItem = (item) => {
    setIsModalVisible(true);
    setInputText(item.name)
    setAddress(item.address)
    setCourse(item.course)
    setDate(item.registered_date)
    

    setEditItem(item.std_id)
  }


  const renderItem = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', gap: 25 }}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => onPressItem(item)}
        >
          <Text style={styles.text} >{item.std_id}{' '}{item.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginVertical: 20 }}
          onPress={() => deleteData()}
        >
        <MaterialIcons name='delete' size={30} color="red" style={{}} />
        </TouchableOpacity>
      </View>
    )
  }

  const handleEditItem = (editItem) => {
    const newData = data.map(item => {
      if (item.std_id == editItem) {
        item.name = inputText
        item.address=address
        item.registered_date=date
        item.course=course
        
        return item;
      }
      return item;
    })
    setData(newData);
    setIsRender(!isRender);
  }

  const onPressSaveEdit = () => {
    handleEditItem(editItem);
    setIsModalVisible(false)

   
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', marginVertical: 20, gap: 20 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ width: '75%' }}
        />
        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center' }}
          onPress={() => navigation.navigate('AddStudent')}
        >
          <Ionicons name='person-add' size={40} color="green" style={{}} />
        </TouchableOpacity>


      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.std_id}
        renderItem={renderItem}
        extraData={isRender}
      />

      <Modal
        animationType='fade'
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >

        <View style={styles.modalView}>
          <Text style={styles.text} >Student Details:</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => setInputText(text)}
            defaultValue={inputText}
            editable={true}
            multiline={false}
            maxLength={200}
          ></TextInput>

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => setAddress(text)}
            defaultValue={address}
            editable={true}
            multiline={false}
            maxLength={200}
          ></TextInput>

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => setCourse(text)}
            defaultValue={course}
            editable={true}
            multiline={false}
            maxLength={200}
          ></TextInput>

         <TextInput
            style={styles.textinput}
            onChangeText={(text) => setDate(text)}
            defaultValue={date}
            editable={true}
            multiline={false}
            maxLength={200}
          ></TextInput>


          
          <TouchableOpacity
            onPress={() => onPressSaveEdit()}
            style={styles.touchableSave}
          >
            <Text style={{ fontWeight: '700', fontSize: 18, color: 'white' }}>Update</Text>
          </TouchableOpacity>
        </View>

      </Modal>



    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginLeft: 10
  },
  item: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    alignItems: 'flex-start',
    width: '75%'

  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 400,
    marginLeft: 10,
    color:'#22223b'
  },

  textinput: {
    width: '90%',
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 15,
    marginBottom:15
  },

  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  touchableSave: {
    backgroundColor: '#AD40AF',
    padding: 12,
    borderRadius: 16,
    marginBottom: 30,
    marginTop: 20,
    alignItems: 'center',
    width: '60%'
  }
})