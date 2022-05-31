/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS, icons, images } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import Slider from '@react-native-community/slider';

import TrackPlayer, { Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvent } from 'react-native-track-player';

const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };

const listFavoritos = [
    {
        id: '001',
        url: require('../../assets/sound/Camila - Te Confieso.mp3'),
        title: 'Holy (Feat. Chance the raper)',
        album: 'Great Album',
        artist: 'Justin Bieder',
        artwork: images.musica,
    },
    {
        id: '002',
        url: require('../../assets/sound/Beret - Me Vas A Ver.mp3'),
        title: 'Holy (Feat. Chance the raper)',
        album: 'Great Album',
        artist: 'Justin Bieder',
        artwork: images.musica1,
    },
    {
        id: '003',
        url: require('../../assets/sound/Camilo - No Te Vayas.mp3'),
        title: 'Holy (Feat. Chance the raper)',
        album: 'Great Album',
        artist: 'Justin Bieder',
        artwork: images.musica2,
    },
    {
        id: '004',
        url: require('../../assets/sound/Camilo Ft. Pedro Capo - Tutu.mp3'),
        title: 'Holy (Feat. Chance the raper)',
        album: 'Great Album',
        artist: 'Justin Bieder',
        artwork: images.musica3,
    },
    {
        id: '005',
        url: require('../../assets/sound/Dante-carta de ansiedad(MP3_160K).mp3'),
        title: 'Holy (Feat. Chance the raper)',
        album: 'Great Album',
        artist: 'Justin Bieder',
        artwork: images.musica4,
    },
    {
        id: '006',
        url: require('../../assets/sound/David Parejo - Tú (Acoustic Version)(MP3_128K).mp3'),
        title: 'Holy (Feat. Chance the raper)',
        album: 'Great Album',
        artist: 'Justin Bieder',
        artwork: images.musica5,
    },
];

const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(listFavoritos);
};

const tooglePlayer = async (playbackState) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack != null) {
        if (playbackState === State.Paused) {
            await TrackPlayer.play();
        } else {
            await TrackPlayer.pause();
        }
    }
};

const PlayerMusic = ({ route }) => {

    const navigation = useNavigation();

    const playbackState = usePlaybackState();

    const [selectedMusic, setSelectedMusic] = useState(null);

    useEffect(() => {
        setSelectedMusic(route.params);
        //setupPlayer();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.HeaderSection}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack(); }}
                >
                    <Image source={icons.icon_left} resizeMode="contain" style={{ width: 20, height: 20, tintColor: COLORS.white }} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <Image source={icons.icon_more} resizeMode="contain" style={{ width: 25, height: 25, tintColor: COLORS.white }} />
                </TouchableOpacity>
            </View>

            <View style={styles.MusicDetailSection}>
                <Image source={selectedMusic?.imagen} resizeMode="contain" style={{ width: 250, height: 250, borderRadius: 200, marginHorizontal: 81, marginVertical: 60 }} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: COLORS.white, fontSize: 24, fontFamily: 'Montserrat-SemiBold', textAlign: 'center' }}>{selectedMusic?.title}</Text>
                <Text style={{ color: COLORS.gray2, fontSize: 14, marginTop: 8, fontFamily: 'Montserrat-Medium' }}>{selectedMusic?.artist}</Text>
            </View>

            <View style={styles.SliderSection}>
                <Slider
                    minimumValue={0}
                    maximumValue={1}
                    value={0.3}
                    minimumTrackTintColor={COLORS.secondary}
                    maximumTrackTintColor={COLORS.gray2}
                    thumbTintColor={COLORS.white}
                >
                </Slider>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 12, color: COLORS.white }}>0:17</Text>
                    <Text style={{ fontSize: 12, color: COLORS.white }}>0:17</Text>
                </View>
            </View>

            <View style={styles.ControlSelection}>
                <Image source={icons.icon_refresh} resizeMode="contain" style={{ tintColor: COLORS.white, width: 25, height: 25 }} />
                <View style={{ width: 231, height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 231, height: 54, borderRadius: 54, backgroundColor: COLORS.sematic, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={icons.icon_back} resizeMode="contain" style={{ tintColor: COLORS.white, width: 25, height: 25, marginLeft: 24 }} />
                        <View style={{ width: 88, height: 88, borderRadius: 88, backgroundColor: COLORS.primary, elevation: 5 }}>
                            <View style={styles.Playbutton}>
                                <TouchableOpacity
                                    onPress={() => {
                                        tooglePlayer(playbackState);
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
                                            source={playbackState == State.Playing ? icons.icon_pause : icons.icon_play}
                                            resizeMode="contain"
                                            style={{ width: 35, height: 35, tintColor: COLORS.white, marginTop: "22%", marginLeft: "30%" }}
                                        />
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image source={icons.icon_next} resizeMode="contain" style={{ tintColor: COLORS.white, width: 25, height: 25, marginRight: 24 }} />
                    </View>
                </View>
                <Image source={icons.icon_sound} resizeMode="contain" style={{ tintColor: COLORS.white, width: 25, height: 25 }} />

            </View>

            <View style={styles.LyrisSection}>
                <Image source={icons.icon_up} resizeMode="contain" style={{ tintColor: COLORS.accent, width: 25, height: 25 }} />
                <Text style={{ color: COLORS.accent, fontSize: 12, fontFamily: 'Montserrat-Medium' }}>Lista</Text>
            </View>
        </View >
    );
};

export default PlayerMusic;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    HeaderSection: {
        marginTop: 50,
        marginBottom: 12,
        marginLeft: 24,
        marginRight: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    MusicDetailSection: {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 24,
        marginLeft: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SliderSection: {
        marginTop: 30,
        marginBottom: 0,
        marginRight: 24,
        marginLeft: 24,
    },
    ControlSelection: {
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 24,
        marginRight: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Playbutton: {
        marginTop: -35,
        width: 88,
        height: 88,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneButtonWrapper: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        opacity: 0.5,
        position: 'absolute',
        left: -36,
        bottom: 0,
        top: -5,
    },
    doneButtonWrapper1: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        opacity: 0.5,
        position: 'absolute',
        right: -36,
        bottom: -65,
    },
    doneButtonWrapper2: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        left: -36,
    },
    LyrisSection: {
        marginTop: 14,
        marginBottom: 14,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});