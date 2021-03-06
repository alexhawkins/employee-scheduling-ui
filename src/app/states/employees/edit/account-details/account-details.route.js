'use strict';

import template from './account-details.html!text';

function employeesAccountDetailsRoute($stateProvider) {
    'ngInject';
    return $stateProvider
        .state('employees.edit.account-details', {
            url: '/account-details',
            views: {
                'modal@': {
                    template: template
                }
            }
        });
}

export default employeesAccountDetailsRoute;
