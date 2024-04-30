export const renderItems = (data) => {
  //AQUI SE GENERA LOS ELEMENTOS HTML

  
  const dataset = data.map((item) => {
    return {
      name: item.name,
      imageUrl: item.imageUrl,
      shortDescription: item.shortDescription,
      creator: item.creator,
      yearOfBirth: item.yearOfBirth,
      empresaName: item.facts ? item.facts.empresaName : null,
      categoryName: item.facts ? item.facts.categoryName : null,
      roleName: item.facts ? item.facts.roleName : null,
    }
  });

  let blocoItems = ""
  dataset.forEach(item => {

    blocoItems +=  `
    <li itemscope itemtype="languaje__item" class="languaje__item">
    <dl itemscope itemtype="languaje__item" class="languaje__item">
      <img src="${item.imageUrl}" class="languaje__img" alt="Ada Lovelace" />
      <dt>Nombre:</dt><dd itemprop="sort">${item.name}</dd>
      <dt>Lenguaje:</dt><dd itemprop="lenguaje">${item.creator}</dd>
      <dt>Descripción:</dt><dd itemprop="description">${item.shortDescription}</dd>
      <dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">${item.yearOfBirth}</dd>
      <dt>Empresa:</dt><dd itemprop="empresaName">${item.empresaName}</dd>
      <dt>Categoria:</dt><dd itemprop="category">${item.categoryName}</dd>
    </dl>
    </li>
    `; 

  
  
  });
  const ul = document.createElement('ul');
  ul.classList.add('languaje__item__container')
  ul.setAttribute('id', 'languaje__list')
  //console.log(blocoItems);
  ul.innerHTML = blocoItems;

  return ul; //"<ul id ='languaje__list' class='languaje__item__container' >${blocoItems} </ul>";
};
