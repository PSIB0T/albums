import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumdetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
             .then(res => {
                this.setState({ albums: res.data });
             }).catch(err => {
                 console.log(err);
             });
    }

    renderAlbums() {
        return this.state.albums.map((album) => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log('State is ', this.state);
         return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
   
}

export default AlbumList;
