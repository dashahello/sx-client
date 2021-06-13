import gql from 'graphql-tag';
import { useState } from 'react';
import { Query, useQuery } from 'react-apollo';
import FilterSuccess from './FilterSuccess';
import LaunchItem from './LaunchItem';
import MissioKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      tentative_max_precision
    }
  }
`;

export default function Launches({ handleChange }) {
  const {
    loading: launchesLoading,
    error: launchesError,
    data: { launches } = {}
  } = useQuery(LAUNCHES_QUERY);

  // if (loading) return <h4>Loading...</h4>;

  const [filterEnabled, setFilterEnabled] = useState(false);

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissioKey />
      <FilterSuccess
        handleChange={handleChange}
        filterEnabled={filterEnabled}
        setFilterEnabled={setFilterEnabled}
      />

      {launchesLoading ? (
        <h4>Loading...</h4>
      ) : launchesError ? (
        <h4>Error</h4>
      ) : (
        launches.map((launch, i) => (
          <LaunchItem key={i} launch={launch} filterEnabled={filterEnabled} />
        ))
      )}

      {/* <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);

          return (
            <>
              {data.launches.map((launch) => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
            </>
          );
        }}
      </Query> */}
    </>
  );
}
