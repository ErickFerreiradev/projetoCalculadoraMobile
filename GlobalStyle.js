import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

export default StyleSheet.create ({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },
})