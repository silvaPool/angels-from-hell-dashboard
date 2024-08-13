import AdminHome from "../pages/admin/AdminHome";
import AdminGuard from "../utils/AdminGuard";

const AdminRoutes = [
  {
    path: "/admin",
    element: (
      <AdminGuard>
        <AdminHome />
      </AdminGuard>
    ),
  },
];

export default AdminRoutes;
