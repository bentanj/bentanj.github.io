function get_all() {

    console.log("[START] get_all()");

    // YOUR CODE GOES HERE
    // Axios calling API endpoint asynchronously
    let api_endpoint_url = 'http://krazywoman.com/krazystars/api/star/read.php'

    axios.get(api_endpoint_url) //making a GET request and sending it to the url
    .then(response => {
        //Inspect the response in JS Console
        // console.log(response.data.records); // Array of (star) objects

        // console.log(response.data.records[0]); // First star object

        // console.log(response.data.records[0].fullname); // First star Object's fullname

        let array_stars = response.data.records;

        // let text = "";
        
        // for (let i= 0; i < array_stars.length; i++) {
        //     let name = array_stars[i].fullname;
        //     let list_item = "<li>".concat(name, "</li>");
        //     text = text.concat(list_item)
        // }
        // text = text.concat("</ul>")
        // text = "<ul>".concat(text);

        // let temp = document.getElementById("stars");
        // temp.innerHTML = text;
        // console.log(temp);

        // 2nd method (DOM manipulation)
        let ul = document.createElement('ul');

        for (star of array_stars) {
            let li = document.createElement('li');
            let li_text = document.createTextNode(star.fullname)
            li.appendChild(li_text)
            ul.appendChild(li)
        }

        let star_el = document.getElementById("stars");
        star_el.appendChild(ul);


    }) 
    .catch((error) => {
        console.log(error.message);
    })


    // Will be displayed first while Axios is making the API call
    console.log("[END] get_all()");
}
function get_all_template() {

    console.log("[START] get_all()");

    // YOUR CODE GOES HERE
    // Axios calling API endpoint asynchronously
    let api_endpoint_url = 'http://krazywoman.com/krazystars/api/star/read.php'

    axios.get(api_endpoint_url) //making a GET request and sending it to the url
    .then(response => {
        //Inspect the response in JS Console
        // console.log(response.data.records); // Array of (star) objects

        // console.log(response.data.records[0]); // First star object

        // console.log(response.data.records[0].fullname); // First star Object's fullname

        let array_stars = response.data.records;

        let result_str = `
            <ul>`;

        for (star of array_stars) {
            let fullname = star.fullname;
            result_str += `
            <li>${fullname}</li>
            `;
        }

        result_str += `</ul>`;

        let star_div = document.getElementById("stars");
        star_div.innerHTML = result_str;
        
    }) 
    .catch((error) => {
        console.log(error.message);
    })


    // Will be displayed first while Axios is making the API call
    console.log("[END] get_all()");
}
