const backendDomin = "http://localhost:8080"

const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    getAllContactUs : {
        url : `${backendDomin}/api/getAllContactUs`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${backendDomin}/api/all-user`,
        method : 'get'
    },
    countForDashboard : {
        url : `${backendDomin}/api/countForDashboard`,
        method : 'get'
    },
    deleteSingleUser : {
        url : `${backendDomin}/api/deleteSingleUser/`,
        method : 'get'
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "post"
    }
    ,
    savebooking : {
        url : `${backendDomin}/api/savebooking`,
        method : "post"
    }
    ,
    createContactUs : {
        url : `${backendDomin}/api/createContactUs`,
        method : "post"
    }
    ,
    
    deleteSingleContactUs : {
        url : `${backendDomin}/api/deleteSingleContactUs/`,
        method : "post"
    }
    ,
    productGet : {
        url : `${backendDomin}/api/productGet`,
        method : "get"
    }
    ,
    addToCart : {
        url : `${backendDomin}/api/addToCart`,
        method : "post"
    }
    ,
    getAllCart : {
        url : `${backendDomin}/api/getAllCart`,
        method : "get"
    }
    ,
    updateCart : {
        url : `${backendDomin}/api/updateCart/`,
        method : "put"
    }
    ,
    deleteCart : {
        url : `${backendDomin}/api/deleteCart/`,
        method : "delete"
    }
    ,
    deleteSingleCartItem : {
        url : `${backendDomin}/api/deleteSingleCartItem/`,
        method : "delete"
    }
    ,
    orderCreate : {
        url : `${backendDomin}/api/orderCreate/`,
        method : "post"
    }
    ,
    orderGetAll : {
        url : `${backendDomin}/api/orderGetAll`,
        method : "get"
    },
    orderGetAllForAdmin : {
        url : `${backendDomin}/api/orderGetAllForAdmin`,
        method : "get"
    },
    orderDelete : {
        url : `${backendDomin}/api/orderDelete/`,
        method : "get"
    }
    
}


export default SummaryApi;