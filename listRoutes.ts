'use strict';

import { OperationsManager } from './controllers/Operations.js';

export function routes(app: any) {
    const operation: OperationsManager = new OperationsManager();

    // Route the webservices
    app.route('/test').post(operation.test);

}

export default routes