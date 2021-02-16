import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);


  if (activityStore.loadingInitial) return <LoadingComponent content="Loading app"  />
  return (
    // <> = shortcut version of using a Fragment which is like using a div but hides it from html
    <>
      <NavBar />
      <Container style={{ margin: "7em" }}>
        <ActivityDashboard/>
      </Container>

      <ul></ul>
    </>
  );
}

export default observer(App);
