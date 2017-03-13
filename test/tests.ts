'use strict';

import * as assert from 'assert';
import * as fs from 'fs-extra';
import {Fixture} from 'util.fixture';
import {debug} from './helpers';

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
