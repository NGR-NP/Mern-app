import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CustomToastM from "../components/ToastMsg/CustomToast";
import {
  hideToastMessage,
  selectCurrentMessage,
  selectCurrentType,
  selectCurrentVisible,
} from "../redux/customToast/toastSlice";

const Layout = () => {
  const visible = useSelector(selectCurrentVisible);
  const message = useSelector(selectCurrentMessage);
  const type = useSelector(selectCurrentType);
  const dispatch = useDispatch();
  useEffect(() => {
    if (visible) {
      const timeoutId = setTimeout(() => {
        dispatch(hideToastMessage());
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [visible, dispatch]);

  return (
    <>
      {visible && <CustomToastM message={message} type={type} />}
      <Outlet />;
    </>
  );
};

export default Layout;