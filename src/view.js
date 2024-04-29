export const renderItems = (data) => {
  //AQUI SE GENERA LOS ELEMENTOS HTML

  //console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  // <dl itemscope itemtype="Lenguajes de programacion">
  //   <img src="" />
  //   <dt>Nombre:</dt><dd itemprop="name">Phyton</dd>
  //   <dt>short Descripción:</dt><dd itemprop="short description">Pionera de la informática, fue la primera programadora.</dd>
  //   <dt>Descripción:</dt><dd itemprop="description">Pionera de la informática, fue la primera programadora.</dd>
  //   <dt>Año de creacion:</dt><dd itemprop="yearOfBirth">1843</dd>
  //   <dt>Creador:</dt><dd itemprop="creator">London, England</dd>
  //   <dt>Comanpanias que lo usan:</dt><dd itemprop="companieUsingIt">Computer Science</dd>
  // </dl>
  // seria DL
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
  //carro : item.name. ? item.name.kia,
  //carro.name == 'kia' ? true : false
  //array.length == 25  ? true :false 
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
