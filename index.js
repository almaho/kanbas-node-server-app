import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import session from "express-session";
import "dotenv/config";

const app = express()
UserRoutes(app);
app.use(
    cors({
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        origin: process.env.NETLIFY_URL || 'https://6748e4e850b97d906c52f53c--splendorous-donut-75047d.netlify.app',
    })
);


      const sessionOptions = {
        secret: process.env.SESSION_SECRET || "kanbas",
        resave: false,
        saveUninitialized: false,
      };
      if (process.env.NODE_ENV !== "development") {
        sessionOptions.proxy = true;
        sessionOptions.cookie = {
          sameSite: "none",
          secure: true,
          domain: process.env.NODE_SERVER_DOMAIN,
        };
      }
      app.use(session(sessionOptions));
      
      
app.use(express.json());

UserRoutes(app);
CourseRoutes(app);

ModuleRoutes(app);
AssignmentRoutes(app)
Hello(app)
Lab5(app)
app.listen(process.env.PORT || 4000)
