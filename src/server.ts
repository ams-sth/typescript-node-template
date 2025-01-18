import app from "./app";
import 'colorts/lib/string';

const startServer = () => {
  try {
    const PORT = 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`.green.underline.bold);
    });
  } catch (error) {
    console.error("Failed to start server \n".red.bold, error);
    process.exit(1);
  }
};

startServer();