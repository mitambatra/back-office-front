import { React, useState } from 'react'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { Box, TextField, IconButton, MenuItem, Tooltip, Button } from '@mui/material'
import Form from './Form'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'

const thematiques = [
    {
        value: 'Corruption et Engagement d’un représentant du gouvernement',
        label: 'Corruption et Engagement d’un représentant du gouvernement',
    },
    {
        value: 'Déontologie et bonne conduite des agents publics',
        label: 'Déontologie et bonne conduite des agents publics',
    },
    {
        value: 'Faune',
        label: 'Faune',
    },
    {
        value: 'Flore',
        label: 'Flore',
    },
    {
        value: 'Organisation de la lutte contre la corruption',
        label: 'Organisation de la lutte contre la corruption',
    },
    {
        value: "Répression et principes",
        label: "Répression et principes",
    },
];

const types = [
    {
        value: 'Loi',
        label: 'Loi',
    },
    {
        value: 'Décret',
        label: 'Décret',
    },
    {
        value: 'Arrêté',
        label: 'Arrêté',
    },
    {
        value: 'Convention',
        label: 'Convention',
    },
    {
        value: 'Ordonnance',
        label: 'Ordonnance',
    },
];

const titres = [
    {
        value: 'CONVENTION C2004 - CONVENTION DES NATIONS UNIES CONTRE LA CORRUPTION',
        label: 'CONVENTION C2004 - CONVENTION DES NATIONS UNIES CONTRE LA CORRUPTION',
    },
    {
        value: 'LOI n° 2003-011 Portant Statut Général des Fonctionnaires',
        label: 'LOI n° 2003-011 Portant Statut Général des Fonctionnaires',
    },
    {
        value: 'LOI-2004-017-autorisant-la-ratification-de-la-Convention-des-Nations-Unies-contre-la-corruption-p',
        label: 'LOI-2004-017-autorisant-la-ratification-de-la-Convention-des-Nations-Unies-contre-la-corruption-p',
    },
    {
        value: 'ARRETE N° 24.4802012 portant Code de Conduite de la Police Nationale',
        label: 'ARRETE N° 24.4802012 portant Code de Conduite de la Police Nationale',
    },
    {
        value: 'DECRET N° 2005-710 du 25 octobre 2005 portant Code de déontologie des magistrats',
        label: 'DECRET N° 2005-710 du 25 octobre 2005 portant Code de déontologie des magistrats',
    },
    {
        value: 'DECRET N°2017- 415 du 30 mai 2017 fixant les modalités et les conditions d’application de la LOI n° 2015- 005',
        label: 'DECRET N°2017- 415 du 30 mai 2017 fixant les modalités et les conditions d’application de la LOI n° 2015- 005',
    },
    {
        value: 'Loi-n-2015-005_Code de Gestion des Aires Protégées',
        label: 'Loi-n-2015-005_Code de Gestion des Aires Protégées',
    },
    {
        value: 'Loi-n°2015-003-Charte-de-lenvironnement',
        label: 'Loi-n°2015-003-Charte-de-lenvironnement',
    },
    {
        value: 'LOI 2015-056 portant création de la chaîne spéciale de lutte contre le trafic de bois de rose etou de bois d\'ébène et répression des infractions relatives aux bois de rose etou bois d\'ébène',
        label: 'LOI 2015-056 portant création de la chaîne spéciale de lutte contre le trafic de bois de rose etou de bois d\'ébène et répression des infractions relatives aux bois de rose etou bois d\'ébène',
    },
    {
        value: 'ORDONNANCE No 60-127 Fixant le régime des défrichements et des feux de végétation',
        label: 'ORDONNANCE No 60-127 Fixant le régime des défrichements et des feux de végétation',
    },
    {
        value: 'ARRETE N° 136732017 Portant mise en place des normes d’exploitation des bois à Madagascar',
        label: 'ARRETE N° 136732017 Portant mise en place des normes d’exploitation des bois à Madagascar',
    },
    {
        value: 'LOI - CODE DE PROCEDURE PENALE',
        label: 'LOI - CODE DE PROCEDURE PENALE',
    },
    {
        value: 'LOI 2016-020 sur la Lutte contre la Corruption.',
        label: 'LOI 2016-020 sur la Lutte contre la Corruption.',
    },
    {
        value: 'DECRET N°2020-013 portant restructuration du BIANCO',
        label: 'DECRET N°2020-013 portant restructuration du BIANCO',
    },
    {
        value: 'ORDONNANCE n°2019-015 - RELATIVE AU RECOUVREMENT DES AVOIRS ILLICITESOrdonnance',
        label: 'Ordonnance',
    },
];

function AddLaw() {

    const [values, setValues] = useState({
        thematique: '',
        type: '',
        intitule: '',
        chapitre: '',
        article: '',
        paragraphe: ''
    });

    const [newTheme, setNewTheme] = useState(false);

    const handleNewTheme = () => {
        setNewTheme(true);
    }

    const handleOldTheme = () => {
        setNewTheme(false);
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post("http://35.91.152.177:3001/api/new-data",values)
        alert("Ajouter avec success")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexFlow: "row nowrap",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        {newTheme ? <TextField
                            variant="outlined"
                            name="thematique"
                            type="text"
                            label="Nouveau thématique"
                            sx={{
                                margin: "30px 0 30px 30px",
                                width: "300px",
                                '& label.Mui-focused': {
                                    color: '#1e2029',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: '#1e2029',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1e2029',
                                    },
                                },
                            }}
                            value={values.thematique}
                            onChange={handleChange('thematique')}
                        /> :
                            <TextField
                                variant="outlined"
                                select
                                name="thematique"
                                type="text"
                                label="Thématique existant"
                                sx={{
                                    margin: "30px 0 30px 30px",
                                    width: "300px",
                                    '& label.Mui-focused': {
                                        color: '#1e2029',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#1e2029',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#1e2029',
                                        },
                                    },
                                }}
                                value={values.thematique}
                                onChange={handleChange('thematique')}
                            >
                                {thematiques.map((thematique) => (
                                    <MenuItem key={thematique.label} value={thematique.value}>
                                        {thematique.value}
                                    </MenuItem>
                                ))}
                            </TextField>}
                        <Tooltip title={newTheme ? "Thématique existant" : "Nouveau thématique"}>
                            <IconButton onClick={newTheme ? handleOldTheme : handleNewTheme}>
                                {newTheme ? <Remove /> : <Add />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <TextField
                        variant="outlined"
                        select
                        name="type"
                        type="text"
                        label="Type"
                        sx={{
                            margin: "30px 0 30px 30px",
                            width: "300px",
                            '& label.Mui-focused': {
                                color: '#1e2029',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#1e2029',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1e2029',
                                },
                            },
                        }}
                        value={values.type}
                        onChange={handleChange('type')}
                    >
                        {types.map((type) => (
                            <MenuItem key={type.value} value={type.value}>
                                {type.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        variant="outlined"
                        select
                        name="titre"
                        type="text"
                        label="Intitulé"
                        sx={{
                            margin: "30px 0 30px 30px",
                            width: "300px",
                            '& label.Mui-focused': {
                                color: '#1e2029',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#1e2029',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1e2029',
                                },
                            },
                        }}
                        value={values.titre}
                        onChange={handleChange('titre')}
                    >
                        {titres.map((titre) => (
                            <MenuItem key={titre.value} value={titre.value}>
                                {titre.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                >
                    <TextField
                        variant="outlined"
                        name="chapitre"
                        type="number"
                        label="Chapitre"
                        sx={{
                            margin: "30px",
                            width: "300px",
                            '& label.Mui-focused': {
                                color: '#1e2029',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#1e2029',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1e2029',
                                },
                            },
                        }}
                        value={values.chapitre}
                        onChange={handleChange('chapitre')}
                    />
                    <TextField
                        variant="outlined"
                        name="article"
                        type="number"
                        label="Article"
                        sx={{
                            margin: "30px",
                            width: "300px",
                            '& label.Mui-focused': {
                                color: '#1e2029',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#1e2029',
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1e2029',
                                },
                            },
                        }}
                        value={values.article}
                        onChange={handleChange('article')}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    width: 500
                }}
            >
                <CKEditor
                    editor={ClassicEditor}
                    data={values.paragraphe}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setValues({ ...values, paragraphe: data });
                    }}
                    sx={{
                        padding: "50px"
                    }}
                />
            </Box>
            <Button
                sx={{
                    margin: "5px",
                    width: "300px",
                    backgroundColor: "#1e2029",
                    transition: "400ms",
                    '&:hover': {
                        transform: "scale(1.03)",
                        backgroundColor: "#1e2029"
                    }
                }}
                variant="contained"
                type="submit"
            >
                Envoyer
            </Button>
        </Form>
    )
}

export default AddLaw