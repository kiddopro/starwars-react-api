const getState = ({ getStore, getActions, setStore }) => {
	const URL = "https://www.swapi.tech/api/people/";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			listaPersonajes: []
		},
		actions: {
			addPersonajes: personaje => {
				const store = getStore();
				setStore({ listaPersonajes: [...store.listaPersonajes, personaje] });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch(URL)
					.then(res => res.json())
					.then(response => {
						store.actions.addPersonajes(response.results);
						console.log(response.results);
					})
					.catch(err => err);
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
