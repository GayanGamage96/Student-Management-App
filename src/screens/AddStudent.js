import { Button, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/AntDesign'
import DatePicker from 'react-native-date-picker'


const AddStudent = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [dorLabel, setDorLabel] = useState('Date of Registered');
    const [id, setId] = React.useState();
    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [course, setCourse] = React.useState("");
    


    const addStd = () => {
         fetch(`http://192.168.70.232:5000/api/notes/add`, {
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
    }





    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../assets/images/seller.png')} />
                </View>

                <View style={{ paddingHorizontal: 25 }}>

                    <Text style={styles.logintxt}>Add New Student</Text>

                    <View style={styles.txtinput}>
                        <FontAwesome name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                        <TextInput
                            placeholder='Student ID number'
                            style={{ flex: 1, paddingVertical: 0 }}
                            value={id}
                            onChangeText={text => setId(text)}
                        />
                    </View>

                    <View style={styles.txtinput}>
                        <FontAwesome name='user' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                        <TextInput
                            placeholder='Full Name'
                            style={{ flex: 1, paddingVertical: 0 }}
                            keyboardType="email-address"
                            value={name}
                            onChangeText={text => setName(text)} />
                    </View>


                    <View style={styles.txtinput}>
                        <Ionicons name='home-outline' size={20} color="#666" style={{ paddingTop: 5, marginRight: 5 }} />
                        <TextInput
                            placeholder='Address'
                            style={{ flex: 1, paddingVertical: 0 }}
                            keyboardType="email-address"
                            value={address}
                            onChangeText={text => setAddress(text)}
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
                            onChangeText={text => setCourse(text)}
                        />
                    </View>


                    

                    <TouchableOpacity
                        onPress={() => addStd()}
                        style={{
                            backgroundColor: '#AD40AF',
                            padding: 12,
                            borderRadius: 16,
                            marginBottom: 30
                        }}>
                        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 18, color: 'white' }}>Add Student</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddStudent;

const styles = StyleSheet.create({
    container: {
        flex: 1,


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