import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom"
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

  let items = useSelector(state => state.data.items);
  
  
  console.log(items)
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
  // let draggedItem = items[0];
  // let draggedIdx;
  // const onDragStart = (e, index) => {
  //   draggedItem = items[index];
  //   e.dataTransfer.effectAllowed = "move";
  //   e.dataTransfer.setData("text/html", e.target.parentNode);
  //   e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  // };
  // const onDragOver = index => {
  //   const draggedOverItem = items[index];

  //   // if the item is dragged over itself, ignore
  //   if (this.draggedItem === draggedOverItem) {
  //     return;
  //   }

  //   // filter out the currently dragged item
  //   let newItems = items.filter(item => item !== draggedItem);

  //   // add the dragged item after the dragged over item
  //   items.splice(index, 0, draggedItem);

  //   items = newItems;
  // };

  // const onDragEnd = () => {
  //   draggedIdx = null;
  // };
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
          {items.map((item, idx )=> {
            const { id, name, description, watchers_count, language, open_issues, private: privates } = item
            return (
              
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                draggable
                // onDragOver={() => this.onDragOver(idx)}
                // onDragStart={e => onDragStart(e, idx)}
                // onDragEnd={ () => onDragEnd()}
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