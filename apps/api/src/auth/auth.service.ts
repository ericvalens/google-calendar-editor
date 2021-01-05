import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { sign } from "jsonwebtoken";

const API_ENDPOINT = "http://localhost:4200";

@Injectable()
export class AuthService {
  constructor() {}

  private readonly JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

  googleSignIn(req, res) {
    if (!req.user) {
      return res.redirect(`${API_ENDPOINT}/login/failure`);
    } else {
      return res.redirect(
        `${API_ENDPOINT}/login/` + "?token=" + req.user.accessToken
      );
    }
  }

  async validateGoogleLogin(userId: string): Promise<string> {
    try {
      const payload = {
        userId: userId,
      };

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn: 3600,
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException(
        "validateGoogleLogin",
        err.message
      );
    }
  }
}
