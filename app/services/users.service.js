const { User, validatePass } = require("../models/users");
const jobseekerService= require("./seekers.service");
const companyService= require("./company.service");
const Customer = require("../models/customer");
const Companie = require("../models/companies");
const { updateDocument } = require("../utils/updateDocument");
const { deleteOneFile } = require("../utils/file");
const bcrypt = require("bcryptjs");

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        User.find()
            .select("-password")
            .then(data => {
                return resolve(data);
            })
            .catch(err => {
                return reject(err);
            })
    })
}

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        User.findById(id)
            .select("-password")
            .then(doc => {
                if (doc == null) throw new Error("User not found");
                resolve(doc);
            })
            .catch(err => {
                reject(err);
            })
    })
}

const updateUser = (id, body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findById(id);
            if (user == null) throw new Error("User not found");
            if (body.files) {
                body.avatar = body.files.avatar ? body.files.avatar[0].filename : '';
                body.background = body.files.background ? body.files.background[0].filename : '';
            }
            const oldAvatar = user.avatar;
            const newAvatar = body.avatar;
            const oldBackground = user.background;
            const newBackground = body.background;

            user.avatar = oldAvatar,
            user.background = oldBackground,
            user.set({
                avatar: newAvatar ? newAvatar : oldAvatar,
                background: newBackground ? newBackground : oldBackground,
                isUpdateProfile:true
            });
            delete body.avatar;
            delete body.background;

            await updateDocument(user, User, body, ['role', 'status', 'password']);
            await user.save();
            if (user.role == "customer") {
                let customer = await Customer.findOne({ user_id: user._id });
                await updateDocument(customer, Customer, body, ['user_id']);
                await customer.save();
                customerService.getJobseeker("user_id", user._id).then(resolve).catch(reject);
            } else if (user.role == "company") {
                let company = await Companie.findOne({ user_id: user._id });
                await updateDocument(company, Companie, body, ['user_id']);
                await company.save();
                companyService.getCompany("user_id", user._id).then(resolve).catch(reject);
            }
            // resolve("Update successful")
        } catch (error) {
            if (body.files) {
                deleteOneFile(body.files.avatar ? body.files.avatar[0].filename : '');
                deleteOneFile(body.files.background ? body.files.background[0].filename : '');
            }
            reject(error)
            
        }
    })
}

const changePassword = (id, oldPass, newPass, newPassRetype) => {
    return new Promise((resolve, reject) => {
        if (!oldPass || !newPass || !newPassRetype) return reject({ message: "Bạn cần nhập đầy đủ thông tin." });
        User.findById(id).then(doc => {
            if (doc == null) throw new Error("User not found");
            if (doc.checkPassword(oldPass)) {
                const { error } = validatePass(data = { password: newPass });
                if (error) {
                    reject(error);
                } else {
                    if (newPass == newPassRetype) {
                        doc.set({ password: bcrypt.hashSync(newPass, 10) });
                        doc.save(err => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve("Mật khẩu đã thay đổi thành công!");
                            }
                        })
                    } else {
                        reject({ message: "Nhập lại mật khẩu chưa đúng!" });
                    }
                }
            } else {
                reject({ message: "Mật khẩu cũ chưa đúng!" });
            }
        }).catch(err => {
            reject(err)
        })
    })
}


module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    changePassword,
}