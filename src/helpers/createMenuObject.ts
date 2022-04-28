type menuOptions = '' |  'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: menuOptions) => {

  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  };
  

  if(activeMenu !== '') {

    return returnObject[activeMenu] = true;

  }
  console.log(returnObject);
  return returnObject;

}