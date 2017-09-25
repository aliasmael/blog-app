import * as express from 'express'
import * as cors from 'cors'

// Import modules api routes
// import { blogRouter } from './modules/blog/routes/BlogRouter';
// import { fileRouter } from './modules/file/routes/FileRouter';
import { userRouter } from "./modules/user/routes/UserRouter"

export let apiRoutes = express.Router();

// use cors to allow host
apiRoutes.use(cors())

// use blog routes under /api/blog
// apiRoutes.use('/blog', blogRouter);

// use file routes under /api/file
// apiRoutes.use('/file', fileRouter);

// use file routes under /api/file
apiRoutes.use('/user', userRouter);