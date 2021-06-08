let count = 0;
const getData = (args) => {
    //calls api and fetch the data;
    const res = document.getElementById("search-bar").value;
    console.log(res)
    console.log("fetching data ", count++);
}

//example scenerio could be number of api calls made
//on search bar. Rather than making a api for every keystroke
//will make a api only after certain time period.

const debounce = function (args) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            getData(this, args)
        }, 500);
    }
}();

//throttling function
//function will be executed after certain time interval
const throttling = function (limit) {
    let flag = true;
    return function () {
        if (flag) {
            getData();
            flag = false
        }
        setTimeout(() => {
            flag = true
        }, limit)
    }
}
