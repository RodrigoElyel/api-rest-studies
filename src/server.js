import app from "./app.js";

const PORT = 3001;

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
