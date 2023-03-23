import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IconButton, MD3Colors } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-date-picker'


const Home = () => {
  const [student, setStudent] = useState([])
  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dorLabel, setDorLabel] = useState('Date of Registered');
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [studentId, setStudentId] = useState(null)

  

  const getAllStudent = () => {
    fetch('http://192.168.60.232:3000/api/v1/student')
      .then(response => response.json())
      .then(response => setStudent(response))

  }

  useEffect(() => {
    getAllStudent()

  }, [])

  const handleSubmit = () => {
    fetch(`http://192.168.60.232:3000/api/v1/student/`, {
      method: "POST",
      body: JSON.stringify({
        std_id: id,
        name: name,
        address: address,
        registered_date: date,
        course: course,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.json()

    }).then(res => {
      console.log(res)
      getAllStudent();
      setModal(false)
      clearForm()
      

    }).catch(err => {
      console.log(err)
    })
  };

const handleUpdate = () => {
  const id = studentId;
        fetch(`http://192.168.60.232:3000/api/V1/student/${id}`, {
            method: "PUT",
            body: JSON.stringify({
              name: name,
              address: address,
              registered_date: date,
              course: course,
              

            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()

        }).then(res => {
            console.log(res)
            getAllStudent();
            setModalUpdate(false)
            clearForm()
            setId(null)
            
        }).catch(err => {
            console.log(err)
        })
}



  const handleRemove = (item) => {
    const std_id= item.std_id
    fetch(`http://192.168.60.232:3000/api/v1/student/${std_id}`, {
        method: "DELETE",
        body: JSON.stringify({
           
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res.json()

    }).then(res => {
        console.log(res)
        getAllStudent();
    }).catch(err => {
        console.log(err)
    })
}


  




  const handleCreate = () => {
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
  }

  const handleCloseModalUpdate = () => {
    setModalUpdate(false)
  }

  const clearForm = () => {
    setId("")
    setName("")
    setAddress("")
    setDate(new Date())
    setCourse("")
  }
  const handleEdit = (item) =>{
    setStudentId(item.std_id)
    setName(item.name)
    setAddress(item.address)
    setDate(date)
    setOpen(false)
    setDorLabel(date.toDateString())
    setCourse(item.course)
    setModalUpdate(true)
}

  const renderItems = ({ item }) => {
    return <View  style={styles.itemContainer}>
      <View style={{flexDirection:'column',gap:10}}>
        <Text style={{color:'black',fontSize:16}}><Text style={{fontSize:16,fontWeight:'bold',color:"black"}}>Name : </Text>{item.name}</Text>
        <Text style={{color:'black',fontSize:16}}><Text style={{fontSize:16,fontWeight:'bold',color:"black"}}>ID num : </Text>{item.std_id}</Text>
        <Text style={{color:'black',fontSize:16}}><Text style={{fontSize:16,fontWeight:'bold',color:"black"}}>course : </Text>{item.course}</Text>
      </View>

      <View style={{flexDirection:'row',gap:16}}>
        <TouchableOpacity
        onPress={() => handleRemove(item)}
        >
      <MatIcons style={{paddingTop:3}} name="delete" size={25} color="#900" /> 
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleEdit(item)}
      >
      <MatIcons name="account-edit" size={30} color="green" /> 
      </TouchableOpacity>
      </View>

    </View>
  }


  return (
    <SafeAreaView style={styles.wrapper}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modal}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>


              <View style={{ marginBottom: 10, marginLeft:"38%", marginTop: 10, flexDirection:'row' }}>
                <Image style={{ width: 80, height: 80 }} source={require('../assets/images/seller.png')} />
                <TouchableOpacity
              onPress={handleCloseModal}
              style={{marginLeft:80}}
              >
              <FontAwesome name='window-close' size={40} color="#ef233c" style={{ paddingTop: 5, marginRight: 5 }} />
            </TouchableOpacity>
              </View>

              <View style={{ paddingHorizontal: 25 }}>

                <Text style={styles.logintxt}>Add New Student</Text>

                <View style={styles.txtinput}>
                  <FontAwesome name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TextInput
                    placeholder='Student ID number'
                    style={{ flex: 1, paddingVertical: 0 }}
                    value={id}
                    onChangeText={(text) => {
                      setId(text)
                    }}

                  />
                </View>

                <View style={styles.txtinput}>
                  <FontAwesome name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TextInput
                    placeholder='Full Name'
                    style={{ flex: 1, paddingVertical: 0 }}

                    value={name}
                    onChangeText={(text) => {
                      setName(text)
                    }}
                  />
                </View>


                <View style={styles.txtinput}>
                  <Ionicons name='home-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TextInput
                    placeholder='Address'
                    style={{ flex: 1, paddingVertical: 0 }}
                    value={address}
                    onChangeText={(text) => {
                      setAddress(text)
                    }}

                  />
                </View>





                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 30 }}>
                  <Ionicons name='calendar-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={{ color: '#888', marginLeft: 5, marginTop: 5 }}>{dorLabel}</Text>

                  </TouchableOpacity>
                </View>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode={'date'}
                  onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                    setDorLabel(date.toDateString())
                    format='yyyy-MM-dd'

                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />



                <View style={styles.txtinput}>
                  <Ionicons name='book-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TextInput
                    placeholder='Selected Course'
                    style={{ flex: 1, paddingVertical: 0 }}
                    value={course}
                    onChangeText={(text) => {
                      setCourse(text)
                    }}

                  />
                </View>




                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    backgroundColor: '#AD40AF',
                    padding: 10,
                    borderRadius: 16,
                    
                  }}>
                  <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 18, color: 'white' }}>Add Student</Text>
                </TouchableOpacity>

                
              </View>

            </View>
            


          </View>

        </View>

      </Modal>


      <Modal
        animationType="none"
        transparent={true}
        visible={modalUpdate}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.container}>


              <View style={{ marginBottom: 10, marginLeft:'38%', marginTop: 10,flexDirection:'row' }}>
                <Image style={{ width: 80, height: 80 }} source={require('../assets/images/seller.png')} />
                <TouchableOpacity
              onPress={handleCloseModalUpdate}
              style={{marginLeft:80}}
              >
              <FontAwesome name='window-close' size={40} color="#ef233c" style={{ paddingTop: 5, marginRight: 5 }} />
            </TouchableOpacity>
              </View>

              <View style={{ paddingHorizontal: 25, marginTop:20 }}>

                <Text style={styles.logintxt}>Student Full Details</Text>

                {/* <View style={styles.txtinput}>
                  <FontAwesome name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TextInput
                    placeholder='Student ID number'
                    style={{ flex: 1, paddingVertical: 0 }}
                    value={studentId}
                    onChangeText={(text) => {
                      setStudentId(text)
                    }}

                  />
                </View> */}

                <View style={styles.txtinput}>
                  <FontAwesome name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TextInput
                    placeholder='Full Name'
                    style={{ flex: 1, paddingVertical: 0 }}

                    value={name}
                    onChangeText={(text) => {
                      setName(text)
                    }}
                  />
                </View>


                <View style={styles.txtinput}>
                  <Ionicons name='home-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TextInput
                    placeholder='Address'
                    style={{ flex: 1, paddingVertical: 0 }}
                    value={address}
                    onChangeText={(text) => {
                      setAddress(text)
                    }}

                  />
                </View>





                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 30 }}>
                  <Ionicons name='calendar-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={{ color: '#888', marginLeft: 5, marginTop: 5 }}>{dorLabel}</Text>

                  </TouchableOpacity>
                </View>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode={'date'}
                  onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                    setDorLabel(date.toDateString())
                    format='yyyy-MM-dd'

                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />



                <View style={styles.txtinput}>
                  <Ionicons name='book-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                  <TextInput
                    placeholder='Selected Course'
                    style={{ flex: 1, paddingVertical: 0 }}
                    value={course}
                    onChangeText={(text) => {
                      setCourse(text)
                    }}

                  />
                </View>




               <TouchableOpacity
                  onPress={handleUpdate}
                  style={{
                    backgroundColor: '#AD40AF',
                    padding: 10,
                    borderRadius: 16,
                    
                  }}>
                  <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 18, color: 'white' }}>Edit Details</Text>
                </TouchableOpacity>

          
              </View>

            </View>
            


          </View>

        </View>

      </Modal>
      <View style={{backgroundColor:'#F4E3FF',flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Registered Students</Text>
        <IconButton
          style={styles.addBtn}
          icon="plus"
          iconColor={"white"}
          size={30}
          onPress={handleCreate}
        />
      </View>
      <Searchbar
      placeholder="Search"
      style={{backgroundColor:'white',margin:16}}
      value={searchQuery}
    />
      <View style={styles.container}>
        <FlatList
          data={student}
          renderItem={renderItems}
          keyExtractor={(student, index) => student.std_id}
        />
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },
  header: {
    backgroundColor: '#9d4edd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomEndRadius: 16,
    borderBottomLeftRadius: 16
  },

  headerTxt: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
    padding: 10


  },

  addBtn: {
    padding: 10,

    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10

  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 12

  },

  itemContainer: {
    flexDirection: 'row',
    margin:16,
    justifyContent:'space-between',
    backgroundColor:'white',
    padding:12,
    borderRadius:12

  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '90%'
  },
  container: {
    flex: 1,
    margin:-5


  },
  logintxt: {
    fontSize: 28,
    fontWeight: 500,
    color: '#240046',
    marginBottom: 30,
    textAlign: 'center'
  },
  txtinput: {

    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25




  }




})