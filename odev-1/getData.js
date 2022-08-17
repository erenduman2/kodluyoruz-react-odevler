import axios from "axios";

async function getData(user_id){

    return new Promise(async(resolve, reject) => {
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id);
        resolve({user, post});
    })

}

export default getData;