import { Box, Typography, Button, Paper, Container } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleAddContactClick = () => {
    isLoggedIn ? navigate("/contacts") : navigate("/login");
  };
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Ласкаво просимо до Книги Контактів!
        </Typography>
        <Typography variant="h6" component="p">
          Тут ви можете зберігати, шукати та керувати своїми контактами. Додайте
          ваші нові контакти!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <Paper
          sx={{
            flex: 1,
            minWidth: "300px",
            p: 3,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Як це працює?
          </Typography>
          <Typography variant="body1" component="p">
            Для того, щоб додати новий контакт, просто натисніть кнопку. Ви
            зможете ввести ім'я та телефон щоб зберегти її для подальшого
            використання.
          </Typography>
        </Paper>

        <Paper
          sx={{
            flex: 1,
            minWidth: "300px",
            p: 3,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Ваші контакти
          </Typography>
          <Typography variant="body1" component="p">
            Список ваших контактів буде відображений у вкладці Контакти. Ви
            зможете шукати контакти за ім'ям або переглядати всі контакти в
            зручному вигляді.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={handleAddContactClick}
            >
              Додати контакт
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
