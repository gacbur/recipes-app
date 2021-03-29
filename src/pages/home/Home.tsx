import Search from '../../components/search/Search'
import RecipesList from '../../components/recipesList/RecipesList'

const Home = () => {
    return (
        <div className="home">
            <Search />
            <RecipesList />
        </div>
    )
}

export default Home
