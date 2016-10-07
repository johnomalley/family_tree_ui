export default ({firstName, familiarName, lastName, maidenName}) =>
    `${familiarName || firstName} ${maidenName ? maidenName + ' ' : ''}${lastName}`