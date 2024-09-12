import request, { map2model, map2models } from "@/utils/request";
import models from "@/model/index";

// 登录
export function loginApi(mobile: string, password: string) {
  return request
    .post("/bookstore/b/api/login", { mobile, password }, { auth: false })
    .then((data) => map2model(models.UserModel, data));
}
