import assert from 'node:assert/strict';
import { point } from './app.mjs';
assert.deepEqual(point(1,1,0,0),{x:0,y:0});
assert.equal(point(2,4,90,0).x,1);
assert.ok(Math.abs(point(1,1,0,Math.PI/2).y-1)<1e-12);
