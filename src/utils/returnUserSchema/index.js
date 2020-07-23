const returnCreate = (data) => {

    const user = {
        _id: data.id,
        name: data.name,
        login: data.login,
        email: data.email,
        type: data.type,
        file: data.file,
        token: data.token
    };

    return user;
};

const returnFind = (user, file) => {
    const findUser = [];
    const findFile = [];
    for (let i = 0; i < user.length; i++) {
        const userfind = {
            _id: user[i].id,
            name: user[i].name,
            login: user[i].login,
            email: user[i].email,
            token: user[i].token,
            create_at: user[i].create_at,
            upadate_at: user[i].upadate_at
        };

        const avatar = {
            user_id: file[i][0].user_id,
            type: file[i][0].type,
            name: file[i][0].name,
            data: {
                data: file[i][0].data
            },
        };

        findUser.push(userfind);
        findFile.push(avatar);

    }
    return {
        user: findUser,
        file: findFile
    };

};

const returnFindId = (user, file) => {

    const userfindId = {
        _id: user.id,
        name: user.name,
        login: user.login,
        email: user.email,
        type: user.type,
        file: user.file,
        token: user.token
    };

    const fileFind = {
        user_id: file.user_id,
        type: file.type,
        name: file.name,
        data: {
            data: file.data
        },

    };

    return {
        user: userfindId,
        file: fileFind
    };

};

const returnUpdate = (user) => {
    const userUpdate = {
        id: user.id,
        name: user.name,
        login: user.login,
        email: user.email,
        type: user.type,
        token: user.token,
        created_at: user.create_at,
        updated_at: user.updated_at
    };

    return userUpdate;
};

module.exports = {
    returnCreate,
    returnFind,
    returnFindId,
    returnUpdate
};