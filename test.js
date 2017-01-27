'use strict';

const path = require('path');
const test = require('ava');
const timestamp = require('util.timestamp');
const home = require('expand-home-dir');

let unitTestDir = home(path.join('~/', '.tmp', `unit-test-data-${timestamp()}`));

test('Empty, template test case', t => {
	console.log(`Using test directory: ${unitTestDir}`);
	t.pass();
});
