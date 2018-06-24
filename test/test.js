const QuickList = require('../src/quicklist.js');
const expect = require('chai').expect;

describe('Creating a QuickList', function() {
	it('should have default values', function() {
		const q = new QuickList();
		expect(q._list).to.be.empty;
		expect(q._threshold).to.equal(50);
		expect(q._head).to.equal(0);
		expect(q._len).to.equal(0);
	});

	it('threshold is initialized by given value', function() {
		const q = new QuickList(100);
		expect(q._threshold).to.equal(100);
	});
});

describe('Adding elements', function() {
	let q;

	beforeEach(function() {
		q = new QuickList();
	});

	it("push()", function() {
		const elem1 = 1;
		const elem2 = "hello this is a test";
		const elem3 = { a: "b", c: "d" };

		q.push(elem1);
		q.push(elem2);
		q.push(elem3);

		expect(q.get(0)).to.equal(elem1);
		expect(q.get(1)).to.equal(elem2);
		expect(q.get(2)).to.equal(elem3);
	});

	it("unshift()", function() {
		const elem1 = 1;
		const elem2 = "hello this is a test";
		const elem3 = { a: "b", c: "d" };

		q.unshift(elem1);
		q.unshift(elem2);
		q.unshift(elem3);

		expect(q.get(2)).to.equal(elem1);
		expect(q.get(1)).to.equal(elem2);
		expect(q.get(0)).to.equal(elem3);
	});
});

describe('Removing elements', function() {
	let q;
	const elem1 = 1;
	const elem2 = "hello this is a test";
	const elem3 = { a: "b", c: "d" };


	beforeEach(function() {
		q = new QuickList();
		q.push(elem1);
		q.push(elem2);
		q.push(elem3);
	});

	it("pop()", function() {
		expect(q.pop()).to.equal(elem3);
		expect(q.pop()).to.equal(elem2);
		expect(q.pop()).to.equal(elem1);
		expect(q.pop(), "popping empty list").to.be.undefined;
	});

	it("shift()", function() {
		expect(q.shift()).to.equal(elem1);
		expect(q.shift()).to.equal(elem2);
		expect(q.shift()).to.equal(elem3);
		expect(q.shift(), "shifting empty list").to.be.undefined;
	});
});

describe('Testing threshold', function() {
	let q;

	beforeEach(function() {
		q = new QuickList();

		for (let i = 0; i < q._threshold; i++) {
			q.push(i);
		}
	});

	it('Adding to front should increase list size', function() {
		q.unshift("hello");
		expect(q._list.length).to.equal(100);
	});

	it('Removing from the front should decrease list size', function() {
		q.unshift("hello");
		expect(q._list.length).to.equal(100);

		q.shift();
		expect(q._list.length).to.equal(50);
	});
});

describe('forEach()', function() {
	let q;

	before(function() {
		q = new QuickList();

		for (let i = 0; i < 10; i++) {
			q.push(i);
		}
	});

	it('should do stuff to each element', function() {
		let expectedAns = 1;
		q.forEach(function(elem) {
			let changedElem = elem + 1;
			expect(changedElem).to.equal(expectedAns++);
		});
	});
});

describe('map()', function() {
	let q;

	before(function() {
		q = new QuickList();

		for (let i = 0; i < 10; i++) {
			q.push(i);
		}
	});

	it('should return new list with stuff done to each element', function() {
		let actualList = q.map(function(elem) {
			return elem + 1;
		});

		let expectedAns = 1;
		for (let i = 0; i < actualList; i++) {
			expect(actualList[i]).toEqual(expectedAns++);
		}
	});
});

describe('filter()', function() {
	let q;

	before(function() {
		q = new QuickList();

		for (let i = 0; i < 10; i++) {
			q.push(i);
		}
	});

	it('should return new list with filtered elements (even numbers)', function() {
		let actualList = q.filter(function(elem) {
			return elem & 1 === 0;
		});

		for (let i = 0; i < actualList; i++) {
			expect(actualList[i] % 2 === 0).to.be.true;
		}
	});
});

describe('reduce()', function() {
	let q;

	before(function() {
		q = new QuickList();

		for (let i = 0; i < 10; i++) {
			q.push(i);
		}
	});

	it('should return a single number which is the sum of all elements', function() {
		let sum = q.reduce(function(acc, elem) {
			return acc + elem;
		});

		expect(sum).to.equal(45);
	});
});

