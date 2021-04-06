import { gql, useQuery } from "@apollo/client";

export const GET_RECIPE = gql`
  query {
    recipe(id: 2) {
      title
    }
  }
`;

function Recipes() {
  const { data } = useQuery(GET_RECIPE);
  console.log(data);

  return <div className="recipes-container"></div>;
}

export default Recipes;
