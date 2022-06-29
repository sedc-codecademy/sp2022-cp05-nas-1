function searchFunc(){
    let url = new URL(window.location);
    let value = '';
    let key = '';

    url.searchParams.forEach((val,k) => {
        value = val;
        key = k;
    });  
    
    if(value !== '' && key === 'search'){
        document.querySelector('.main').innerHTML = '<ul>';

        document.querySelector('.main').innerHTML += '<ul>';
            for(let i=0; i<25; i++){
            document.querySelector('.main').innerHTML += `
                <li>${value}<li>
            `;
        };
        document.querySelector('.main').innerHTML += '</ul>'
    };
};

export {searchFunc};