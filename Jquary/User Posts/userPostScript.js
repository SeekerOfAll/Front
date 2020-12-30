function getUser() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.ir/users',
            success: function (response) {
                console.log(response)
                resolve(response)
            },
            fail: function () {
                reject("failed user")
            }
        })
    })
}

function getComment() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.ir/comments',
            success: function (response) {
                console.log(response)
                resolve(response)
            },
            fail: function () {
                reject("failed comment")
            }
        })
    })
}

function getPost() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.ir/posts',
            success: function (response) {
                console.log(response)
                resolve(response)
            },
            fail: function () {
                reject("failed post")
            }
        })
    })
}

function fetchData() {
    return new Promise((resolve, reject) => {
        getPost().then((posts) => {
            getUser().then((users) => {
                getComment().then((comments) => {
                    console.log(posts, users, comments)
                    resolve(posts, users, comments)
                }).catch((error) => {
                    console.log(error)
                    reject("failed fetch comment")
                })
            }).catch((error) => {
                console.log(error)
                reject("failed fetch user")
            })
        }).catch((error) => {
            console.log(error)
            reject("failed fetch post")
        })
    })
}

function aggregateData() {
    return new Promise((resolve, reject) => {
        let aggregateAllData = []
        fetchData().then((data) => {
            data.posts.map((item) => {
                aggregateAllData.push({
                    user: data.users.filter((user) => {
                        return user.id == item.userId;
                    }).map((items) => {
                        return ({
                            name: items.name,
                            email: items.email,
                            avatar: item.avatar,
                        })
                    }),
                    id: item.id,
                    title: item.title,
                    body: item.body,
                    comments: data.comments.filter((comment) => {
                        return (comment.postId == item.id)
                    }).map((comment_item) => {
                        return ({
                            username: comment_item.name,
                            text: comment_item.body,
                        })

                    })
                })
            })
            resolve(aggregateAllData)
        }).catch((error)=>{
            console.log()
        })

    })
}


fetchData()
aggregateData()