export const renderItems = (data) => {
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
      empresa: item.facts.Empresa,
      category: item.facts.category,
    }
  })
  let blocoItems = ""
  dataset.forEach(item => {
    blocoItems += `
        <li itemscope itemtype="languaje__item" class="languaje__item">
          <div class="languaje__content">
          <img src="${item.imageUrl}" class="languaje__img">
            <dd itemprop="select-sort"><p><strong>Nombre:</strong>${item.name}</p></dd>
            <dd itemprop="select-sort"><p><strong>Lenguaje:</strong>:${item.creator}</p></dd>    
            <dd itemprop="select-sort"><p><strong>Año de creacion:</strong> ${item.yearOfBirth}</p></dd>
            <p> <class="languaje__description">${item.shortDescription}</p>
            <dd itemprop="select-sort"><p><strong>Empresa:</strong>${item.empresa}</p></dd>
            <dd itemprop="select-sort"><p><strong>Categoria:</strong>${item.category}</p></dd>
            </div>
        </li>
  `
  });
  const ul = document.createElement('ul');
  ul.classList.add('languaje__item__container')
  ul.setAttribute('id', 'languaje__list')
  //console.log(blocoItems);
  ul.innerHTML = blocoItems;

  return ul; //"<ul id ='languaje__list' class='languaje__item__container' >${blocoItems} </ul>";
};
