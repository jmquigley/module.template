'use strict';

import * as assert from 'assert';
import {Fixture} from 'util.fixture';
import {debug} from './helpers';
import * as fs from 'fs-extra';

describe('Executing test suite', () => {

	after(() => {
		debug('final cleanup: test_artifacts');
		let directories = Fixture.cleanup();
		directories.forEach((directory: string) => {
			assert(!fs.existsSync(directory));
		});
	});

	it('Executing test', () => {
		let fixture = new Fixture();
		assert(fixture);
	});
});
