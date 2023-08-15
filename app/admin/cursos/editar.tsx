import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function editar() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Crear Nuevo Curso
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Editar Información</DialogTitle>
          <DialogContent>
            <form>
                <div className="">
                    <label>
                        Nombre
                        <input
                        required
                        type="text"
                        name="nombre"
                        id="nombre_curso"
                        placeholder="Curso"
                        className="form-control"></input>
                    </label>
                </div>

                <div className="">
                    <label>
                        Tipo
                        <input
                        required
                        type="text"
                        name="tipo"
                        id="tipo_curso"
                        placeholder="Tipo_Curso"
                        className="form-control"></input>
                    </label>
                </div>
            
            </form>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            
            <Button onClick={handleClose} type="submit" variant="contained">Ingresar</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}