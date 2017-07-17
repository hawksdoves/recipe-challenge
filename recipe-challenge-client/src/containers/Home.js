import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import getAllRecipes from '../actions/getRecipes';

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

const HomeContainer = connect(
  mapStateToProps
)(Home)

export default HomeContainer