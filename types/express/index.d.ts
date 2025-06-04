// types/express/index.d.ts or somewhere in your project, e.g. `src/types/express.d.ts`
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}
