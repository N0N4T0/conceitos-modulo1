import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            //console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject () {
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            ower: 'Nonato'
        });

        const project = response.data;

        setProjects([...projects, project]);
    }
    
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#035AFD"/>
            
            <SafeAreaView style={styles.container}>
                <FlatList 
                    style={styles.listElements}
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />

                <TouchableOpacity 
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Adcionar projecto</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#035AFD',
    },
    project: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 13, 
    }, 
    button: {
        backgroundColor: '#8A9AE3',
        margin: 20,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    listElements: {
        marginLeft: 20,
        marginTop: 20,
    },
});