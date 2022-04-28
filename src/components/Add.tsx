import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { ADD_ITEM } from '../constant';

// import AddTaskIcon from "@mui/icons-material/AddTask";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import ReplayIcon from "@mui/icons-material/Replay";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "transparent",
  textAlign: "center",
  border: "none",
  boxShadow: "none",
}));

function Add() {
  const data = useSelector((state :any) => state?.data.items);

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    id: "",
    name: "",
    description: "",
    watchers_count: "",
    language: "",
    open_issues: "",
    private: '0',
  });
  const handleChange = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = () => {
    let idChecked = data.map((it:any) => it?.id)
    if (!idChecked.includes(item.id)) {
      dispatch({ type: ADD_ITEM, payload: item })
      console.log(data)
      navigate("/")
    } else {
      alert("Id đã tồn tại")
    }

  };
  return (
    <Paper sx={{ padding: "30px 0" }}>
      <Box sx={{ flexGrow: 1, margin: "0 auto",  width: "75%"}}>
        <Grid container>
          <Grid item xs={12}>
            <Item>
              <Typography sx={{ width: "90%", margin: "0 auto" }} noWrap component={'span'}>
                {" "}
                <h2>Add New Item</h2>{" "}
              </Typography>
            </Item>
          </Grid>
        </Grid>
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container columnSpacing={1}>
          <Grid item xs={6}>
            {/* ID  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-basic"
                  name="id"
                  type="number"
                  label="ID"
                  variant="outlined"
                  value={item.id}
                  onChange={handleChange}
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} columnSpacing={1}>
            {/* Name  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-basic"
                  name="name"
                  label="Name"
                  value={item.name}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* end-group  */}
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container columnSpacing={1}>
          <Grid item xs={12}>
            {/* Desciption  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-textarea"
                  name="description"
                  label="Desciption"
                  placeholder="Enter Desciption"
                  value={item.description}
                  onChange={handleChange}
                  multiline
                />
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* end-group  */}
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container columnSpacing={1}>
          <Grid item xs={6}>
            {/* Watchers Count  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-basic"
                  name="watchers_count"
                  label="Watchers Count"
                  type="number"
                  value={item.watchers_count}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} columnSpacing={1}>
            {/* Language  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-basic"
                  name="language"
                  label="Language"
                  value={item.language}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* end-group  */}
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container columnSpacing={1}>
          <Grid item xs={6}>
            {/* Open Issues  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-basic"
                  name="open_issues"
                  label="Open Issues"
                  type="number"
                  value={item.open_issues}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} columnSpacing={1}>
            {/* Private  */}
            <Item>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Private</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="private"
                    value={item.private}
                    label="Private"
                    onChange={handleChange}>
                    <MenuItem value={1}>True</MenuItem>
                    <MenuItem value={0}>False</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* end-group  */}

        <Grid sx={{ width: "50%", margin: "0 auto" }} container columnSpacing={1}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2 }>
            <Item  sx={{ padding: "0"}}>
              <Button
              variant="contained"
              size="large"
              onClick={() => handleSubmit()} 
              disabled={!item.id || !item.name ? true : false}              
              >
                Submit
              </Button>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ padding: "0"}}>
              <Button variant="contained" size="large" onClick={() => navigate("/")}>Cancel</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
export default Add;