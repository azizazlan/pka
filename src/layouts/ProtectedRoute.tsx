import { Component, Show } from "solid-js";
import { Navigate } from "@solidjs/router";
import { auth } from "../auth";

interface ProtectedRouteProps {
  children: any;
}

const ProtectedRoute: Component<ProtectedRouteProps> = (props) => (
  <Show when={auth.isAuthenticated()} fallback={<Navigate href="/login" />}>
    {props.children}
  </Show>
);

export default ProtectedRoute;
