// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {getJsonSchemaRef, post, requestBody} from '@loopback/rest';
import * as _ from 'lodash';
import {User} from '../models';
import {UserRepository} from '../repositories';
import {validateCredentials} from '../services/validator';

// import {inject} from '@loopback/core';


export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository
  ) {}

  @post('/signup',{
    responses:{
      '200':{
        description:'User',
        content:{
          schema: getJsonSchemaRef(User),
        }
      }
    }
  })
  async signup(@requestBody() userData : User){
    validateCredentials(_.pick(userData, ['email', 'password']));
    const savedUser = await this.userRepository.create(userData);
    userData.created = Date();
    userData.modified = Date();
    return savedUser;
  }
}
