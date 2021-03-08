// <GifListContainer /> should be a container that does data fetching and then renders its corresponding sub-component. That’s it.

import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }
    
    fetchGIFs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=kkHxeFwHlx2EFhIpe8ktfoBnFmCE5Ojs&rating=g`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() { 
       this.fetchGIFs() 
    }

    render() {
        return(
          <div>
            <GifSearch fetchGIFs={this.fetchGIFs} />
            <GifList gifs={this.state.gifs} />
          </div>
        )
    }

}

export default GifListContainer;