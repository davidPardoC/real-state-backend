export class CustomError extends Error {
    status: number

    constructor(message: string, status: number) {
        super()
        this.message = message
        this.status = status
    }
}

export class UnAuthorizedError extends CustomError {
    constructor(message = 'Unauthorized') {
        super(message, 401)
    }
}

export class NotFoundError extends CustomError {
    constructor(message = 'Not Found') {
        super(message, 404)
    }
}

export class ForbiddenError extends CustomError {
    constructor(message = 'Forbidden') {
        super(message, 403)
    }
}

export class ConflictError extends CustomError {
    constructor(message = 'Conflict') {
        super(message, 409)
    }
}
