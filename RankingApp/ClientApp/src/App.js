import React, {Component} from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {Home} from './components/Home';
import {FetchData} from './components/FetchData';
import {Counter} from './components/Counter';

import './custom.css'
import './App.scss'
import RankItems from "./components/RankItems";
import RankItemsContainer from "./components/RankItemsContainer";
import MovieImageArr from "./components/MovieImages";
import AlbumImageArr from "./components/AlbumImages";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route path='/counter' component={Counter}/>
                <Route path='/fetch-data' component={FetchData}/>
                <Route path='/rank-movies'>
                    <RankItemsContainer dataType={1} imgArr={MovieImageArr}/>
                </Route>
                <Route path='/rank-albums'>
                    <RankItemsContainer dataType={2} imgArr={AlbumImageArr}/>
                </Route>
            </Layout>
        );
    }
}
