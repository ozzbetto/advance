/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';
    
    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromess(),
        mediumPromess(),
        fastPromess(),
        mediumPromess(),
        fastPromess()
    ]).then( renderValue );
}

const slowPromess = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromess = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);

});

const fastPromess = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});