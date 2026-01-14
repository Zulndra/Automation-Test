console.log('🧪 Running tests...\n');

let passed = 0;
let failed = 0;

// Helper functions
function assert(condition, testName) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.log(`❌ FAIL: ${testName}`);
    failed++;
  }
}

// Test 1: Check if app.js exists
const fs = require('fs');
assert(
  fs.existsSync('appppp.js'), 
  'app.js file exists'
);

// Test 2: Check if package.json exists
assert(
  fs.existsSync('package.json'), 
  'package.json file exists'
);

// Test 3: Math test
assert(
  2 + 2 === 4, 
  'Basic math works'
);

// Test 4: String test
assert(
  'hello'.toUpperCase() === 'HELLO', 
  'String manipulation works'
);

// Test 5: Array test
const arr = [1, 2, 3];
assert(
  arr.length === 3, 
  'Array length is correct'
);

// Test 6: Check package.json has required fields
const pkg = require('./package.json');
assert(
  pkg.name !== undefined, 
  'package.json has name field'
);

assert(
  pkg.version !== undefined, 
  'package.json has version field'
);

// Summary
console.log('\n' + '='.repeat(50));
console.log(`📊 Test Summary:`);
console.log(`   ✅ Passed: ${passed}`);
console.log(`   ❌ Failed: ${failed}`);
console.log('='.repeat(50));

// Exit with error code if tests failed
if (failed > 0) {
  console.log('\n❌ Some tests failed!');
  process.exit(1);
} else {
  console.log('\n🎉 All tests passed!');
  process.exit(0);
}