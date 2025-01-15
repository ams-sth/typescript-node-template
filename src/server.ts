import app from "./app";

const startServer = () => {
  try {
    const port = process.env.PORT || 5000;

    // Start the server and log a message indicating it's running
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Failed to connect to database", error);
    process.exit(1);
  }
};

startServer();
