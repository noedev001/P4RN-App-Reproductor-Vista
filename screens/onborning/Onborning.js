/* eslint-disable prettier/prettier */
import { types } from '@babel/core';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, icons, images } from '../../constants';

import { useNavigation } from '@react-navigation/native';

const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };

const Onborning = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={COLORS.transparent} />


            <Image source={images.onboarnig} style={styles.onborning} resizeMode="contain" />
            <View style={styles.text1}>
                <Text style={styles.title}>El Sonido de la Vida</Text>
                <Text style={styles.parrafo}>la música no es un entretenimiento, sino que también es nuestra vida</Text>
            </View>


            <Image source={images.onboarnig2} style={styles.onborning1} resizeMode="contain" />
            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('HomeScreen');
                    }}
                >
                    <LinearGradient
                        colors={COLORS.linerGradient1}
                        start={start}
                        end={end}
                        style={styles.doneButtonWrapper}
                    />

                    <LinearGradient
                        colors={COLORS.linerGradient1}
                        start={start}
                        end={end}
                        style={styles.doneButtonWrapper1}
                    />
                    <LinearGradient
                        colors={COLORS.linerGradient1}
                        start={start}
                        end={end}
                        style={styles.doneButtonWrapper2}
                    >

                        <Image
                            source={icons.rigth_arroy}
                            resizeMode="contain"
                            style={{ width: 40, height: 40, tintColor: COLORS.white, marginTop: "30%", marginLeft: "22%" }}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default Onborning;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    onborning: {
        height: '50%',
        width: '110%',
        marginTop: 100,
    },
    onborning1: {
        height: '100%',
        width: '100%',
        opacity: 0.5,
        position: 'absolute',
        left: 0,
        bottom: '-30%',
    },
    text1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: COLORS.secondary,
        fontSize: 24,
        fontFamily: 'Montserrat-Bold',
    },
    parrafo: {
        color: COLORS.gray3,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        marginHorizontal: 30,
        marginTop: 10,
    },
    bottom: {
        marginTop: 120,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',

    },
    doneButtonWrapper: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        opacity: 0.5,
        position: 'absolute',
        left: -30,
        bottom: 0,
    },
    doneButtonWrapper1: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        opacity: 0.5,
        position: 'absolute',
        right: -45,
        bottom: 0,
    },
    doneButtonWrapper2: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        opacity: 0.5,
        position: 'absolute',
        top: -82,
        left: -30,
    },
});
