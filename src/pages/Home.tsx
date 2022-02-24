import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    skillName: string;
    skillLevel: string;
}

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [newSkillLevel, setNewSkillLevel] = useState('');

    const [mySkills, setMySkills] = useState<SkillData[]>([]);

    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {

        const data = {
            id: String(new Date().getTime()),
            skillName: newSkill,
            skillLevel: newSkillLevel
        }

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {

        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(() => {

        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Good morning');
        }

        else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon');
        }

        else {
            setGreeting('Good evening')
        }

    }, []);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Welcome, Caique</Text>
            <Text style={styles.greeting}>{greeting}</Text>

            <TextInput
                style={styles.input}
                placeholder='enter a new skill...'
                placeholderTextColor='#555'
                value={newSkill}
                onChangeText={setNewSkill}
            />

            <TextInput
                style={styles.input}
                placeholder='enter the skill level...'
                placeholderTextColor='#555'
                value={newSkillLevel}
                onChangeText={setNewSkillLevel}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 40 }]}>My skills</Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skillName={item.skillName}
                        skillLevel={item.skillLevel}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 30
    },

    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },

    greeting: {
        color: '#FFF',
        marginTop: 4,
        marginBottom: 30,
    },

    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        marginBottom: 10,
        marginTop: 30,
        borderRadius: 8
    }

})