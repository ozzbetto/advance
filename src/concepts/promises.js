import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>`;
    }

    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371f2343e37870b91ef1';

    let hero1,hero2;
    findHero(id1)
        .then((hero) => {
            hero1 = hero;

            findHero(id2)
            .then(hero2 => {
                renderTwoHeroes(hero1, hero2);
            })
            .catch(error => renderError(error));
        })
        .catch(error => renderError(error));
}

/**
 * 
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
    return new Promise( (resolve, reject) => {
        
        const hero = heroes.find(hero => hero.id === id);

        if  (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);
    });
}