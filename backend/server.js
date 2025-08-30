// backend/server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000;

// connect services
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());

// helper: parse comma-separated env values into array
function parseEnvList(envVar) {
  const raw = process.env[envVar];
  if (!raw) return [];
  return raw.split(',').map(s => s.trim()).filter(Boolean);
}

// allowed origins (from env, plus localhost dev ports)
const allowedOrigins = [
  ...parseEnvList('FRONTEND_URL'),
  ...parseEnvList('ADMIN_URL'),
  'http://localhost:5173', // local frontend dev
  'http://localhost:5174'  // local admin dev
];

// CORS middleware that uses allowedOrigins
app.use(
  cors({
    origin: function (origin, callback) {
      // allow server-to-server or tools that send no origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.warn('❌ Blocked by CORS:', origin);
        return callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// simple health route (useful for deploy checks)
app.get('/health', (req, res) => res.json({ ok: true, time: Date.now() }));

// api endpoints
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);

// root
app.get('/', (req, res) => {
  res.send('API WORKING');
});

// start
app.listen(port, () => console.log('✅ Server Started on port', port));
