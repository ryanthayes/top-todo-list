export const createHtmlElement = (type, id, classArray, attKey, attVal, content, parent) => {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (classArray)
      classArray.forEach((myClass) => element.classList.add(myClass));
    if (attKey) element.setAttribute(attKey, attVal);
    if (content) element.innerText = content;
    if (parent) parent.append(element);
    
    return element;
  };
