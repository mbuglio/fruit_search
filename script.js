const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

input.addEventListener('keyup', searchHandler);

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(input) {
	let results = [];
	const userInput = input.toLowerCase();
	
	for(const fruitItem of fruit){
		if(fruitItem.toLowerCase().includes(userInput)){
			results.push(fruitItem);
		}
	}

	return results;
}



function searchHandler(e) {
	const userInput = input.value;
	const results = search(userInput);
	showSuggestions(results,userInput);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	if(inputVal.trim() === ''){
		return;
	}

	const maxResults = 10;
	const displayedResults = results.slice(0, maxResults);

	displayedResults.forEach(result => {
		const li = document.createElement('li');
		li.textContent = result;
		suggestions.appendChild(li);
	})
	
}

suggestions.addEventListener('click', useSuggestion);

function useSuggestion(e) {
	if(e.target.tagName === 'LI'){
		input.value = e.target.textContent;
		suggestions.innerHTML = '';
	}
}


