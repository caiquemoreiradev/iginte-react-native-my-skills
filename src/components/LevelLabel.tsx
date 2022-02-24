import React from 'react';

import { StyleSheet, Text, View } from "react-native";

interface LabelProps {
    skillLevel: string
}

export function LevelLabel({ skillLevel }: LabelProps) {
    return (
        <View style={styles.levelLabel}>
            <Text
                style={skillLevel === 'beginner' ? styles.levelTextBeginner : skillLevel === 'intermediate' ? styles.levelTextIntermediate : styles.levelTextAdvanced}
            >
                {skillLevel}
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({

    levelLabel: {

    },

    levelTextBeginner: {
        color: '#FF7070'
    },

    levelTextIntermediate: {
        color: '#FCAC1F'
    },

    levelTextAdvanced: {
        color: '#2A9F85'
    },
});