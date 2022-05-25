import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const RouteOrRedirect = (props) => {
    return (
        <div>
            {isMatch(props) ? (
                <Route
                    path={props.path}
                    component={props.component}
                    exact={props.exact}
                />
            ) : (
                <>{handleRedirect(props)}</>
            )}
        </div>
    );
};

const handleRedirect = (props) => {
    return <Redirect to="/">{props.itemNotFound()}</Redirect>;
};

const isMatch = (props) => {
    const targetItem = props.computedMatch.params.recipeId;
    const matched = props.recipes.some((recipe) => {
        return recipe.id === targetItem;
    });
    return matched;
};

export default RouteOrRedirect;
