const formatNumber = (number) => number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
export const formattedPrice = (number) => `$ ${formatNumber(number)}`;

export const conditionNew = 'new';
export const conditionUsedTranslate = 'Usado';
export const conditionNewTranslate = 'Nuevo';
export const descriptionProductTitleTranslate = 'Descripción del producto';
export const buyTranslate = 'Comprar';
export const searchPlaceHolderTranslate = 'Nunca dejes de buscar';
export const errorMessage = 'Oops, ha ocurrido un error';