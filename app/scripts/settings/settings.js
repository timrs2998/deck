'use strict';

angular.module('deckApp.settings', [])
  .constant('settings', {
    feedbackUrl: 'http://hootch.test.netflix.net/submit',
    gateUrl: 'http://localhost:8084',
    accounts: {
      prod: {
        challengeDestructiveActions: true
      }
    },
    pollSchedule: 30000,
    primaryAccounts: ['test'],
    primaryRegions: ['eu-west-1','us-east-1','us-west-1','us-west-2'],
    defaults: {
      account: 'test',
      region: 'us-east-1'
    },
    authEnabled: true
  });

window.tracking = {
  enabled: false, // set to true to enable GA tracking
  key: 'key goes here',
};
