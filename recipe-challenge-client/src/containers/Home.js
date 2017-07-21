import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../components/Home';

import { addFavourite, removeFavourite, getRecipes } from '../actions';


const mapStateToProps = (state) => {

    return {
        recipes: state.recipes,
        favourites: state.favourites,
        isFetchingRecipes: state.isFetchingRecipes
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
    addFavourite, 
    removeFavourite, 
    getRecipes
 }, dispatch)

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer;
