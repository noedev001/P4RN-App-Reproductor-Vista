/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, icons, images } from '../../constants';
import { ScrollView } from 'react-native-virtualized-view';
import Svg, { Circle, G, Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };


const HomeScreen = () => {

    const navigation = useNavigation();
    const list = [
        {
            id: 0,
            name: 'Recien Añadidos',
            imagen: images.musica,
            canciones: 12,
            color: '#95D1CC',
        },
        {
            id: 1,
            name: 'Mi Favoritos',
            imagen: images.musica1,
            canciones: 12,
            color: '#5584AC',
        },
        {
            id: 2,
            name: 'Toda Musica',
            imagen: images.musica2,
            canciones: 12,
            color: '#D3DEDC',
        },
        {
            id: 3,
            name: 'Mi Musica Youtube',
            imagen: images.musica3,
            canciones: 12,
            color: '#488FB1',
        },
        {
            id: 4,
            name: 'Mi Favoritos Youtube',
            imagen: images.musica4,
            canciones: 12,
            color: '#6998AB',
        },
    ];

    const listFavoritos = [
        {
            id: '001',
            url: '',
            title: 'Holy (Feat. Chance the raper)',
            album: 'Great Album',
            artist: 'Justin Bieder',
            imagen: images.musica,
        },
        {
            id: '002',
            url: '',
            title: 'Holy (Feat. Chance the raper)',
            album: 'Great Album',
            artist: 'Justin Bieder',
            imagen: images.musica1,
        },
        {
            id: '003',
            url: '',
            title: 'Holy (Feat. Chance the raper)',
            album: 'Great Album',
            artist: 'Justin Bieder',
            imagen: images.musica2,
        },
        {
            id: '004',
            url: '',
            title: 'Holy (Feat. Chance the raper)',
            album: 'Great Album',
            artist: 'Justin Bieder',
            imagen: images.musica3,
        },
        {
            id: '005',
            url: '',
            title: 'Holy (Feat. Chance the raper)',
            album: 'Great Album',
            artist: 'Justin Bieder',
            imagen: images.musica4,
        },
        {
            id: '006',
            url: '',
            title: 'Holy (Feat. Chance the raper)',
            album: 'Great Album',
            artist: 'Justin Bieder',
            imagen: images.musica5,
        },
    ];

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={{ ...styles.cardImagen, marginLeft: index === 0 ? 24 : 0, marginRight: index === list.length - 1 ? 0 : 24, backgroundColor: item.color }}>
                    <Image source={item.imagen} key={index} style={styles.imageplaylist} resizeMode="contain" />
                </View>
                <View style={{ marginTop: 10, marginLeft: index === 0 ? 26 : 0, marginRight: index === list.length - 1 ? 0 : 26, }}>
                    <Text style={{ color: COLORS.white, fontFamily: 'Montserrat-Medium', }}>{item.name}</Text>
                    <Text style={{ color: COLORS.lightGray }}>{item.canciones} canciones</Text>
                </View>
            </TouchableOpacity >
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Lista de Reproducción</Text>
            <View style={styles.searchText}>
                <Image source={icons.search_icon} resizeMode="contain" style={{ width: 25, height: 25, marginLeft: 16, marginRight: 12 }} />
                <TextInput
                    placeholder="Buscar Artista o Canción..."
                    placeholderTextColor={COLORS.gray2}
                    style={{ color: COLORS.gray3, fontSize: 16 }}
                >

                </TextInput>
            </View>

            <View style={styles.TitleSection}>
                <Text style={{ color: COLORS.white, fontFamily: 'Montserrat-Light', fontSize: 20 }}>Plalists</Text>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Image source={icons.rigth} resizeMode="contain" style={{ width: 20, height: 20, tintColor: COLORS.white }} />
                </TouchableOpacity>
            </View>

            <View styl e={styles.playlist}>
                <FlatList
                    keyExtractor={(item) => 'playlist' + item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                    data={list}
                    renderItem={_renderItem}
                />
            </View>
            <View style={styles.TitleSection}>
                <Text style={{ color: COLORS.white, fontFamily: 'Montserrat-Light', fontSize: 20 }}>Tu lista Favorita</Text>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Image source={icons.rigth} resizeMode="contain" style={{ width: 20, height: 20, tintColor: COLORS.white }} />
                </TouchableOpacity>
            </View>


            <ScrollView
                style={{ marginTop: 10, marginBottom: 10, maxHeight: 210 }}
                showsVerticalScrollIndicator={false}
            >
                {
                    listFavoritos.map((item, index) => {
                        return (
                            <View style={styles.listafavoritos} key={index}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('PlayerMusic', item);
                                        }}
                                        style={{ flexDirection: 'row' }}
                                    >
                                        <View style={styles.musicCircle}>
                                            <Image source={icons.icon_music} resizeMode="center" />
                                        </View>
                                        <View style={{ marginLeft: 12 }}>
                                            <Text style={{ fontSize: 14, color: COLORS.gray3, fontFamily: 'Montserrat-SemiBold' }} >{item.title}</Text>
                                            <Text style={{ fontSize: 12, color: COLORS.gray2, fontFamily: 'Montserrat-Medium', marginTop: 4 }}>{item.artist}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    onPress={() => { }}
                                >
                                    <Image source={icons.icon_like} resizeMode="contain" style={{ width: 25, height: 25, tintColor: COLORS.secondary }} />
                                </TouchableOpacity>

                            </View>
                        );
                    })
                }
            </ScrollView>

            <View style={styles.BottomSeccion}>
                <View style={{ width: 321, height: 84, borderRadius: 84, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <View style={{ width: 42, height: 84 }}></View>
                    <View style={{ height: 84, justifyContent: 'space-between' }}>
                        <LinearGradient
                            colors={COLORS.linerGradient2}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ width: 321 - 84, height: 3, flexDirection: 'row', justifyContent: 'flex-start' }}
                        />
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                            <View style={{ width: 6, height: 6, borderRadius: 6, position: 'relative', bottom: -1.5, backgroundColor: '#648CCC' }}></View>
                            <View style={{ width: 321 - 84 - 150, height: 3, borderRadius: 3, alignSelf: 'flex-end', backgroundColor: '#ED1BA3' }}>
                            </View>
                        </View>
                    </View>
                    <Svg height="84" width="84">
                        <Circle cx="0" cy="42" r="40" stroke="#ED1BA3" strokeWidth="3" fill="transparent">
                        </Circle>
                    </Svg>
                    <View style={{ marginVertical: 7, marginHorizontal: 7, width: 321 - 84 + 72, height: 72, borderRadius: 70, backgroundColor: COLORS.sematic, position: 'absolute', top: -2, left: 0, right: 0 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', marginHorizontal: 16, marginVertical: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={images.musica} style={{ width: 38, height: 38, borderRadius: 38 }} />
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Bold', color: COLORS.gray3 }}>Thumble</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Medium', color: COLORS.gray2 }}>Image Dragons</Text>
                                </View>
                                <View style={styles.Playbutton}>
                                    <TouchableOpacity
                                        onPress={() => {

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
                                                source={icons.icon_pause}
                                                resizeMode="contain"
                                                style={{ width: 35, height: 35, tintColor: COLORS.white, marginTop: "18%", marginLeft: "18%" }}
                                            />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>

                </View>
            </View>

        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    title: {
        color: COLORS.secondary,
        fontSize: 24,
        fontFamily: 'Montserrat-Medium',
        marginTop: 30,
        marginLeft: 14,
    },
    searchText: {
        width: '90%',
        height: 52,
        borderRadius: 30,
        backgroundColor: COLORS.sematic,
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    TitleSection: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardImagen: {
        marginTop: 16,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageplaylist: {
        width: 160,
        height: 180,
    },
    listafavoritos: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    musicCircle: {
        width: 42,
        height: 42,
        borderRadius: 42,
        backgroundColor: COLORS.sematic,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomSeccion: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 24,
        marginRight: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'absolute',
        left: 20,
        bottom: 30,
        zIndex: 1,
    },
    Playbutton: {
        marginTop: -35,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneButtonWrapper: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        opacity: 0.5,
        position: 'absolute',
        left: 20,
        bottom: 0,
        top: -5,
    },
    doneButtonWrapper1: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        opacity: 0.5,
        position: 'absolute',
        right: -70,
        bottom: -42,
    },
    doneButtonWrapper2: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        opacity: 0.5,
        position: 'absolute',
        top: -10,
        left: 19,
    },
});