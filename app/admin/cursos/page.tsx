"use client"

import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box"
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Link from 'next/link';
import { AiFillDelete, AiFillEdit} from "react-icons/ai";
import Editar from './editar';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },{
    field: 'Acciones   .',
    headerName: 'Acciones   .',
    renderCell: (cellVaues)=>{
      return(
        <>
        
        <li className="sidebar_item">
            <Link href="/captador" className="sidebar_link_dos">
              <span className="sidebar_icon">
                    <AiFillEdit/>
              </span>
            </Link>
        </li>

        <li className="sidebar_item">
            <Link href="/captador" className="sidebar_link_dos">
              <span className="sidebar_icon">
                    <AiFillDelete/>
              </span>
            </Link>
        </li>
        </>
        
      )
    }
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



export default function page() {
  return (
    <div className='data'>
          <br/>
          <label className='titulo'>Bievenido! Al area de Administración de Cursos</label>
          <div className="data_table">
                <Box sx={{ height: 450, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 6,
                      },
                    },
                  }}
                  pageSizeOptions={[6]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  />
                </Box>
                <br/>
                <Editar/>
          </div>
         
    </div>
    
    
  )
}
