/**
 * @extends Error
 */
class NodeAuthError extends Error {
	constructor(message, status, isPublic) {
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.status = status;
		this.isPublic = isPublic;
		this.isOperational = true;	// This is required since bluebird 4 doesn't append it anymore.
		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, this.constructor.name);
		} else {
			this.stack = (new Error(message)).stack;
		}
	}
}

export default NodeAuthError;
