'use strict';

import {test} from 'ava';
import * as fs from 'fs-extra';
import {Fixture} from 'util.fixture';

test.after.always((t: any) => {
	console.log('final cleanup: {module name}');
	let directories = Fixture.cleanup();
	directories.forEach((directory: string) => {
		t.false(fs.existsSync(directory));
	});
});

test('Empty, template test case', (t: any) => {
	let fixture = new Fixture();
	console.log(`Using test directory: ${fixture.dir}`);
	t.pass();
});
