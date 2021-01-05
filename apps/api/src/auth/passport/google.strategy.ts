import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService, Provider } from "../auth.service";
import { UsersService } from "../users/users.service";
import { User } from "@webapp/api-interfaces";

const API_ENDPOINT = "http://localhost:3333";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(private readonly usersService: UsersService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `${API_ENDPOINT}/api/auth/google/redirect`,
      scope: ["email", "profile"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      name: name.givenName + name.familyName,
      picture: photos[0].value,
      accessToken,
    };

    // this.usersService
    //   .findOne(user.email)
    //   .then((u) => {
    //     if (!u) {
    //       this.usersService.create({ name: user.name, email: user.email });
    //     } else {
    //       return done(null, user);
    //     }
    //   })
    //   .catch((err) => {
    //     return done(null, false, { message: err });
    //   });

    return done(null, user);
  }
}
