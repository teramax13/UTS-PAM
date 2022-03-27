import React, { useState } from 'react'
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from "@react-native-picker/picker";




const FormSearch = ({navigation}) => {
    const [text, onChangeText] = useState({
        keberangkatan: '',
        tujuan: '',
        tanggal: '',
    });

    const clickHandler = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    
    return (

        

        <View style={formStyle.box}>
            <Text style={formStyle.Judul}>Kapalzy</Text>
            
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Pelabuhan Awal</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="ferry" size={20} color="#9D9D9D"/>
                    <Picker
                        selectedValue={text.kelas}
                        style={{ width: '80%', color:'#000000' }}
                        onValueChange={(itemValue) => onChangeText({...text, kelas: itemValue})}
                        >
                        <Picker.Item label="Pilih Pelabuhan Awal" value="0" />
                        <Picker.Item label="Lampung" value="Lampung" />
                        <Picker.Item label="Tangerang" value="Tangeran" />
                        <Picker.Item label="Bangka Belitung" value="Bangka Belitung" />
                  </Picker>
                </View>
            </View>
            
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Pelabuhan Tujuan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="ferry" size={20} color="#9D9D9D"/>
                    <Picker
                        selectedValue={text.kelas}
                        style={{ width: '80%', color:'#000000' }}
                        onValueChange={(itemValue) => onChangeText({...text, kelas: itemValue})}
                        >
                        <Picker.Item label="Pilih Pelabuhan Tujuan" value="0" />
                        <Picker.Item label="Lampung" value="Lampung" />
                        <Picker.Item label="Tangerang" value="Tangerang" />
                        <Picker.Item label="Bangka Belitung" value="Bangka Belitung" />
                  </Picker>
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Kelas Layanan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="seat" size={20} color="#9D9D9D"/>
                    <Picker
                        selectedValue={text.kelas}
                        style={{ width: '80%', color:'#000000' }}
                        onValueChange={(itemValue) => onChangeText({...text, kelas: itemValue})}
                        >
                        <Picker.Item label="Pilih Layanan" value="0" />
                        <Picker.Item label="Reguler" value="reguler" />
                        <Picker.Item label="Eksekutif" value="eksekutif" />
                        <Picker.Item label="Bisnis" value="bisnis" />
                  </Picker>
                </View>
            </View>
            
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Tanggal Masuk Pelabuhan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="calendar" size={20} color="#9D9D9D"/>
                    <Picker
                        selectedValue={text.kelas}
                        style={{ width: '80%', color:'#000000' }}
                        onValueChange={(itemValue) => onChangeText({...text, kelas: itemValue})}
                        >
                        <Picker.Item label="Pilih Tanggal Masuk" value="0" />
                        <Picker.Item label="Reguler" value="reguler" />
                        <Picker.Item label="Eksekutif" value="eksekutif" />
                        <Picker.Item label='Bisnis' value="bisnis" />
                  </Picker>
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Jam Masuk Pelabuhan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="clock" size={20} color="#9D9D9D"/>
                    <Picker
                        selectedValue={text.kelas}
                        style={{ width: '80%', color:'#000000' }}
                        onValueChange={(itemValue) => onChangeText({...text, kelas: itemValue})}
                        >
                        <Picker.Item label="Pilih Jam Masuk" value="0" />
                        <Picker.Item label="07.00" value="07.00r" />
                        <Picker.Item label="09.00" value="09.00" />
                        <Picker.Item label="11.00" value="11.00" />
                        <Picker.Item label="13.00" value="13.00" />
                        <Picker.Item label="15.00" value="15.00" />
                  </Picker>
                </View>
            </View>

            <View style={formStyle.package}>
                <TouchableOpacity 
                    style={formStyle.button}
                    onPress={() => navigation.navigate('ConfirmPage', {data: text})}
                >
                    <Text style={formStyle.textButton}>Buat Tiket</Text>
                    <MaterialCommunityIcons style={formStyle.Icon} name="magnify" size={20} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const formStyle = StyleSheet.create({
    box:{
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        width: '90%',
        position: 'absolute',
        top: '10%',
        left: '5%',
        shadowColor: '#000',
        elevation: 5,
    },
    package:{
        marginTop: 20,
    },
    formSingle:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 5,
        marginTop: 5,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    Icon:{
        padding: 10,
    },
    Input:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EE9E54',
        borderRadius: 5,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
    Judul:{
        fontSize: 35,
        color: "#00579C",
        textAlign: "center",
        fontWeight: 'bold'
    }
})

export default FormSearch