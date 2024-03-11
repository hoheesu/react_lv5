import React, { useEffect } from "react";
import { modalRoutePath, modalTextChange } from "../redux/modules/stateModalSlice";
import { useDispatch } from "react-redux";
import { requestUserCheck } from "../axios/api";

const withAuth = (WrappedComponent, option) => {
  const AuthComponent = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
      (async () => {
        const result = await requestUserCheck();
        if (result !== "OK" && !option) {
          dispatch(modalTextChange("로그인이 필요합니다."));
          dispatch(modalRoutePath("/login"));
        }
        if (result === "OK" && option) {
          dispatch(modalTextChange("로그인을 이미 한 유저입니다."));
          dispatch(modalRoutePath("/"));
        }
      })();
    }, []);
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
