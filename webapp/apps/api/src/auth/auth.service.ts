import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

export enum Provider {
  GOOGLE = 'google',
}

const API_ENDPOINT = 'http://localhost:4200';

@Injectable()
export class AuthService {
  constructor() {}

  private readonly JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

  googleLogin(req, res) {
    if (!req.user) {
      return res.redirect(`${API_ENDPOINT}/failure`);
    } else {
      return res.redirect(`${API_ENDPOINT}/calendar/` + req.user.jwt);
    }
  }

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider
  ): Promise<string> {
    try {
      const payload = {
        thirdPartyId,
        provider,
      };

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn: 3600,
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }
}
