export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";


export const getSmurf = () => dispatch => {
    

    dispatch({ type: FETCH_SMURF_START });
    fetch('http://localhost:3333/smurfs', {
        "method": "GET",
    })
        .then(response => {
            return response.json();
        })
        .then(res => {

            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res })
        })
        .catch (err => {
            dispatch({ type: FETCH_SMURF_FAIL, payload: err.response})
        });
};

export const addSmurf = (item) => dispatch => {
    
    console.log('start addSmurf');

    fetch('http://localhost:3333/smurfs', {
        "method": "POST",
        body: JSON.stringify(item),
        headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())

        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res })
        })
        
        .catch(error => console.error('Error:', error));
};
