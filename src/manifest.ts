import { lazy } from "react";

const manifest = {
  plugin: "care_doctor_connect",
  routes: {},
  extends: [],
  components: {
    PatientInfoCardQuickActions: lazy(
      () => import("./components/pluggables/PatientInfoCardQuickActions")
    ),
  },
  navItems: [],
  encounterTabs: {},
};

export default manifest;
