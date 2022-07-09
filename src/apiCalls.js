const getData = (url) => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error (response.text)
        } else {
          return response.json()
        }
      })
    //   .catch(error => {
    //     this.setState({error:error.message})
    //   })
    }

export default getData 