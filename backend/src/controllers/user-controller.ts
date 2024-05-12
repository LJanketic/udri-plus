import { Request, Response } from 'express';
import { DependencyInjection as DI } from '../config/dependency-injection/dependency-injection';
import { UserEntity } from '../entities';

// TODO: Luka add proper error handling
// TODO: Luka add proper update logic, extract what is possible to utils
const UserController = {
  async getAll(_req: Request, res: Response): Promise<Response> {
    try {
      const fetchedUsers: UserEntity[] | null = await DI.users.findAll();

      if (fetchedUsers.length === 0) {
        return res.status(404).json({ error: 'No users found!' });
      }

      return res.status(200).json(fetchedUsers);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'An error occurred while fetching all users!' });
    }
  },

  async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const fetchedUser: UserEntity | null = await DI.users.findOne(id);

      if (!fetchedUser) {
        return res.status(404).json({ error: `User ${id} not found.` });
      }

      return res.status(200).json(fetchedUser);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'An error occurred while fetching a user!' });
    }
  },

  async addOne(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body;

      const createdUser: UserEntity | null = new UserEntity(username, password);

      if (!createdUser) {
        return res.status(422).json({ error: 'Error creating a new user.' });
      }

      await DI.em.persistAndFlush(createdUser);

      return res.status(201).json(createdUser);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'An error occurred while adding new user!' });
    }
  },

  async updateOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { username, password, activated } = req.body;

      const userToUpdate: UserEntity | null = await DI.users.findOne(id);

      if (!userToUpdate) {
        return res.status(404).json({ error: `User ${id} not found!` });
      }

      userToUpdate.username = username ?? userToUpdate.username;
      userToUpdate.password = password ?? userToUpdate.password;
      userToUpdate.activated = activated ?? userToUpdate.activated;

      await DI.em.flush();

      return res.status(200).json(userToUpdate);
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'An error occurred while updating a user!' });
    }
  },

  async deleteOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const userToDelete: UserEntity | null = await DI.users.findOne(id);

      if (!userToDelete) {
        return res.status(404).json({ error: `User ${id} not found!` });
      }

      await DI.em.removeAndFlush(userToDelete);

      return res
        .status(200)
        .json({ message: `Successfully deleted user ${id}` });
    } catch (error) {
      return res
        .status(500)
        .json({ error: 'An error occurred while deleting a user!' });
    }
  },
};

export default UserController;
