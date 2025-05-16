import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route';
import establishmentRoutes from './routes/establishment.route';
import productRoutes from './routes/product.route';
import rulesRoutes from './routes/establishment-rules.route';

dotenv.config();

const app = express();+
app.use(express.json());  
app.use(userRoutes);
app.use(establishmentRoutes);
app.use(productRoutes);
app.use(rulesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
