import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import Users from "../entities/Users";

export class UserController {
    private userRepository = getRepository(Users);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository
            .createQueryBuilder("users")
            .select(
                [
                    "users.id",
                    "users.username",
                    "users.name",
                    "users.first_name",
                    "users.last_name",
                    "users.created_at",
                    "users.created_by",
                    "users.updated_at",
                    "users.updated_by"
                ]
            )
            .getMany();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository
            .createQueryBuilder("users")
            .select(
                [
                    "users.id",
                    "users.username",
                    "users.name",
                    "users.first_name",
                    "users.last_name",
                    "users.created_at",
                    "users.created_by",
                    "users.updated_at",
                    "users.updated_by"
                ]
            )
            .where("users.id = :id", { id: request.params.id })
            .getOne()
            .catch(e => {
                return {
                    status: 500,
                    message: e.message
                }
            });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove: Users | undefined = await this.userRepository.findOne(request.params.id);
        if (userToRemove) {
            await this.userRepository.remove(userToRemove);
        }
    }
}