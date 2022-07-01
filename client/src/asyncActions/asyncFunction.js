export const fetchData = (query, action) => {
    return async dispatch => {
        await fetch('http://localhost:4000/graphql', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query, variables: {} }),
          })    
          .then(response => response.json())
          .then(json => dispatch(action(json.data.categories)))
    }
}