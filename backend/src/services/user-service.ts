import {UserService} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import {PasswordHasherBindings} from '../keys';
import {User} from '../models';
import {Credentials, UserRepository} from '../repositories';
import {BcryptHasher} from './hash.password.bcrypt';

export class MyUserService implements UserService<User, Credentials>{
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher
  ){}

  async verifyCredentials(credentials: Credentials): Promise<User> {
    const foundUser = await this.userRepository.findOne({
      where:{
        email: credentials.email
      }
    });
    if(!foundUser){
      throw new HttpErrors.NotFound(`user not found with ${credentials.email}`);
    }
    const passwordMatched = await this.hasher.comparePassword(credentials.password, foundUser.password);
    if(!passwordMatched){
      throw new HttpErrors.Unauthorized('password is not valid');
    }
    return foundUser;
  }
  convertToUserProfile(user: User): UserProfile {
    let username = '';
    if(user.username){
      username = user.username;
    }
    return {
      [securityId]: `${user.id}`,
      id: user.id,
      username: username,
      email: user.email
    }
  }

}
