const returnCreate = (data) => {

    const user = {
        id: data.id,
        name: data.name,
        login: data.login,
        email: data.email,
        type: data.type,
        file: data.file,
        token: data.token
    };

    return user;
};

const returnUpdateStudant = (data, user) => {
    const studant = {
        id: user.id,
        name: user.name,
        login: user.login,
        email: user.email,
        type: user.type,
        token: user.token,
        number_registration: data.number_registration,
        student_responsible_one: data.student_responsible_one,
        student_responsible_two: data.student_responsible_two,
        date_of_birth: data.date_of_birth,
        created_at: user.create_at,
        updated_at: user.updated_at
    };

    return studant;
};

const returnFind = (user, file) => {
    const findUser = [];
    const findFile = [];
    for (let i = 0; i < user.length; i++) {
        const userfind = {
            id: user[i].id,
            name: user[i].name,
            login: user[i].login,
            email: user[i].email,
            type: user[i].type,
            token: user[i].token,
            create_at: user[i].create_at,
            upadate_at: user[i].upadate_at
        };
        findUser.push(userfind);
    }
        
    for (let index = 0; index < file.length; index++) {
        const avatar = {
            user_id: file[index].user_id,
            type: file[index].type,
            name: file[index].name,
            data: {
                data: file[index].data
            }
        };

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
    returnUpdate,
    returnUpdateStudant
};