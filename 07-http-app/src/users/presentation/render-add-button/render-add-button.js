import './render-add-button.css'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = ( element ) => {

    const fabButton = document.createElement('button');
    fabButton.innerHTML = 'Agregar';
    fabButton.classList.add('fab-button');

    element.append( fabButton );

    //TODO:
    fabButton.addEventListener( 'click', () => {

        throw Error('No inplementado');

    });

}