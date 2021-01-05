import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";

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
    const { id, name, emails, photos } = profile;

    const user = {
      id,
      email: emails[0].value,
      name: name.givenName + " " + name.familyName,
      picture: photos[0].value,
      accessToken,
    };

    await this.usersService
      .findOne(user.id)
      .then((u) => {
        if (!u) {
          this.usersService.create(user);
        }
        done(null, user);
      })
      .catch((err) => {
        return done(null, false, { message: err });
      });
  }
}
