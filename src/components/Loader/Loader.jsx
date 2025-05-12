import { CircularProgress, Box } from "@mui/material";

const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
    <CircularProgress size={60} color="primary" />
  </Box>
);

export default Loader;
