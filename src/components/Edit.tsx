import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
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
import { EDIT_ITEM } from '../constant';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "transparent",
  textAlign: "center",
  border: "none",
  boxShadow: "none",
}));

function Edit() {
  const items = useSelector((state :any) => state.data.items);
  const { id } = useParams();
  const [item, setItem] = useState({
    id: 0,
    name: "",
    description: "",
    watchers_count: 0,
    language: "",
    open_issues: 0,
    private: null,  
  });
  const currentItem = items.find(
    (item) => item.id == parseInt(id)
  );
  console.log(currentItem)
  useEffect(() => {
    setItem(currentItem)
  }, [currentItem]);
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = () => {
    dispatch({ type: EDIT_ITEM, payload: item })
    navigate("/")
  };

  return (
    <Paper sx={{ padding: "30px 0" }}>
      <Box sx={{ flexGrow: 1, margin: "25px 0" }}>
        <Grid container>
          <Grid item xs={12}>
            <Item>
              <Typography sx={{ width: "90%", margin: "0 auto" }} noWrap>
                {" "}
                <h2>Edit Item</h2>{" "}
              </Typography>
            </Item>
          </Grid>
        </Grid>
        {/* group  */}
        <Grid sx={{ width: "90%", margin: "0 auto" }} container spacing={1}>
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
                  disabled
                  onChange={handleChange}
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} spacing={1}>
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
        <Grid sx={{ width: "90%", margin: "0 auto" }} container spacing={1}>
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
        <Grid sx={{ width: "90%", margin: "0 auto" }} container spacing={1}>
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
                  value={item.watchers_count}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} spacing={1}>
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
        <Grid sx={{ width: "90%", margin: "0 auto" }} container spacing={1}>
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
                  value={item.open_issues}
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6} spacing={1}>
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

        <Grid sx={{ width: "50%", margin: "0 auto" }} container spacing={1}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Item sx={{ padding: "0"}}>
              <Button variant="contained"
              size="large" 
              onClick={() => handleSubmit()}
              disabled={!item.id || !item.name  ? true : false} 
              >
                Update
              </Button>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ padding: "0"}}>
              <Button variant="contained"
              size="large" onClick={() => navigate("/")}>Cancel</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}
export default Edit