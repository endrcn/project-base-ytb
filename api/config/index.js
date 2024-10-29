module.exports = {
    "PORT": process.env.PORT || "3000",
    "LOG_LEVEL": process.env.LOG_LEVEL || "debug",
    "CONNECTION_STRING": process.env.CONNECTION_STRING || "mongodb://localhost:27017/project_base_ytb",
    "JWT": {
        "SECRET": process.env.JWT_SECRET || "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9eyJpZCI6IjY0NjY5OGUwZTUzYmI4MWVhYzlmYTc4NSIsImV4cCI6MTQ5NDg5NDk2NDMyMDAwfQv0SJjaBuR7SrLmvhVWxAiKgz4T4_rX55wHlD9CfBW10lmYTc4NSIsImV4cCI6MTQ5NDg5NDk2NDMyiLCJhbGciOiJI",
        "EXPIRE_TIME": !isNaN(parseInt(process.env.TOKEN_EXPIRE_TIME)) ? parseInt(process.env.TOKEN_EXPIRE_TIME) : 24 * 60 * 60 // 86400
    },
    "FILE_UPLOAD_PATH": process.env.FILE_UPLOAD_PATH,
    "DEFAULT_LANG": process.env.DEFAULT_LANG || "EN"
}