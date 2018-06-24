class QuickList {
	constructor(threshold) {
		// index of the head of list
		this._head = 0;

		// length of list
		this._len = 0;

		this._threshold = threshold != null ? threshold : 50;
		this._list = new Array(this._threshold);
	}

	/**
	 *	Adds an element to the end of the array
	 * 	@param  {object} elem 	The element to add
	 */
	push(elem) {
		this._list.push(elem);
		this._len++;
	}
	
	/**
	 *	Removes and returns the last element of the array
	 * 	@return  {object} elem  The last element, or undefined (if array is empty)
	 */
	pop() {
		if (this.isEmpty()) {
			return undefined;
		}

		this._len--;
		return this._list.pop();
	}

	/**
	 *	Adds an element to the front of the array
	 * 	@param	{object} elem  The element to add
	 */
	unshift(elem) {
		if (this._head === 0) {
			// if there is no space in the front, create buffer
			let arr = new Array(this._threshold);

			// Add buffer to front
			this._list = arr.concat(this._list);

			this._head = this._threshold;
		}

		this._list[--this._head] = elem;
		this._len++;
	}

	/**
	 *	Removes and returns the first element of the array
	 * 	@return  {object} elem  The last first element or undefined (if array is empty)
	 */
	shift() {
		if (this.isEmpty()) {
			return undefined;
		}

		let ret = this._list[this._head++];

		if (this._head === this._threshold) {
			this._list.splice(0, 50);

			// resets front index
			this._head = 0;
		}

		this._len--;

		return ret;
	}

	/**
	 *	Returns the element at the given index
	 * 	@param  {integer} index	The index of the element to retrieve
	 * 	@return {object} 		The element at the given index
	 */
	get(index) {
		return this._list[this._head + index];
	}

	/**
	 *	Returns true if the list is empty
	 * 	@return  {boolean}
	 */
	isEmpty() {
		return this._len === 0;
	}

	/**
	 *	Returns the length of the array (number of elements)
	 * 	@return  {integer} 	The length of the array
	 */
	length() {
		return this._len;
	}

	/**
	 *	Execute the provided function for each array element
	 *	@param  {function} fn  	The function that executes on each element
	 */
	forEach(fn) {
		for (let i = this._head; i < this._list.length; i++) {
			let elem = this._list[i];
			fn(this._list[i], i, this._list);
		}
	}

	/**
	 *	Creates a new array with the results of calling a provided function 
	 * 	on every element in the array
	 *	@param  {function} fn  	The function that executes on each element
	 *	@return {object}  		The result array
	 */
	map(fn) {
		let mappedList = [];

		for (let i = this._head; i < this._list.length; i++) {
			let elem = this._list[i];
			let mappedElem = fn(elem, i, this._list);

			mappedList.push(mappedElem);
		}

		return mappedList;
	}

	/**
	 *	Creates a new array with all elements that pass the test implemented 
	 *	by the provided function
	 *	@param  {function} fn  	The function that tests each element
	 *	@return {object}  		The result array
	 */
	filter(fn) {
		let filterList = [];

		for (let i = this._head; i < this._list.length; i++) {
			let elem = this._list[i];

			if (fn(elem, i, this._list)) {
				filterList.push(elem);
			}
		}

		return filterList;
	}

	/**
	 *	Applies a function against an accumulator and each element 
	 * 	in the array to reduce it to a single value
	 *	@param  {function} fn  		The function that applies element with accumulator
	 *	@param 	{any} initialVal  	The initial value
	 *	@return {object}  			The result array
	 */
	reduce(fn, initialVal) {
		let acc = initialVal;

		for (let i = this._head; i < this._list.length; i++) {
			let elem = this._list[i];
			if (acc != null) {
				acc = fn(acc, elem, i);
			} else {
				// first element if initialVal is undefined
				acc = elem;
			}
		}

		return acc;
	}
}