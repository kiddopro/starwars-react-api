const getState = ({ getStore, getActions, setStore }) => {
	const URL_PERSONAJES = "https://www.swapi.tech/api/people?page=1&limit=100";

	const URL_PLANETAS = "https://www.swapi.tech/api/planets?page=1&limit=100";
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
			listaPersonajes: [],
			listaPlanetas: [],
			favorites: [],
			character: {}
		},
		actions: {
			getCharacter: id => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(res => res.json())
					.then(data => {
						setStore({ character: data.result });
					})
					.catch(err => err);
			},
			isActive: item => {
				const store = getStore();
				if (store.favorites.includes(item)) {
					return true;
				} else {
					return false;
				}
			},
			setFavorites: favorite => {
				const store = getStore();
				if (store.favorites.includes(favorite)) {
					getActions().removeFavorites(favorite);
				} else {
					setStore({ favorites: [...store.favorites, favorite] });
				}
			},
			removeFavorites: favorite => {
				const store = getStore();
				let newList = store.favorites.filter(elem => elem != favorite);
				setStore({ favorites: newList });
			},
			// addPersonajes: personaje => {
			// 	const store = getStore();
			// 	setStore({ listaPersonajes: [...store.listaPersonajes, personaje] });
			// },
			// addPlanetas: planeta => {
			// 	const store = getStore();
			// 	setStore({ listaPlanetas: [...store.listaPlanetas, planeta] });
			// },

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch(URL_PERSONAJES)
					.then(res => res.json())
					.then(response => {
						// store.actions.addPersonajes(response.results);

						setStore({ listaPersonajes: response.results });
					})
					.catch(err => err);

				fetch(URL_PLANETAS)
					.then(res => res.json())
					.then(data => {
						setStore({ listaPlanetas: data.results });
					})
					.catch();
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
