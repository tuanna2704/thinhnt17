import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from "styled-components"
import { useDispatch } from 'react-redux';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


function Add() {
    const [item, setItem] = useState({
        id: "",
        name: "",
        description: "",
        watchers_count: "",
        language: "",
        open_issues: "",
        pr: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    const dispatch = useDispatch();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <Wrapper>
            <form  onSubmit={handleSubmit}>
                <TextField
                    required
                    id="outlined-required"
                    label="ID"
                    type="number"
                    size="small"
                    defaultValue={item.id}
                    onChange={(e) => setItem({ ...item, id: e.target.value })}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    size="small"
                    defaultValue={item.name}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    size="small"
                    defaultValue={item.description}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Watchers Count"
                    size="small"
                    defaultValue={item.watchers_count}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Language"
                    size="small"
                    defaultValue={item.language}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Open Issues"
                    size="small"
                    defaultValue={item.open_issues}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Private"
                    size="small"
                    defaultValue={item.pr}
                />

                <Button variant="contained" type="submit">Submit</Button>
                <Button variant="outlined">Cancel</Button>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
`;
export default Add