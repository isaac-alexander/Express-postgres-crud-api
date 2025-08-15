import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../modules/userModel.js";

// Standardized response function 
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data, //if no data pass the null value
    });
};

export const createUser = async (req, res, next) => {
    const { name, email } = req.body; // destructure the name and the email coming from the request body
    try {
        const newUser = await createUserService(name, email); // call the create user service and pass the name and email
        handleResponse(res, 201, "User created successfully", newUser) // call the handleResponse and pass the values and the new user created
    } catch (err) {
        next(err); // passes the error to the error handler middleware
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService(); // call the getAllUsersService
        handleResponse(res, 200, "Users fetched successfully", users) // call the handleResponse and pass the values and users
    } catch (err) {
        next(err); // passes the error to the error handler middleware
    }
};


export const getUserById = async (req, res, next) => {
    try {
        const user = await getUserByIdService(req.params.id); // call the getUserByIdService in the request params we'll have the id and get back a single user
        if (!user) return handleResponse(res, 404, "User not found") // if there's no user
        handleResponse(res, 200, "User fetched successfully", user) // call the handleResponse and pass the values and user
    } catch (err) {
        next(err); // passes the error to the error handler middleware
    }
};

export const updateUser = async (req, res, next) => {
    const { name, email } = req.body; // destructure the name and the email coming from the request body
    try {
        const updatedUser = await updateUserService(req.params.id, name, email); // call the updateUserService in the request params we'll have the id, name and email to be updated
        if (!updatedUser) return handleResponse(res, 404, "User not found") // if there's no user
        handleResponse(res, 200, "User updated successfully", updatedUser) // call the handleResponse and pass the values and updatedUser
    } catch (err) {
        next(err); // passes the error to the error handler middleware
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await deleteUserService(req.params.id); // call the deleteUserService in the request params we'll have the id of the user to be deleted
        if (!deletedUser) return handleResponse(res, 404, "User not found") // if there's no user
        handleResponse(res, 200, "User deleted successfully", deletedUser) // call the handleResponse and pass the values and deletedUser
    } catch (err) {
        next(err); // passes the error to the error handler middleware
    }
};