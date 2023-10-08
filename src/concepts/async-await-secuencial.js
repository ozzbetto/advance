/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async( element ) => {

        console.time('Start');
    // const value1 = await slowPromess();
    // const value2 = await mediumPromess();
    // const value3 = await fastPromess();

    const [ value1, value2, value3 ] = await Promise.all([
        slowPromess(),
        mediumPromess(),
        fastPromess(),
    ]);

    element.innerHTML = `
        value1: ${ value1 } <br/>
        value2: ${ value2 } <br/>
        value3: ${ value3 } <br/>
    `
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
