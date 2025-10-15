import axios from 'axios';
import type { PatchUserParams, User } from '../types/api/users';
import { delay } from '../utils/delay';

/**
 * /users の API コールを提供するクラス
 */
class UsersApi {
  /**
   * GET /users/:id
   */
  async getUserById(userId: string) {
    // NOTE: 処理を遅らせる
    await delay(1000);
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
  }

  /**
   * GET /users
   */
  async getUsers() {
    // NOTE: 処理を遅らせる
    await delay(1000);
    const response = await axios.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
    return response.data;
  }

  /**
   * PATCH /users/:id
   */
  async patchUser(userId: string, params: PatchUserParams) {
    // NOTE: 処理を遅らせる
    await delay(1000);
    const response = await axios.patch<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      params
    );
    return response.data;
  }
}

export const usersApi = new UsersApi();
