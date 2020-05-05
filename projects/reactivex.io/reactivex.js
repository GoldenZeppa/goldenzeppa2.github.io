/*
 * This is a series of exercises to use functional programming to manipulate 
 * collections. Most of the operations performed on collections can be 
 * accomplished with five functions (some native to JavaScript and some
 * included in the Microsoft's Reactive Extensions (Rx) for JavaScript (JS)
 * Library:
 *		1. map
 *		2. filter
 *		3. concatAll
 *		4. reduce
 *		5. zip
 * With these 5 functions the code will become shorter, more self-descriptive, 
 * and more durable. Also, these five functions hold the key to simplifying 
 * asynchronous programming. These excercises provide the tools needed to 
 * easily avoid race conditions, propagate and handle asynchronous errors, and 
 * sequence events and AJAX requests.
 *
 * http://reactivex.io/learnrx/
 */

// WORKING WITH ARRAYS

// Traversing an Array

// 1. Print all the names in an array
function(console) {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
	var counter;
	
	for(counter = 0; counter < names.length; counter++) {
		console.log(names[counter]);
	}
}

// 2. Use forEach to print all the names in an array
function(console) {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
	
	names.forEach(function(name) {
		console.log(name);
	});
}
	
// Projecting Arrays
// 
// Applying a function to a value and creating a new value is called a 
// projection.  To project one array into another, apply a projection function
// to each item in the array and collect the results in a new array.
//
// All array projections share two operations in common:
//		1. Traverse the source array
//		2. Add each item's projected value to a new array
//
// To make projections easier, use a map function.  Map accepts the projection
// function to be applied to each item in the source array, and returns the 
// projected array.

// 3. Project an array of videos into an array of {id, title} pairs using forEach()
function() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];
	var videoAndTitlePairs = [];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate {id, title} pairs from each video.
	// Put the results into the videoAndTitlePairs array using the Array's
	// push() method. Example: videoAndTitlePairs.push(newItem);
	
	newReleases.forEach(video => {
		videoAndTitlePairs.push({ id: video.id, title: video.title });
	});
	
	// ------------ INSERT CODE HERE! -----------------------------------
	return videoAndTitlePairs;
}

// 4. Implement map()
Array.prototype.map = function(projectionFunction) {
	var results = [];
	
	this.forEach(function(itemInArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the projectionFunction to each item in the array and add
		// each result to the results array.
		// Note: you can add items to an array with the push() method.
		
		results.push(projectionFunction(itemInArray));
		
		// ------------ INSERT CODE HERE! ----------------------------
	});
	return results;
};
// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

// 5. Use map() to project an array of videos into an array of {id, title} pairs
function() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Use map function to accumulate {id, title} pairs from each video.
	
	return newReleases.map(video => {
		return { id: video.id, title: video.title };
	});   // finish this expression!
	
	// ------------ INSERT CODE HERE! -----------------------------------
}

// Filtering Arrays
//
// To filter an array, apply a test to each item in the array and collect the 
// items that pass into a new array.
//
// Every array filtering shares two operations in common:
//		1. Traverse the array
//		2. Add objects that pass the test to a new array
//
// To make filtering easier, use a filter function.  Filter accepts the a 
// predicate.  A predicate is a function that accepts an item in the array, and 
// returns a boolean indicating whether the item should be retained in the new 
// array.

// 6. Use forEach() to collect only those videos with a rating of 5.0
function() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];
	var videos = [];
	
	// ------------ INSERT CODE HERE! -----------------------------------
	// Use forEach function to accumulate every video with a rating of 5.0

	newReleases.forEach(video => {
		if (video.rating === 5.0) {
			videos.push(video);
		}
	});

	// ------------ INSERT CODE HERE! -----------------------------------
	return videos;
}

// 7. Inplement filter()
Array.prototype.filter = function(predicateFunction) {
	var results = [];
	
	this.forEach(function(itemInArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the predicateFunction to each item in the array.
		// If the result is truthy, add the item to the results array.
		// Note: remember you can add items to the array using the array's
		// push() method.

		if (predicateFunction(itemInArray)) {
			results.push(itemInArray);
		}

		// ------------ INSERT CODE HERE! ----------------------------
	});
	return results;
};
// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

// Query Data by Chaining Method Calls

// 8. Chain filter and map to collect the ids of videos that have a rating of 5.0
function() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];
	
	// ------------ INSERT CODE HERE! -----------------------------------
	// Chain the filter and map functions to select the id of all videos
	// with a rating of 5.0.

	return newReleases
		.filter(video => video.rating === 5.0) 
		.map(ratedVideo => ratedVideo.id);   // Complete this expression
	
	// ------------ INSERT CODE HERE! -----------------------------------
}

// Querying Trees
//
// Trees pose a challenge, because they need to be flattened into arrays in 
// order to apply filter() and map() operations.
//
// Flattening trees with nested forEach expressions is easy, because items can 
// be explicitly added to the array.  Unfortunately, it's exactly this type of 
// low-level operation that we've been trying to abstract away with functions
// like map() and filter().  
//
// The concatAll() function iterates over each sub-array and collects the 
// results in a new, flat array.  Notice that the concatAll() function expects 
// each item in the array to be another array.
//
// Notice that map() and concatAll() are very commonly chained together.  If 
// dealing with a tree several levels deep, this combination will repeat many 
// times in the code.
//
// The concatMap() function is just a map() operation followed by a 
// concatAll().  Instead of using map().concatAll() to flatten a tree, just use
// concatMap().  It is a very common pattern to see several nested concatMap()
// operations, with the last operation being a map()/

// 9. Flatten the movieLists array into an array of video ids
function() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "Dramas",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];
	var allVideoIdsInMovieLists = [];
	
	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use two nested forEach loops to flatten the movieLists into a list of
	// video ids.

	movieLists.forEach(list => {
		list.videos.forEach(video => {
			allVideoIdsInMovieLists.push(video.id);
		});
	});

	// ------------   INSERT CODE HERE!  -----------------------------------
	return allVideoIdsInMovieLists;
}

// 10. Implement concatAll()
Array.prototype.concatAll = function() {
	var results = [];
	
	this.forEach(function(subArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Add all the items in each subArray to the results array.
		
		subArray.forEach(item => results.push(item));
        
		// Show answer button provided this solution:
		// results.push.apply(results, subArray);

		// ------------ INSERT CODE HERE! ----------------------------
	});
	return results;
};
// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

// 11. Use map() and concatAll() to project and flatten the movieLists into an array of video ids
function() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "Dramas",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];
	
	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use map and concatAll to flatten the movieLists in a list of video ids.
	
	return movieLists
		.map(list => list.videos)
		.concatAll()
		.map(video => video.id);   // Complete this expression!
	
	// Show answer button provided this solution:
	// return movieLists.map( function(movieList) {
	// 	return movieList.videos.map(function(video) {
	// 		return video.id;
	// 	});
	// }).concatAll();
	
	// ------------   INSERT CODE HERE!  -----------------------------------
}

// 12. Retrieve id, title, and a 150x200 box art url for every video
function() {
	var movieLists = [
		{
			name: "Instant Queue",
			videos : [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "New Releases",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
						{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];
	
	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists
		.map(list => list.videos)
		.concatAll()
		.map(video => video.boxarts
			.filter(art => art.width === 150)
			.map(art => {
				return {id: video.id, title: video.title, boxart: art.url}
			})
		)
		.concatAll();   // Complete this expression!
}

// 13. Implement concatMap()
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this
		.map(function(item) {
			// ------------   INSERT CODE HERE!  ----------------------------
			// Apply the projection function to each item. The projection
			// function will return a new child array. This will create a
			// two-dimensional array.

			return projectionFunctionThatReturnsArray(item);

			// ------------   INSERT CODE HERE!  ----------------------------
		})
		// apply the concatAll function to flatten the two-dimensional array
		.concatAll();
};
/*
	var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
	// collect all the words for each number, in every language, in a single, flat list
	var allWords = [0,1,2].
		concatMap(function(index) {
			return spanishFrenchEnglishWords[index];
		});
	return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/

// 14.  Use concatMap() to retrieve id, title, and 150x200 box art for every video
function() {
	var movieLists = [
		{
			name: "Instant Queue",
			videos : [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "New Releases",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
						{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];
	
	// Use one or more concatMap, map, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists
		.concatMap(list => list.videos)
		.concatMap(video => video.boxarts
			.filter(art => art.width === 150)
			.map(art => {
				return {id: video.id, title: video.title, boxart: art.url};
			})
		);   // Complete this expression!
}	

// Reducing Arrays
//
// Sometimes an operation needs to be performed on more than one item in the 
// array at the same time.  The filter() operation is not an option, because it 
// only examines one item at a time.
//
// A function can handles the array traversal process.  At each step, a 
// function would apply a closure to the last value and the current value and
// use the ressult as the last value the next time.  Finally, there would only 
// be one value.  This process is known as reducing, because the many values 
// are reduced to a single value.
//
// Sometimes when reducing an array, we want the reduced value to be a 
// different type than the items stored in the array.

// 15. Use forEach to find the largest box art
function() {
	var boxarts = [
		{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
		{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
		{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
		{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
	];
	var currentSize;
	var maxSize = -1;
	var largestBoxart;

	boxarts.forEach(function(boxart) {
		currentSize = boxart.width * boxart.height;
		if (currentSize > maxSize) {
			largestBoxart = boxart;
			maxSize = currentSize;
		}
	});
	return largestBoxart;
}

// 16. Implement reduce()
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];
Array.prototype.reduce = function(combiner, initialValue) {
	var counter;
	var accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}
		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one value.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}
		return [accumulatedValue];
	}
};

// 17. Retrieve the largest rating
function() {
	var ratings = [2,3,1,4,5];

	// You should return an array containing only the largest rating. Remember that reduce always
	// returns an array with one item.
	
	return ratings.reduce((largest, rating) => {
			if (largest > rating) {
				return largest;
			}
			else {
				return rating;
			}
		});   // Complete this expression
}

// 18. Retrieve url of the largest boxart
function() {
	var boxarts = [
		{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
		{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
		{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
		{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
	];

	// You should return an array containing only the URL of the largest box art. Remember that reduce always
	// returns an array with one item.
	
	return boxarts
		.reduce((largestArt, art) => {
			if (largestArt.width * largestArt.height > art.width * art.height) {
				return largestArt;
			}
			else {
				return art;
			}
		}, {})
		.map(art => art.url);   // Complete this expression
}

// 19. Reducing with an initial value
function() {
	var videos = [
		{
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"id": 675465,
			"title": "Fracture"
		},
		{
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"id": 654356453,
			"title": "Bad Boys"
		}
	];
	
	// Expecting this output...
	// [
	//	 {
	//		 "65432445": "The Chamber",
	//		 "675465": "Fracture",
	//		 "70111470": "Die Hard",
	//		 "654356453": "Bad Boys"
	//	 }
	// ]
	return videos
		.reduce(function(accumulatedMap, video) {
			var obj = {};
			// ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
			// ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----
		
			obj[video.id] = video.title;

			// Object.assign() takes all of the enumerable properties from
			// the object listed in its second argument (obj) and assigns them
			// to the object listed in its first argument (accumulatedMap).
			return Object.assign(accumulatedMap, obj);
		},
		// Use an empty map as the initial value instead of the first item in
		// the list.
		{});
}

// 20. Retrieve the id, title, and smallest box art url for every video
function() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id:432534, time:65876586 }]
				}
			]
		},
		{
			name: "Thrillers",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
						{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id:432534, time:65876586 }]
				}
			]
		}
	];

	// Use one or more concatMap, map, and reduce calls to create an array with the following items (order matters)
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists
		.concatMap(function(movieList) {
			return movieList.videos
		})
		.concatMap(video => video.boxarts
			.reduce((smallestArt, art) => {
				if (smallestArt.width * smallestArt.height < art.width * art.height) {
					return smallestArt;
				}
				else {
					return art;
				}
			}, {})
			.map(art => {
				return {id: video.id, title: video.title, boxart: art.url};
			})
		);   // Complete this expression
}

// Zipping Arrays
//
// Sometimes we need to combine two arrays by progressively taking an item from 
// each and combining the pair.
//
// The zip() function accepts a combiner function, traverses each array at the 
// same time, and calls the combiner function on th current item on the 
// left-hand-side and right-hand-side.  The zip() function requires an item 
// from each array in order to call the combiner function; therefore, the array 
// returned by zip will only be as large as the smallest input array.

// 21.  Combine videos and bookmarks by index
function() {
	var videos = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
		}
	];
	var bookmarks = [
		{id: 470, time: 23432},
		{id: 453, time: 234324},
		{id: 445, time: 987834}
	];
	var counter;
	var videoIdAndBookmarkIdPairs = [];

	for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
		// Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
		
		videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
	
	}
	return videoIdAndBookmarkIdPairs;
}

// 22. Implement zip
// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'
Array.zip = function(left, right, combinerFunction) {
	var counter;
	var results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		// Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
		
		results.push(combinerFunction(left[counter], right[counter]));
		
	}
	return results;
};

// 23. Combine videos and bookmarks by index
function() {
	var videos = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
		}
	];
	var bookmarks = [
		{id: 470, time: 23432},
		{id: 453, time: 234324},
		{id: 445, time: 987834}
	];

	return Array.
		zip(videos, bookmarks, function(video, bookmark) { 
			return {videoId: video.id, bookmarkId: bookmark.id};
		});   //... finish this expression
}

// 24. Retrieve each video's id, title, middle interesting moment time, and smallest box art url
function() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"interestingMoments": [
						{ type: "End", time:213432 },
						{ type: "Start", time: 64534 },
						{ type: "Middle", time: 323133}
					]
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"interestingMoments": [
						{ type: "End", time:54654754 },
						{ type: "Start", time: 43524243 },
						{ type: "Middle", time: 6575665}
					]
				}
			]
		},
		{
			name: "Instant Queue",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"interestingMoments": [
						{ type: "End", time:132423 },
						{ type: "Start", time: 54637425 },
						{ type: "Middle", time: 3452343}
					]
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
						{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"interestingMoments": [
						{ type: "End", time:45632456 },
						{ type: "Start", time: 234534 },
						{ type: "Middle", time: 3453434}
					]
				}
			]
		}
	];

	//------------ COMPLETE THIS EXPRESSION --------------
	
	return movieLists.concatMap( list => {
			return list.videos.concatMap(video => { 
				return Array.zip(
					video.boxarts.reduce((smallestArt, art) => {
						if (smallestArt.width * smallestArt.height < art.width * art.height) {
							return smallestArt;
						} else {
							return art;
						}
					}), 
					video.interestingMoments.filter( moment => moment.type === "Middle"),
					function(boxart, moment) {
						return {id: video.id, title: video.title, time: moment.time, url: boxart.url};
					}
				);
			});    
		});
		
}

// Powerful Queries
//
// When information is organized in a tree like a JSON expression, 
// relationships point from parent to child.  In relational systems like 
// databases, relationships point from children to their parents.  Both ways of 
// organizing information are equivalent.  The 5 query functions can easily 
// convert these represntations.  In other words, not only can you query arrays 
// from trees, you can query trees from arrays.

// 25. Converting from Arrays to Trees
function() {
	var lists = [
		{
			"id": 5434364,
			"name": "New Releases"
		},
		{
			"id": 65456475,
			"name": "Thrillers"
		}
	];
	var videos = [
		{
			"listId": 5434364,
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"listId": 5434364,
			"id": 675465,
			"title": "Fracture"
		},
		{
			"listId": 65456475,
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"listId": 65456475,
			"id": 654356453,
			"title": "Bad Boys"
		}
	];
	
	return lists.map(list => {
		return {
			name: list.name, 
			videos: videos
				.filter(video => list.id === video.listId)
				.map(listVideo => { 
					return {id: listVideo.id, title: listVideo.title};
				})
		};
	});   // complete this expression
}
		
// 26. Converting from Arrays to Deeper Trees
function() {
	var lists = [
		{
			"id": 5434364,
			"name": "New Releases"
		},
		{
			"id": 65456475,
			name: "Thrillers"
		}
	];
	var videos = [
		{
			"listId": 5434364,
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"listId": 5434364,
			"id": 675465,
			"title": "Fracture"
		},
		{
			"listId": 65456475,
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"listId": 65456475,
			"id": 654356453,
			"title": "Bad Boys"
		}
	];
	var boxarts = [
		{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
		{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
		{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
		{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
		{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
		{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
		{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
		{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
		{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
	];
	var bookmarks = [
		{ videoId: 65432445, time: 32432 },
		{ videoId: 675465, time: 3534543 },
		{ videoId: 70111470, time: 645243 },
		{ videoId: 654356453, time: 984934 }
	];

	return lists.map(list => {
		return {
			name: list.name, 
			videos: videos
				.filter(video => video.listId === list.id)
				.concatMap(listVideo => { 
						return Array.zip(
							bookmarks.filter(bookmark => bookmark.videoId === listVideo.id), 
							boxarts
								.filter(boxart => boxart.videoId === listVideo.id)
								.reduce(function(smallestArt, art){
										return smallestArt.width * smallestArt.height < art.width * art.height ? smallestArt : art;
								}),
							function(bookmark, boxart) {
								return {
									id: listVideo.id, 
									title: listVideo.title, 
									time: bookmark.time, 
									boxart: boxart.url};
							}
						);
				})
		};
	});   // complete this expression

}

// 27. Stock Ticker
function(pricesNASDAQ, printRecord) {
	var microsoftPrices;
	var now = new Date();
	var tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);

	// use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
	
	microsoftPrices = pricesNASDAQ.filter(function(priceRecord) { 
		return priceRecord.timeStamp > tenDaysAgo;
	});	  // finish this expression

	// Print the trades to the output console
	microsoftPrices.
		forEach(function(priceRecord) {
			printRecord(priceRecord);
		});
}

// WORKING WITH OBSERVABLES

// Microsoft's open-source Reactive Extensions library introduces a new 
// collection type to JavaScript:  Observable.  An Observable is a lot like an 
// Event.  Like an Event, an Observable is a sequence of values that a data 
// producer pushes to the consumer.  However, unlike an Event, an Observable
// can signal to a listener that it has completed, and will send no more data.
//
// Observalbes can send data to consumers asynchronously.  Unlike Array, there 
// is no JavaScript literal syntax for creating Observable sequences.
//
// Observables are a sequence of values, delivered one after the other.  
// Therefore, it's possible that an Observable can go on sending data to a 
// listener forever just like a mouse move event.  
//
// Querying Arrays only gives a snapshot.  By contrast, querying Observables 
// allows to create data sets that react and update as the system changes over 
// time.  This enables reactive programming.
//
// Subscribing to an Event and traversing an Array are fundamentally the same
// operation.  The only difference is that Array traersal is synchronous and 
// completes, and Event traversal is asynchronous and never completes.
//
// Disposing of a Subscription object unsubscribes from the event and prevents 
// memory leaks.  Disposing of a subscription is the asynchronous equivalent 
// of stopping half-way through a counting for loop.
//
// Disposing of a Subscription object is basically the same as calling 
// removeEventListener().  On the surface, these two approaches to Event 
// handling don't seem to be very different.  However, if we convert Event to 
// Observable Objets, we can use powerful functions to transform them.

// 28. Subscribing to an Event
function(button) {
	// the button click handler
	var handler = function(ev) {
		// Unsubscribe from the button event.
		button.removeEventListener("click", handler);
		alert("Button was clicked. Unsubscribing from event.");
	};

	// add the button click handler
	button.addEventListener("click", handler);
}

// 29. Traversing an Event
function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");
	
	var subscription = buttonClicks
		.do(function(clickEvent) {
			alert("Button was clicked. Stopping Traversal.");
			// Stop traversing the button clicks
			subscription.unsubscribe();
		})
		.subscribe();
}

// 30. Completing Sequences with take()
// Developers will often attach an event handler to window.onload, expecting 
// that the handler will only be called once.  In instances such as this, it's 
// good practice to unsubscribe from the event after it's fired.  Failing to 
// unsubscribe is amemory leak.  Depending on the circumstances, memory leaks 
// can seriously destabilize the application and can be very difficult to track 
// down.
// An Observable based on an Event will never complete on its own.  The take() 
// function creates a new sequence that completes after a discrete number of 
// items arrive  This is important, because unlike an Event, when an Observable
// sequence completes it unsubscribes all of its listeners.  That means that
// if we use take() to complete out Event sequence, we don't need to 
// unsubscribe.
function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");

	// Use take() to listen for only one button click
	// and unsubscribe.
	buttonClicks
		// Insert take() call here
		
		.take(1)
		
		.forEach(function() {
			alert("Button was clicked once. Stopping Traversal.");
		});
}
	