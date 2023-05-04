const logger = require("./logger");
let instance = null;
class LoggerClass {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    #createLogObject(email, location, proc_type, log) {
        return {
            email, location, proc_type, log
        }
    }

    info(email, location, proc_type, log) {
        let logs = this.#createLogObject(email, location, proc_type, log);
        logger.info(logs);
    }

    warn(email, location, proc_type, log) {
        let logs = this.#createLogObject(email, location, proc_type, log);
        logger.warn(logs);
    }

    error(email, location, proc_type, log) {
        let logs = this.#createLogObject(email, location, proc_type, log);
        logger.error(logs);
    }

    verbose(email, location, proc_type, log) {
        let logs = this.#createLogObject(email, location, proc_type, log);
        logger.verbose(logs);
    }

    silly(email, location, proc_type, log) {
        let logs = this.#createLogObject(email, location, proc_type, log);
        logger.silly(logs);
    }

    http(email, location, proc_type, log) {
        let logs = this.#createLogObject(email, location, proc_type, log);
        logger.http(logs);
    }

    debug(email, location, proc_type, log) {
        let logs = this.#createLogObject(email, location, proc_type, log);
        logger.debug(logs);
    }
}

module.exports = new LoggerClass();