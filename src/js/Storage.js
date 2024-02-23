export { MyStorage };

// let testObject = { one: 1, two: 2, three: 3 };
// let anotherTestObject = { four: 4, five: 5, six: 6 };
// localStorage.setItem("testObject", JSON.stringify(testObject));
// localStorage.setItem("anotherTestObject", JSON.stringify(anotherTestObject));

class MyStorage {
	static getProjectStorage() {
		console.log("this function will get project local storage");
	}

	static setProjectStorage(projects) {
		localStorage.setItem("projects", projects);
		console.log(localStorage);
	}
}
