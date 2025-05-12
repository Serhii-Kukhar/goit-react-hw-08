import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import {
  Paper,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setOpen(false);
  };

  const handleEdit = () => {
    dispatch(editContact({ id, name: editedName, number: editedNumber }));
    setOpenEdit(false);
  };

  useEffect(() => {
    setEditedName(name);
    setEditedNumber(number);
  }, [name, number]);

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          borderRadius: 3,
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Stack spacing={1}>
          <Box display="flex" alignItems="center" gap={1}>
            <FaUser color="#1976d2" />
            <Typography variant="subtitle1">{name}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <BsFillTelephoneFill color="#388e3c" />
            <Typography variant="body2" color="text.secondary">
              {number}
            </Typography>
          </Box>
        </Stack>
        <Box display="flex" gap={1}>
          <Tooltip title="Редагувати контакт">
            <IconButton onClick={() => setOpenEdit(true)} color="primary">
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Видалити контакт">
            <IconButton onClick={() => setOpen(true)} color="error">
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Видалити контакт</DialogTitle>
        <DialogContent>
          <Typography>
            Ви точно хочете видалити контакт <strong>{name}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => setOpen(false)}
            color="error"
            variant="contained"
          >
            Ні
          </Button>
          <Button onClick={handleDelete} color="success" variant="contained">
            Так
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
          Редагувати контакт
        </DialogTitle>

        <DialogContent>
          <TextField
            label="Ім'я"
            variant="outlined"
            fullWidth
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            sx={{ marginBottom: 2, marginTop: 1 }}
          />
          <TextField
            label="Номер телефону"
            variant="outlined"
            fullWidth
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", marginBottom: 2 }}>
          <Button
            onClick={() => setOpenEdit(false)}
            color="error"
            variant="contained"
          >
            Скасувати
          </Button>
          <Button onClick={handleEdit} color="success" variant="contained">
            Оновити
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;
