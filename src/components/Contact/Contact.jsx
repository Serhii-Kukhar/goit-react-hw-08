import { useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
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
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false); // Стан для модального вікна

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setOpen(false);
  };

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
        <Tooltip title="Видалити контакт">
          <IconButton onClick={() => setOpen(true)} color="error">
            <Delete />
          </IconButton>
        </Tooltip>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Видалити контакт</DialogTitle>
        <DialogContent>
          <Typography>
            Ви точно хочете видалити контакт <strong>{name}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            color="success"
            variant="contained"
          >
            Ні
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Так
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;
