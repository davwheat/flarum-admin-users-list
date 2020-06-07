import addUsersListPane from "./addUsersListPane";

app.initializers.add("davwheat-admin-users-list", () => {
    app.extensionSettings["davwheat-admin-users-list"] = () => {
        return m.route(app.route("user-list"));
    };

    addUsersListPane();
});
