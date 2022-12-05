import {AuthenticationStrategy} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import {TokenServiceBindings} from '../keys';
import {JWTService} from '../services/jwt-service';

export class JWTStrategy implements AuthenticationStrategy{
  name: string = 'jwt';

  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: JWTService
  ) {}

  async authenticate(request: Request): Promise<UserProfile | undefined>{
      const token: string = this.extractCredentials(request);
      const userProfile: UserProfile = await this.jwtService.verifyToken(token);
      return userProfile;
  }

  extractCredentials(request:Request):string{
    if(!request.headers.authorization){
      throw new HttpErrors.Unauthorized('Authoritaion header is missing');
    }
    const authHeaderValue = request.headers.authorization;
    if(!authHeaderValue.startsWith('Bearer')){
      throw new HttpErrors.Unauthorized(`Authorization header is not type of 'Bearer'`);
    }
    const parts = authHeaderValue.split(' ');
    if(parts.length !== 2){
      throw new HttpErrors.Unauthorized(`Authorization header has too many parts it await follow this pattern 'Bearer xx.yy.zz'`);
    }
    const token = parts[1];
    return token;
  }
}
