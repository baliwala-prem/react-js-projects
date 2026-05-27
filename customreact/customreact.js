

/*function  customRender(reactElement,container) {
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement);

  }*/

    function customRender(reactElement,mainContainer)
    {
        /*
        const domElement=document.createElement(reactElement.type);
        
        domElement.textContent=reactElement.Children;
        domElement.setAttribute('href',reactElement.props.href);
        domElement.setAttribute('target',reactElement.props.target);
        mainContainer.appendChild(domElement);
        */

        //using for loop
        const domElement=document.createElement(reactElement.type)
        domElement.textContent=reactElement.Children;

        for(const prop in reactElement.props)
        {
            if(prop==='children') continue;
            domElement.setAttribute(prop,reactElement.props[prop]);
        }
        mainContainer.appendChild(domElement);

    }

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:"Click me to Visit Google"
}

function customRenderInput(reactElementInput,mainContainer)
{
    const domElement=document.createElement(reactElementInput.type);
    
    for(const prop in reactElementInput.props)
    {
        domElement.setAttribute(prop,reactElementInput.props[prop]);
    }
    mainContainer.appendChild(domElement);
}
const reactElementInput={
    type:'input',
    props:{
        type:'text',
        placeholder:'Enter The Name',
        name:'fname'
    }
}




const mainContainer=document.querySelector("#root");

customRender(reactElement,mainContainer);
customRenderInput(reactElementInput,mainContainer);