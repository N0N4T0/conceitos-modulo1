import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            //console.log(response);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        //setProjects([...projects, `Novo projeto ${Date.now()}`]);
        //console.log(projects);

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            ower: "Nonato"
        });

        const project = response.data;

        //cria um novo array copia tudo que ta la dentro e adciona no final o novo
        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects"/>

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adcionar projeto</button>    
        </>
    );
}

export default App;