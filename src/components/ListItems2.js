import React from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { DELETE_ITEM } from '../constant';



function ListItems() {
  let navigate = useNavigate();

  const dispatch = useDispatch()
  // const browserHistory = ReactRouter.browserHistory;

  const data = useSelector(state => state.data.items);
  const tableTitle = [
    "Id", "Name", "Description", "Watchers Count", "Language", "Open Issues", "Private", "Action"
  ];

  const deleteItem = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id })
  }
  const editItem = (id) => {
    console.log(id)
    navigate(`edit/${id}`)
  }
  return (
    <TableContainer sx={{ width: '90%', margin: "0 auto" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            {tableTitle.map((title, index) => {
              return <TableCell align="center" key={index}>{title}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => {
            const { id, name, description, watchers_count, language, open_issues, private: privates } = item
            return (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{id}</TableCell >
                <TableCell align="center">{name}</TableCell >
                <TableCell >{description}</TableCell >
                <TableCell align="center">{watchers_count}</TableCell >
                <TableCell align="center">{language}</TableCell >
                <TableCell align="center">{open_issues}</TableCell >
                <TableCell align="center">{privates ? "True" : "False"}</TableCell >
                <TableCell style={{ width: '20%', textAlign: 'center' }}>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => editItem(id)}>
                      <EditIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => deleteItem(id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell >
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer >
  )


}

export default ListItems