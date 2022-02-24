import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { LevelLabel } from './LevelLabel';

interface SkillProps extends TouchableOpacityProps {
    skillName: string;
    skillLevel: string;
}

export function SkillCard({ skillName, skillLevel, ...rest }: SkillProps) {
    return (
        <TouchableOpacity
            style={styles.skillCard}
            {...rest}
        >

            <Text style={styles.skillText}>{skillName}</Text>

            <LevelLabel skillLevel={skillLevel} />

        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({

    skillCard: {
        padding: 16,
        backgroundColor: '#1F1E25',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    skillText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
});